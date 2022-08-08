import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/userRespository";
import { UnauthorizedError } from '../helpers/api-errors';

type JwtPayload = {
  login: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError('Não autorizado.')
  }
  const token = authorization.replace('Bearer ', '')
  const { login } = jwt.verify(token, process.env.JWT_PSW ?? '') as JwtPayload
  const isLogin = await userRepository.findOneBy({ login });
  if (!isLogin) {
    throw new UnauthorizedError("Dados inválidos!");
  }
  const { password: _, ...loggeduser} = isLogin;

  req.user = loggeduser;

  next()
}
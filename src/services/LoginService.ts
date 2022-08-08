import { userRepository } from '../repositories/userRespository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BadRequestError } from "../helpers/api-errors";

export default class LoginService {
  async login(login: string, password: string) {

    const isLogin = await userRepository.findOneBy({ login });
    if (!isLogin) {
      throw new BadRequestError("Dados inválidos!");
    }

    const verifyPassword = await bcrypt.compare(password, isLogin.password);
    if (!verifyPassword) {
      throw new BadRequestError("Dados inválidos!");
    }

    const token = jwt.sign({id: isLogin.id}, process.env.JWT_PSW ?? '', {expiresIn: '1d', } )
    const {password: _, ...user} = isLogin;
    return {status: 200, message: {user, token}};
  }
}
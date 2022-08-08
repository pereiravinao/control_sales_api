import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import LoginService from "../services/LoginService";

export class LoginController {
  async login(req: Request, res: Response) {
    const {login, password} = req.body;
    if (!password || !login) {
      throw new BadRequestError("Dados inválidos!");
    }
    const data = await new LoginService().login(login, password);
    return res.status(data.status).json({message: data.message})
  }
}
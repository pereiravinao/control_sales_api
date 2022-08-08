import { Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-errors";
import UserService from "../services/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    const data = await new UserService().create(req.body);
    return res.status(data.status).json({message: data.message})
  }

  async getProfile(req: Request, res: Response) {
    const user = req.user;
    return res.status(200).json({message: user})
  }
}
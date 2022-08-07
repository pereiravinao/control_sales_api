import { Request, Response } from "express";
import UserService from "../services/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    const data = await new UserService().create(req.body);
    return res.status(data.status).json({message: data.message})
  }
}
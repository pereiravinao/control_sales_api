import { User } from './../entities/User';
import { READY_STATUS } from "../helpers/returnResponses";
import { BadRequestError, UnauthorizedError } from '../helpers/api-errors';
import { userRepository } from '../repositories/userRespository';
import bcrypt from 'bcrypt';

export default class UserService {
  async create(body: User) {
    const {name, password, login} = body;
    if (!name || !password || !login) {
      throw new BadRequestError("Dados inválidos!");
    }
    const isLogin = await userRepository.findOneBy({ login });
    if (isLogin) {
      throw new BadRequestError("Login em uso. Tente outro!");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({name, login, password: hashPassword});
    await userRepository.save(newUser);
    return READY_STATUS.CREATED;
  }
}
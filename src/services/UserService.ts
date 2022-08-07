import { User } from './../entities/User';
import { READY_STATUS } from "../helpers/returnResponses";
import { BadRequestError } from '../helpers/api-errors';
import { userRepository } from '../repositories/userRespository';

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
    const newUser = userRepository.create({name, login, password})
    await userRepository.save(newUser);
    return READY_STATUS.CREATED;
  }
}
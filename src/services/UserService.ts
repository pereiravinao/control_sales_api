import { User } from './../entities/User';
import { READY_STATUS } from "../helpers/returnResponses";
import { BadRequestError } from '../helpers/api-errors';

export default class UserService {
  async create(body: User) {
    const {name, password, login} = body;
    if (!name || !password || !login) {
      throw new BadRequestError("Dados inválidos!");
      
    }
    return READY_STATUS.CREATED;
  }
}
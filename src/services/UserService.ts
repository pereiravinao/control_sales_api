import { User } from './../entities/User';
import { ERROR_STATUS, READY_STATUS } from "../returnResponses";

export default class UserService {
  async create(body: User) {
    const {name, password, login} = body;
    if (!name || !password || !login) {
      return ERROR_STATUS.METHOD_NOT_ALLOWED;
    }
    return READY_STATUS.CREATED;
  }
}
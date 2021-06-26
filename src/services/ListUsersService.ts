import { getCustomRepository } from "typeorm";
import { classToPlain } from 'class-transformer';

import { UserRepository } from "../repositories/UserRepository";

class ListUsersService {

  async execute(user_id: string) {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    const loggedInUser = await userRepository.findOne(user_id);

    if (loggedInUser.admin) {
      return users;
    }

    return classToPlain(users);
  }

}

export { ListUsersService };

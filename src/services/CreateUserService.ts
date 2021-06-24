import { getCustomRepository } from 'typeorm';
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface UserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
};

class CreateUserService {
  async execute({ name, email, password, admin = false }: UserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    if (!password) {
      throw new Error("Password incorrect");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };

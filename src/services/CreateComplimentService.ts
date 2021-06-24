import { getCustomRepository } from "typeorm";

import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface ComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
};

class CreateComplimentService {
  async execute({
    user_sender, user_receiver, tag_id, message
  }: ComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver!');
    }

    const userReceiverExists = await userRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User receiver does not exists!');
    }

    const compliment = complimentRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
};

export { CreateComplimentService };

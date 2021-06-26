import { Request, Response } from 'express';

import { ListComplimentsByUserSenderService } from '../services/ListComplimentsByUserSenderService';

class ListComplimentsByUserSenderController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listComplimentsByUserSenderService = new ListComplimentsByUserSenderService();

    const compliments = await listComplimentsByUserSenderService.execute(user_id);

    return response.json(compliments);
  }

}

export { ListComplimentsByUserSenderController };

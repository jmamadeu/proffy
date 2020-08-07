import { getRepository } from 'typeorm';
import { Response, Request } from 'express';

import Connection from '../database/entity/Connection';

export default class ConnectionController {
  async index(_, res: Response) {
    const connectionRepository = getRepository(Connection);

    const connections = await connectionRepository.find({
      relations: ['user'],
    });

    return res.json(connections);
  }

  async create(req: Request, res: Response) {
    const connectionRepository = getRepository(Connection);

    const { userId } = req.body;

    try {
      const connection = connectionRepository.create({ user: userId });

      await connectionRepository.save(connection);

      return res.status(201).json(connection);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

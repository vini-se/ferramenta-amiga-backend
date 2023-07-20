import { Friend } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FriendUseCase from './FriendUseCase';
import { IFriendDTO } from '../repositories/dto/IFriendDTO';

class FriendController {

  async getFriendById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const friendUseCase = container.resolve(FriendUseCase);
      const friend = await friendUseCase.getFriendById(Number(id));
      return res.json({ data: friend });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getFriends(req: Request, res: Response): Promise<Response> {
    try {
      const friendUseCase = container.resolve(FriendUseCase);
      const friends = await friendUseCase.getFriends();
      return res.json({ data: friends });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createFriend(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, tel } = req.body;
      const data: IFriendDTO = {
        name: name,
        email: email,
        tel: tel,
      }
      const friendUseCase = container.resolve(FriendUseCase);
      const friend = await friendUseCase.createFriend(data);
      return res.status(201).json({ data: friend });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateFriend(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, email, tel } = req.body;
      const data: Friend = {
        id: Number(id),
        name: name,
        email: email,
        tel: tel,
      }
      const friendUseCase = container.resolve(FriendUseCase);
      const friend = await friendUseCase.updateFriend(data);
      return res.json({ data: friend });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteFriend(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const friendUseCase = container.resolve(FriendUseCase);
      const friend = await friendUseCase.deleteFriend(Number(id));
      return res.json({ data: friend });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default FriendController;

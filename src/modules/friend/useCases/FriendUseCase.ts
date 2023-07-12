import { Friend } from "@prisma/client";
import FriendRepository from "../repositories/FriendRepositorie";
import { IFriendDTO } from "../repositories/dto/IFriendDTO";

class FriendUseCase {
  private readonly friendRepository: FriendRepository;

  constructor(){
    this.friendRepository = new FriendRepository();
  }

  async getFriendById(id: number): Promise<Friend | null> {
    return this.friendRepository.getFriendById(id);
  }

  async getFriends(): Promise<Friend[]> {
    return this.friendRepository.getFriends();
  }

  async createFriend(data: IFriendDTO): Promise<Friend | null> {
    return this.friendRepository.createFriend(data);
  }

  async updateFriend(data: Friend): Promise<Friend | null> {
    return this.friendRepository.updateFriend(data);
  }

  async deleteFriend(id: number): Promise<boolean> {
    return this.friendRepository.deleteFriend(id);
  }
}

export default FriendUseCase;
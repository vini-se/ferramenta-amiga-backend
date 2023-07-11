import { PrismaClient } from "@prisma/client";
import { IFriendDTO } from "./dto/IFriendDTO";

class FriendRepositorie {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createFriend(data: IFriendDTO) {
    try {
      const friend = await this.prisma.friend.create({
        data: data
      });
      console.log(`O amigo ${friend.name} foi criado com sucesso!`)
      return friend;
    } catch (e) {
      console.log(e);
    }
  }

  public async getFriends(): Promise<IFriendDTO[]> {
    try {
      const friend = await this.prisma.friend.findMany();
      return friend;
    } catch (e) {
      console.log(e);
      return []
    }
  }

}
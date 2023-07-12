import { PrismaClient, Friend } from "@prisma/client";
import { IFriendDTO } from "./dto/IFriendDTO";
import prisma from "../../../public/prisma/PrismaSingleton";

class FriendRepositorie {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  public async createFriend(data: IFriendDTO): Promise<Friend | null> {
    try {
      const friend = await this.prisma.friend.create({
        data: data
      });
      console.log(`O amigo ${friend.name} foi criado com sucesso!`)
      return friend;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async getFriends(): Promise<Friend[]> {
    try {
      const friend = await this.prisma.friend.findMany();
      return friend;
    } catch (e) {
      console.log(e);
      return []
    }
  }

  public async getFriendById(id: number): Promise<Friend | null> {
    try {
      const friend = await this.prisma.friend.findFirst({
        where: {
          id: id
        }
      });
      return friend;
    } catch (e) {
      console.log(e);
      return null
    }
  }

  public async updateFriend(data: IFriendDTO): Promise<Friend | null> {
    try {
      const friend = await this.prisma.friend.update({
        where: {
          id: data.id
        },
        data: data,
      });
      console.log(`O amigo ${data.name} foi atualizado com sucesso!`)
      return friend;
    } catch (e) {
      console.log(e);
      return null
    }
  }

  public async deleteFriend(id: number): Promise<boolean> {
    try {
      const friend = await this.prisma.friend.delete({
        where: {
          id: id
        }
      });
      console.log(`O amigo ${friend.name} foi deletado com sucesso!`)
      return true;
    } catch (e) {
      console.log(e);
      return false
    }
  }

  
}

export default FriendRepositorie;
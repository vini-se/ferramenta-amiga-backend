import { PrismaClient } from '@prisma/client';

class PrismaSingleton {
  private static instance: PrismaClient;
  private static isDisconnecting: boolean = false;

  private constructor() {
  }

  public static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
    }

    return PrismaSingleton.instance;
  }

  public static async disconnect(): Promise<void> {
    if (PrismaSingleton.instance && !PrismaSingleton.isDisconnecting) {
      PrismaSingleton.isDisconnecting = true;
      await PrismaSingleton.instance.$disconnect();
    }
  }
}

export default PrismaSingleton.getInstance();

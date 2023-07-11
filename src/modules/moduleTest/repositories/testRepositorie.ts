import { PrismaClient } from "@prisma/client";
import { ITestData } from "./dto/testDto";
const prisma = new PrismaClient();

class TestRepositorie {

  public async createTest(data: ITestData) {
    try {
      const test = await prisma.teste.create({
        data: {
          id: data.id,
          created_at: data.createdAt
        }
      });
      return test;
    }catch (e){
      console.log(e);
    }
  }

}

export default TestRepositorie;
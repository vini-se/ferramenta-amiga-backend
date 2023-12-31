import { PrismaClient } from "@prisma/client";
import { ITestData } from "./dto/testDto";

class TestRepositorie {

  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createTest() {
    try {
      const test = await this.prisma.teste.create({});
      console.log(`O teste ${test.id} foi criado com sucesso!`)
      return test;
    }catch (e){
      console.log(e);
    }
  }

  public async getTests(): Promise<ITestData[]>  {
    try {
      const test = await this.prisma.teste.findMany();
      return test;
    }catch (e){
      console.log(e);
      return []
    }
  }

  public async getTestById(id: number): Promise<ITestData | null>  {
    try {
      const test = await this.prisma.teste.findFirst({
        where: {
          id: id
        }
      });
      return test;
    }catch (e){
      console.log(e);
      return null
    }
  }

  public async updateTest(data: ITestData): Promise<ITestData | null>  {
    try {
      const test = await this.prisma.teste.update({
        where: {
          id: data.id
        },
        data: data,
      });
      console.log(`O teste ${data.id} foi atualizado com sucesso!`)
      return test;
    }catch (e){
      console.log(e);
      return null
    }
  }

  public async deleteTest(id: number): Promise<boolean>  {
    try {
      const test = await this.prisma.teste.delete({
        where: {
          id: id
        }
      });
      console.log(`O teste ${id} foi deletado com sucesso!`)
      return true;
    }catch (e){
      console.log(e);
      return false
    }
  }

}

export default TestRepositorie;
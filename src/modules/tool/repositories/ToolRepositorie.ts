import { PrismaClient, Tool } from "@prisma/client";
import prisma from "../../../public/prisma/PrismaSingleton";
import { IToolData } from "../interfaces/IToolData";

class ToolRepositorie {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  public async createTool(data: IToolData): Promise<Tool | null> {
    try {
      const tool = await this.prisma.tool.create({
        data: data
      });
      console.log(`A ferramenta ${tool.name} foi criada com sucesso!`)
      return tool;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async getTools(): Promise<Tool[]> {
    try {
      const tool = await this.prisma.tool.findMany();
      return tool;
    } catch (e) {
      console.log(e);
      return []
    }
  }

  public async getToolById(id: number): Promise<Tool | null> {
    try {
      const tool = await this.prisma.tool.findFirst({
        where: {
          id: id
        }
      });
      return tool;
    } catch (e) {
      console.log(e);
      return null
    }
  }

  public async updateTool(id: number, data: IToolData): Promise<Tool | null> {
    try {
      const tool = await this.prisma.tool.update({
        where: {
          id: id
        },
        data: data,
      });
      console.log(`A ferramenta ${data.name} foi atualizada com sucesso!`)
      return tool;
    } catch (e) {
      console.log(e);
      return null
    }
  }

  public async deleteTool(id: number): Promise<boolean> {
    try {
      const tool = await this.prisma.tool.delete({
        where: {
          id: id
        }
      });
      console.log(`A ferramenta ${tool.name} foi deletada com sucesso!`)
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default ToolRepositorie;
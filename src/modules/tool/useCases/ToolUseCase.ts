import { Tool } from "@prisma/client";
import ToolRepository from "../repositories/ToolRepositorie";
import { IToolData } from "../repositories/interfaces/IToolData";

class ToolUseCase {
  private readonly toolRepository: ToolRepository;

  constructor(){
    this.toolRepository = new ToolRepository();
  }

  async getToolById(id: number): Promise<Tool | null> {
    return this.toolRepository.getToolById(id);
  }

  async getTools(): Promise<Tool[]> {
    return this.toolRepository.getTools();
  }

  async createTool(data: IToolData): Promise<Tool | null> {
    return this.toolRepository.createTool(data);
  }

  async updateTool(id: number, data: IToolData): Promise<Tool | null> {
    return this.toolRepository.updateTool(id, data);
  }

  async deleteTool(id: number): Promise<boolean> {
    return this.toolRepository.deleteTool(id);
  }

}

export default ToolUseCase;
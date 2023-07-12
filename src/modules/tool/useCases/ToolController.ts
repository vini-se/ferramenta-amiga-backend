import { IToolData } from "../repositories/interfaces/IToolData";
import { Request, Response } from "express";
import { container } from "tsyringe";
import ToolUseCase from "./ToolUseCase";

class ToolController {

  async getToolById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const toolUseCase = container.resolve(ToolUseCase);
    const tool = await toolUseCase.getToolById(Number(id));
    return res.json({data: tool});
  }

  async getTools(req: Request, res: Response): Promise<Response> {
    const toolUseCase = container.resolve(ToolUseCase);
    const tools = await toolUseCase.getTools();
    return res.json({data: tools});
  }

  async createTool(req: Request, res: Response): Promise<Response> {
    const { name, brand, isLoanable } = req.body;

    const data: IToolData = {
      name: name,
      brand: brand,
      isLoanable: isLoanable,
    }

    const toolUseCase = container.resolve(ToolUseCase);
    const tool = await toolUseCase.createTool(data);
    return res.json({data: tool});
  }

  async updateTool(req: Request, res: Response): Promise<Response> {
    const { id, name, brand, isLoanable } = req.body;

    const data: IToolData = {
      name: name,
      brand: brand,
      isLoanable: isLoanable,
    }

    const toolUseCase = container.resolve(ToolUseCase);
    const tool = await toolUseCase.updateTool(Number(id), data);
    return res.json({data: tool});
  }

  async deleteTool(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const toolUseCase = container.resolve(ToolUseCase);
    const tool = await toolUseCase.deleteTool(Number(id));
    return res.json({data: tool});
  }

}

export default ToolController;
import { IToolData } from "../repositories/interfaces/IToolData";
import { Request, Response } from "express";
import { container } from "tsyringe";
import ToolUseCase from "./ToolUseCase";

class ToolController {

  async getToolById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const toolUseCase = container.resolve(ToolUseCase);
      const tool = await toolUseCase.getToolById(Number(id));
      return res.json({ data: tool });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getTools(req: Request, res: Response): Promise<Response> {
    try {
      const toolUseCase = container.resolve(ToolUseCase);
      const tools = await toolUseCase.getTools();
      return res.json({ data: tools });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createTool(req: Request, res: Response): Promise<Response> {
    try {
      const { name, brand, isLoanable } = req.body;
      const data: IToolData = {
        name: name,
        brand: brand,
        isLoanable: isLoanable,
      }
      const toolUseCase = container.resolve(ToolUseCase);
      const tool = await toolUseCase.createTool(data);
      return res.status(201).json({ data: tool });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateTool(req: Request, res: Response): Promise<Response> {
    try {
      const { id, name, brand, isLoanable } = req.body;
      const data: IToolData = {
        name: name,
        brand: brand,
        isLoanable: isLoanable,
      }
      const toolUseCase = container.resolve(ToolUseCase);
      const tool = await toolUseCase.updateTool(Number(id), data);
      return res.json({ data: tool });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteTool(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const toolUseCase = container.resolve(ToolUseCase);
      const tool = await toolUseCase.deleteTool(Number(id));
      return res.json({ data: tool });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default ToolController;

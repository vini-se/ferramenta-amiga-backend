import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ModuleTestUseCase } from './moduleTestUseCase';
import { ITestData } from '../repositories/dto/testDto';

class ModuleTestController {

    constructor() { }

    public async create(req: Request, res: Response): Promise<Response> {
        // const { id, createdAt } = req.body;

        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        // const data: ITestData = {
        //     id: id,
        //     createdAt: createdAt,
        // }
        const result = await moduleTestUseCase.create();
        return res.json(result);
    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const result = await moduleTestUseCase.getAll();
        return res.json(result);
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const result = await moduleTestUseCase.getById(Number(id));
        return res.json(result);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, createdAt } = req.body;

        const data: ITestData = {
            id: id,
            createdAt: createdAt ?? new Date(),
        }

        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const result = await moduleTestUseCase.update(data);
        return res.json(result);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const result = await moduleTestUseCase.delete(Number(id));
        return res.json(result);
    }

}

export { ModuleTestController }
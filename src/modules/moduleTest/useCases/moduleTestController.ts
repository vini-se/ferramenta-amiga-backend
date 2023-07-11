import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ModuleTestUseCase } from './moduleTestUseCase';
import { ITestData } from '../repositories/dto/testDto';

class ModuleTestController{

    constructor() { }

    public async handle(req: Request, res: Response): Promise<Response> {
        const { id, createdAt } = req.body;

        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const data: ITestData = {
            id: id,
            createdAt: createdAt,
        }
        const result = await moduleTestUseCase.create(data);
        return res.json(result);
    }

}

export { ModuleTestController }
import { container } from 'tsyringe';
import { ModuleTestUseCase } from './moduleTestUseCase';

class ModuleTestController{

    constructor() { }

    public async handle(): Promise<string> {
        const moduleTestUseCase = container.resolve(ModuleTestUseCase);
        const result = await moduleTestUseCase.execute();
        return result;
    }

}

export { ModuleTestController }
import { ITestData } from "../repositories/dto/testDto";
import TestRepositorie from "../repositories/testRepositorie";

class ModuleTestUseCase {
    private testRepositorie: TestRepositorie;

    constructor() {
        this.testRepositorie = new TestRepositorie();
    }

    public async create(data: ITestData) {
        const test = await this.testRepositorie.createTest(data);
        return test;
    }

}

export { ModuleTestUseCase }
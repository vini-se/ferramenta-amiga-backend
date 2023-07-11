import { ITestData } from "../repositories/dto/testDto";
import TestRepositorie from "../repositories/testRepositorie";

class ModuleTestUseCase {
    private testRepositorie: TestRepositorie;

    constructor() {
        this.testRepositorie = new TestRepositorie();
    }

    // public async create(data: ITestData) {
        // const test = await this.testRepositorie.createTest(data);
    public async create() {
        const test = await this.testRepositorie.createTest();
        return test;
    }

    public async getAll(): Promise<ITestData[]> {
        const tests = await this.testRepositorie.getTests();
        return tests;
    }

    public async getById(id: number): Promise<ITestData | null> {
        const test = await this.testRepositorie.getTestById(id);
        return test;
    }

    public async update(data: ITestData): Promise<ITestData | null> {
        const test = await this.testRepositorie.updateTest(data);
        return test;
    }

    public async delete(id: number): Promise<boolean> {
        const test = await this.testRepositorie.deleteTest(id);
        return test;
    }

}

export { ModuleTestUseCase }
import { Router } from "express";
import { ModuleTestController } from "../modules/moduleTest/useCases/moduleTestController";

const TestRoutes = Router();
const testController = new ModuleTestController().handle;

TestRoutes.get("/test", testController)

export { TestRoutes };
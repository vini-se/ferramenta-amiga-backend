import { Router } from "express";
import { ModuleTestController } from "../modules/moduleTest/useCases/moduleTestController";

const TestRoutes = Router();
const testController = new ModuleTestController();

TestRoutes.get("/test/find_one/:id", testController.getById)
TestRoutes.get("/test/find_all", testController.getAll)
TestRoutes.post("/test/create", testController.create)
TestRoutes.patch("/test/update/", testController.update)
TestRoutes.delete("/test/delete/:id", testController.delete)

export { TestRoutes };
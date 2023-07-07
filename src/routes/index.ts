import { Router } from "express";
import { TestRoutes } from "./test.routes";

const router = Router();

router.use("/", TestRoutes)

export { router };
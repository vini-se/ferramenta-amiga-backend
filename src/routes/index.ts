import { Router } from "express";
import { FriendRoutes } from "./friend.routes";
import { ToolRoutes } from "./tool.routes";
import { LoanRoutes } from "./loan.routes";

const router = Router();

router.use("/", FriendRoutes)
router.use("/", ToolRoutes)
router.use("/", LoanRoutes)

export { router };
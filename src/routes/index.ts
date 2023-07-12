import { Router } from "express";
import { FriendRoutes } from "./friend.routes";
import { ToolRoutes } from "./tool.routes";

const router = Router();

router.use("/", FriendRoutes)
router.use("/", ToolRoutes)

export { router };
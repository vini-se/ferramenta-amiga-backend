import { Router } from "express";
import { TestRoutes } from "./test.routes";
import { FriendRoutes } from "./friend.routes";

const router = Router();

router.use("/", TestRoutes)
router.use("/", FriendRoutes)

export { router };
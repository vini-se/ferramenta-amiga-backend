import { Router } from "express";
import { FriendRoutes } from "./friend.routes";

const router = Router();

router.use("/", FriendRoutes)

export { router };
import { Router } from "express";
import FriendController from "../modules/friend/useCases/FriendController";

const FriendRoutes = Router();
const friendController = new FriendController();

FriendRoutes.get("/friend/find_one/:id", friendController.getFriendById)
FriendRoutes.get("/friend/find_all", friendController.getFriends)
FriendRoutes.post("/friend/create", friendController.createFriend)
FriendRoutes.patch("/friend/update/", friendController.updateFriend)
FriendRoutes.delete("/friend/delete/:id", friendController.deleteFriend)

export { FriendRoutes };
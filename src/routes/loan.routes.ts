import { Router } from "express";
import LoanController from "../modules/loan/useCases/LoanController";

const LoanRoutes = Router();
const loanController = new LoanController();

LoanRoutes.get("/loan/find_one/v1/:id", loanController.getLoanById);
LoanRoutes.get("/loan/find_one/v2/:id", loanController.getLoanWithFriendAndToolNamesById);
LoanRoutes.get("/loan/find_all/v1", loanController.getLoans);
LoanRoutes.get("/loan/find_all/v2", loanController.getLoansWithFriendAndToolNames);
LoanRoutes.get("/loan/find_literally_all/v3", loanController.getAllLoans);
LoanRoutes.post("/loan/create", loanController.createLoan);
LoanRoutes.patch("/loan/update/", loanController.updateLoan);
LoanRoutes.delete("/loan/delete/:id", loanController.deleteLoan);

export { LoanRoutes };
import LoanUseCase from "./LoanUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ILoanData } from "../repositories/interfaces/ILoanData";

class LoanController {

  async getLoanById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const loanUseCase = container.resolve(LoanUseCase);
      const loan = await loanUseCase.getLoanById(Number(id));
      return res.json({ data: loan });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLoans(req: Request, res: Response): Promise<Response> {
    try {
      const loanUseCase = container.resolve(LoanUseCase);
      const loans = await loanUseCase.getLoans();
      return res.json({ data: loans });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllLoans(req: Request, res: Response): Promise<Response> {
    try {
      const loanUseCase = container.resolve(LoanUseCase);
      const loans = await loanUseCase.getAllLoans();
      return res.json({ data: loans });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createLoan(req: Request, res: Response): Promise<Response> {
    try {
      const { idFriend, idTool, dateToReturn } = req.body;
      const data: ILoanData = {
        idFriend: idFriend,
        idTool: idTool,
        dateToReturn: new Date(dateToReturn)
      }
      const loanUseCase = container.resolve(LoanUseCase);
      const loan = await loanUseCase.createLoan(data);
      return res.status(201).json({ data: loan });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateLoan(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { idFriend, idTool, dateToReturn, returnedAt } = req.body;
      const data: ILoanData = {
        idFriend: idFriend,
        idTool: idTool,
        dateToReturn: dateToReturn,
        returnedAt: returnedAt,
      }
      const loanUseCase = container.resolve(LoanUseCase);
      const loan = await loanUseCase.updateLoan(Number(id), data);
      return res.json({ data: loan });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteLoan(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const loanUseCase = container.resolve(LoanUseCase);
      const loan = await loanUseCase.deleteLoan(Number(id));
      return res.json({ data: loan });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLoansWithFriendAndToolNames(req: Request, res: Response): Promise<Response> {
    try {
      const loanUseCase = container.resolve(LoanUseCase);
      const loans = await loanUseCase.getLoansWithFriendAndToolNames();
      return res.json({ data: loans });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLoanWithFriendAndToolNamesById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const loanUseCase = container.resolve(LoanUseCase);
      const loan = await loanUseCase.getLoanWithFriendAndToolNamesById(Number(id));
      return res.json({ data: loan });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default LoanController;

import LoanRepositorie from "../repositories/LoanRepositorie";
import { Loan } from "@prisma/client";
import { ILoanData } from './../repositories/interfaces/ILoanData';

class LoanUseCase {

  private readonly loanRepository: LoanRepositorie;

  constructor(){
    this.loanRepository = new LoanRepositorie();
  }

  async getLoanById(id: number): Promise<Loan | null> {
    return this.loanRepository.getLoanById(id);
  }

  async getLoans(): Promise<Loan[]> {
    return this.loanRepository.getLoans();
  }

  async getAllLoans(): Promise<Loan[]> {
    return this.loanRepository.getAllLoans();
  }

  async createLoan(data: ILoanData): Promise<Loan | null> {
    return this.loanRepository.createLoan(data);
  }

  async updateLoan(id: number, data: ILoanData): Promise<Loan | null> {
    return this.loanRepository.updateLoan(id, data);
  }

  async deleteLoan(id: number): Promise<boolean> {
    return this.loanRepository.deleteLoan(id);
  }

  async getLoansWithFriendAndToolNames(): Promise<unknown>{
    return this.loanRepository.getLoansWithFriendAndToolNames;
  }

  async getLoanWithFriendAndToolNamesById(id: number): Promise<unknown>{
    return this.loanRepository.getLoanWithFriendAndToolNamesById(id);
  }

}

export default LoanUseCase;
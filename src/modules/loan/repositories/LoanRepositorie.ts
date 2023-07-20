import { Loan } from "@prisma/client";
import prisma from "../../../public/prisma/PrismaSingleton";
import { ILoanData } from "./interfaces/ILoanData";

class LoanRepositorie {

  private readonly loan: any;

  constructor() {
    this.loan = prisma.loan;
  }

  public async createLoan(data: ILoanData): Promise<Loan | null> {
    try {
      const loan = await this.loan.create({
        data: data
      });
      console.log(`O empréstimo foi efetuado com sucesso!`)
      return loan;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async getLoans(): Promise<Loan[]> {
    try {
      const loan = await this.loan.findMany({
        where: {
          returnedAt: null
        }
      });
      return loan;
    } catch (e) {
      console.log(e);
      return []
    }
  }

  public async getAllLoans(): Promise<Loan[]> {
    try {
      const loan = await this.loan.findMany();
      return loan;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  public async getLoanById(id: number): Promise<Loan | null> {
    try {
      const loan = await this.loan.findFirst({
        where: {
          id: id
        }
      });
      return loan;
    } catch (e) {
      console.log(e);
      return null
    }
  }

  public async updateLoan(id: number, data: ILoanData): Promise<Loan | null> {
    try {
      const loan = await this.loan.update({
        where: {
          id: id
        },
        data: data,
      });
      console.log(`O empréstimo foi atualizado com sucesso!`)
      return loan;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async deleteLoan(id: number): Promise<boolean> {
    try {
      await this.loan.update({
        where: {
          id: id
        },
        data: { returnedAt: new Date() }
      });
      console.log(`O empréstimo foi deletado com sucesso!`)
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public async getLoansWithFriendAndToolNames() {
    try {
      const loansWithNames = await prisma.loan.findMany({
        include: {
          friend: { select: { name: true } },
          tool: { select: { name: true } },
        },
      });
  
      return loansWithNames;
    } catch (e) {
      console.log('Error retrieving loans with names: ' + e);
    }
  }

  async getLoanWithFriendAndToolNamesById(loanId: number) {
    try {
      const loanWithNames = await prisma.loan.findUnique({
        where: { id: loanId },
        include: {
          friend: { select: { name: true } },
          tool: { select: { name: true } },
        },
      });
  
      return loanWithNames;
    } catch (e) {
      console.log('Error retrieving loan with names: ' + e);
    }
  }

}

export default LoanRepositorie;
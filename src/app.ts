import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import * as dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    dotenv.config();
    this.init();
  }

  private init(): void {
    this.express.use(express.json({ limit: '100mb' }));
    this.express.use(cors());
    this.express.use(router);

    this.express.use((err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message
        });
      }

      return response.status(500).json({
        status: "error",
        message: `Internal server error ${err.message}`
      });
    });
  }
}

export default new App().express;

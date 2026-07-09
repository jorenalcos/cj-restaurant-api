import { Request, Response } from "express";
import { getHealth } from "./health.service";

export const health = (_: Request, res: Response) => {
  res.json(getHealth());
};
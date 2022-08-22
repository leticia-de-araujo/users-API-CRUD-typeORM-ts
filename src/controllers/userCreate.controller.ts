import { Request, Response } from "express";
import userCreateService from "../services/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const user = await userCreateService({ name, email, password, age });

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userCreateController;

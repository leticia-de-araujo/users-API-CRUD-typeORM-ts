import { Request, Response } from "express";
import userDeleteService from "../services/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userDeleteService(id)
      .then(() => {
        return res.status(200).json({ message: "User deleted successfully." });
      })
      .catch((error) => {
        if (error instanceof Error) {
          return res.status(404).json({
            error: error.name,
            message: error.message,
          });
        }
      });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userDeleteController;

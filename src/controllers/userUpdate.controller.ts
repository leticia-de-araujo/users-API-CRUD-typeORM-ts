import { Request, Response } from "express";
import userUpdateService from "../services/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userData = req.body;

    await userUpdateService(id, userData)
      .then(() => {
        return res.status(200).json({ message: "User updated successfully." });
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

export default userUpdateController;

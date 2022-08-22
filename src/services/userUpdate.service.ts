import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest } from "../interfaces/user";

const userUpdateService = async (id: string, userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found.");
  }

  await userRepository
    .update(id, { ...userData, updated_at: new Date() })
    .then(() => {
      return true;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default userUpdateService;

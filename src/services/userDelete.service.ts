import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found.");
  }

  await userRepository
    .delete(id)
    .then(() => {
      return true;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default userDeleteService;

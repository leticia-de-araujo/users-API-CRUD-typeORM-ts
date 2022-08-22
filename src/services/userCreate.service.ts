import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest, IUserResponse } from "../interfaces/user";
import { v4 as uuid } from "uuid";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserRequest): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await hash(password, 10);

  const user: User = userRepository.create({
    name,
    email,
    password: hashedPassword,
    age,
    created_at: new Date(),
    updated_at: new Date(),
    id: uuid(),
  });

  await userRepository.save(user);

  const userResponse: IUserResponse = {
    name,
    email,
    age,
    created_at: user.created_at,
    updated_at: user.updated_at,
    id: user.id,
  };

  return userResponse;
};

export default userCreateService;

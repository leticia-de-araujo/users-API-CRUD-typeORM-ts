interface IUserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

interface IUserResponse {
  name?: string;
  email?: string;
  age?: number;
  created_at?: Date;
  updated_at?: Date;
  id?: string;
}

export { IUserRequest, IUserResponse };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existEmail = this.usersRepository.findByEmail(email);

    if (!existEmail) {
      const User = this.usersRepository.create({ name, email });
      return User;
    }

    throw new Error("mensagem de erro");
  }
}

export { CreateUserUseCase };

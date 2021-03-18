import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser) {
      throw new Error("user not found");
    }

    if (!currentUser.admin) {
      throw new Error("permission denied, user must be admin");
    }

    const users = this.usersRepository.list();

    return users || [];
  }
}

export { ListAllUsersUseCase };

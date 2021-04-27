import { getCustomRepository, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUser {
    email: string;
    password: string;
    username: string;
}

class UsersService {

    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create({ email, password, username } : ICreateUser) {
        const user = await this.usersRepository.create({
            email,
            password,
            username,
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService };

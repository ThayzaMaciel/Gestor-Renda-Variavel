import { UserRepository } from "@/repositories/user.repository.js";

export class UserService {
    constructor(private repo = new UserRepository()) {}

        async registerUser(name: string, email: string) {
            const usersExists = await this.repo.findByEmail(email);
            if (usersExists.length > 0) {
                throw new Error("Cliente já cadastrado!")
            }

            return this.repo.create({
                name,
                email,
                commission_percentage: 0.01,
            });
    };
};
import UserService from "./user.service";

import { generateToken } from '../utils/jwt.utils';
import NotFoundException from "../exceptions/clientException/notFound.exception";

class AuthService {
    private userService

    constructor() {
        this.userService = UserService
    }

    async signIn(data: {
        email: string
    }): Promise<string> {
        const { email } = data

        const user = await this.userService.findByEmail(email)
        if (!user) throw new NotFoundException('User Not Found!')

        const token = generateToken({ userId: user.id, email: user.email, fullname: user.fullname })

        return token
    }
}

export default new AuthService()
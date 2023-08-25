import bcrypt from 'bcrypt'
import UserService from "./user.service";

import NotFoundException from '../exceptions/clientException/notFound.exception';
import UnauthorizedException from '../exceptions/clientException/unauthorized.exception';
import { generateToken } from '../utils/jwt.utils';

class AuthService {
    private userService

    constructor() {
        this.userService = UserService
    }

    async signIn(data: {
        email: string
        password: string
    }): Promise<string> {
        const { email, password } = data

        const user = await this.userService.findByEmail(email)
        if (!user) throw new NotFoundException('User Not Found!')

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) throw new UnauthorizedException('Invalid Password!')

        const token = generateToken({ userId: user.id, email: user.email, fullname: user.fullname })

        return token
    }
}

export default new AuthService()
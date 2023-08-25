import { Request, Response, NextFunction } from "express";
import authService from "../services/auth.service";

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body
    try {
        const auth = await authService.signIn({ email, password })

        res.status(200).json({
            message: 'User Authenticated!',
            code: 200,
            data: {
                token: auth
            }
        })
    } catch (err) {
        next(err)
    }
}
import { Request, Response, NextFunction } from "express";
import authService from "../services/auth.service";

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email } = req.body
    try {
        const auth = await authService.signIn({ email })

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
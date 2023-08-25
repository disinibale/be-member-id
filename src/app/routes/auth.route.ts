import { Router } from "express";
import { login } from '../controllers/auth.controller'
import { createValidator } from '../middlewares/validators.middleware';
import { SignInDto } from "../controllers/dto/auth.dto";

const router = Router()

router.post('/login', createValidator(SignInDto), login)

export default router
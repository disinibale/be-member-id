import { Router} from "express";
import authRouter from './auth.route'
import awardRouter from './award.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/awards', awardRouter)

export default router
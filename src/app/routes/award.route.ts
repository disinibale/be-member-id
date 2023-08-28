import { Router } from "express";
import { getAwards } from '../controllers/award.controller'

const router = Router()

router.get('/', getAwards)

export default router
import { Router } from "express";
import {
    // getAwards,
    getFilteredAwards
} from '../controllers/award.controller'
import { authenticate } from "../middlewares/auth.middlware";

const router = Router()

router.get('/', authenticate, getFilteredAwards)

export default router
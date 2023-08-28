import { Request, Response, NextFunction } from "express";
import awardService from "../services/award.service";

export async function getAwards(
    req: Request,
    res: Response,
    next: NextFunction): Promise<void> {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = 10;

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const awards = await awardService.findRange(startIndex, endIndex)
        
        res.status(200).json(awards)
    } catch (err) {
        next(err)
    }
}
import { Request, Response, NextFunction } from "express";
import awardService from "../services/award.service";

export async function getFilteredAwards(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;

        let formattedPointNeeded: number | undefined = undefined
        let formattedAwardType: string[] = []

        if (req.query.pointNeeded) {
            formattedPointNeeded = parseInt(req.query.pointNeeded as string)
        }

        if (req.query.awardType) {
            const filterToArray = req.query.awardType as string
            const filteredToArray = filterToArray.split(',').map((word) => word.charAt(0).toUpperCase() + word.slice(1))

            if (!filteredToArray.includes('All')) {
                const oldValue = 'Others'
                const newValue = 'Giftcard'
                formattedAwardType = filteredToArray.map((item) => (item === oldValue ? newValue : item))
            } else {
                formattedAwardType = []
            }
        }

        const awards = await awardService.findRangeWithFilters(
            startIndex,
            pageSize,
            {
                point_needed: formattedPointNeeded,
                award_type: formattedAwardType
            }
        );

        res.status(200).json(awards);
    } catch (err) {
        console.log(err)
        next(err);
    }
}
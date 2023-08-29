import { FindOptions } from "sequelize";
import Award from "../../models/award.model";
import BaseService from "./base.service";
import { Op } from "sequelize";

class AwardService extends BaseService<Award> {
    async findRange(startIndex: number, pageSize: number) {
        return this.findAll({
            offset: startIndex,
            limit: pageSize
        })
    }

    async findRangeWithFilters(
        startIndex: number,
        pageSize: number,
        filters: {
            point_needed?: number;
            award_type?: string[]
        }
    ): Promise<Award[]> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const whereClause: { [key: string]: any } = {}
        console.log(filters.award_type, '<<<<< FILTERS AWARDS')

        if (filters.point_needed) {
            whereClause.point_needed = {
                [Op.eq]: filters.point_needed
            }
        }

        if (filters.award_type && filters.award_type.length > 0) {
            whereClause.award_type = {
                [Op.in]: filters.award_type
            }
        }

        // console.log(whereClause, '<<<< QUERY')

        const findOptions: FindOptions<Award> = {
            offset: startIndex,
            limit: pageSize,
            where: whereClause,
            order: [['id', 'ASC']]
        };

        return this.findAll(findOptions)
    }
}

export default new AwardService(Award)
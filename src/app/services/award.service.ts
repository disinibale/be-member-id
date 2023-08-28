import Award from "../../models/award.model";
import BaseService from "./base.service";

class AwardService extends BaseService<Award> {
    async findRange(startIndex: number, pageSize: number) {
        return this.findAll({
            offset: startIndex,
            limit: pageSize
        })
    }
}

export default new AwardService(Award)
import Award from "../../models/award.model";
import BaseService from "./base.service";

class AwardService extends BaseService<Award> {}

export default new AwardService(Award)
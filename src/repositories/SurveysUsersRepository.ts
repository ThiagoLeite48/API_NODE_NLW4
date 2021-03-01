import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";



@EntityRepository(SurveyUser)
class SurveyUsersRepository extends Repository<SurveyUser>{
    static findOne(arg0: { where: ({ user_id: string; } | { value: null; })[]; }) {
        throw new Error("Method not implemented.");
    }

}

export { SurveyUsersRepository };
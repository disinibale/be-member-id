import { faker } from "@faker-js/faker";

import { UserCreationAttributes } from "../../models/interfaces/user.interface";
import userService from "../services/user.service";

import logger from "../../logger";

export default async function initializeTableData(): Promise<void> {
    try {
        const isUserDataExist = await userService.findAll()

        if (isUserDataExist.length < 1) {
            for (let i = 0; i < 50; i++) {
                let userValues
                if (i === 0) {  
                    userValues = {
                        email: 'bale@mail.com',
                        fullname: 'Bale',
                    } as UserCreationAttributes
                } else {
                    userValues = {
                        email: faker.internet.email(),
                        fullname: faker.person.fullName(),
                    } as UserCreationAttributes
                }
    
                await userService.create(userValues, { logging: false })
            }
            logger.debug('Data initializing Success!')
        }

        return
    } catch (err) {
        throw new Error('Table Initialize failed!')
    }
}
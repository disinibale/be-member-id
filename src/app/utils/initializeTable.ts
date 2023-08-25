import { faker } from "@faker-js/faker";
import { hash } from "bcrypt";

import userService from "../services/user.service";

import { UserCreationAttributes } from "../../models/interfaces/user.interface";

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
                        password: await hash('password', 10)
                    } as UserCreationAttributes
                } else {
                    userValues = {
                        email: faker.internet.email(),
                        fullname: faker.person.fullName(),
                        password: await hash('password', 10)
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
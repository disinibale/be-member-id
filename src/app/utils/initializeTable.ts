import { faker } from "@faker-js/faker";

import { UserCreationAttributes } from "../../models/interfaces/user.interface";
import userService from "../services/user.service";

import logger from "../../logger";
import awardService from "../services/award.service";
import { AwardCreationAttributes } from "../../models/interfaces/award.interface";

export default async function initializeTableData(): Promise<void> {
    try {
        const isUserDataExist = await userService.findAll()
        const isAwardsDataExist = await awardService.findAll()

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

        if (isAwardsDataExist.length < 1) {
            for (let i = 0; i < 100; i++) {
                const awardTypes = ['Voucher', 'Products', 'Giftcard']
                const awardValues = {
                    award_type: awardTypes[Math.floor(Math.random() * awardTypes.length)] as 'Voucher' | 'Products' | 'Giftcard',
                    point_needed: parseInt(faker.commerce.price({ min: 50000, max: 150000 })),
                    name: faker.commerce.department(),
                    image_url: faker.image.url()
                } as AwardCreationAttributes

                await awardService.create(awardValues, { logging: false })
            }
        }

        return
    } catch (err) {
        throw new Error('Table Initialize failed!')
    }
}
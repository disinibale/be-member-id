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
                const awardTypes = ['Vouchers', 'Products', 'Giftcard']
                const pointStepValue = [
                    10000, 20000, 30000, 40000, 50000,
                    60000, 70000, 80000, 90000, 100000,
                    110000, 120000, 130000, 140000, 150000,
                    160000, 170000, 180000, 190000, 200000,
                    210000, 220000, 230000, 240000, 250000,
                    260000, 270000, 280000, 290000, 300000,
                    310000, 320000, 330000, 340000, 350000,
                    360000, 370000, 380000, 390000, 400000,
                    410000, 420000, 430000, 440000, 450000,
                    460000, 470000, 480000, 490000, 500000
                ]
                const awardValues = {
                    award_type: awardTypes[Math.floor(Math.random() * awardTypes.length)] as 'Vouchers' | 'Products' | 'Giftcards',
                    point_needed: pointStepValue[Math.floor(Math.random() * awardTypes.length)],
                    name: `${faker.commerce.department()} Vouchers`,
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
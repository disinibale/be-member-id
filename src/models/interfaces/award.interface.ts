import { Model, Optional } from "sequelize"

export interface AwardAttributes extends Model {
    id: number
    award_type: 'Vouchers' | 'Products' | 'Giftcards'
    point_needed: number
    name: string
    image_url: string

    createdAt?: Date
    updatedAt?: Date
}

export interface AwardCreationAttributes extends Optional<AwardAttributes, 'id'> {
    award_type: 'Vouchers' | 'Products' | 'Giftcards'
    point_needed: number
    name: string
    image_url: string
}
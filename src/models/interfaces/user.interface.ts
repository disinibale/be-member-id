import { Model, Optional } from "sequelize"

export interface UserAttributes extends Model {
    id: number
    fullname: string
    email: string

    createdAt?: Date
    updatedAt?: Date
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
    fullname: string
    email: string
}
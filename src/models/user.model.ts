import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, Unique, CreatedAt, UpdatedAt } from 'sequelize-typescript'

import { UserAttributes, UserCreationAttributes } from './interfaces/user.interface'

@Table({
    tableName: 'user'
})
export default class User extends Model<UserAttributes, UserCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    @Column(DataType.STRING)
    fullname!: string

    @Unique(true)
    @Column(DataType.STRING)
    email!: string
    
    @CreatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt!: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    updatedAt!: Date;

}
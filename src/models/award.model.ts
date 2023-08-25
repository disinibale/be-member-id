import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import { AwardCreationAttributes, AwardAttributes } from './interfaces/award.interface'

@Table({
    tableName: 'award'
})
export default class Award extends Model<AwardAttributes, AwardCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    @Column(DataType.STRING)
    award_type!: 'Voucher' | 'Product' | 'Giftcard'

    @Column(DataType.INTEGER)
    point_needed!: number

    @Column(DataType.STRING)
    name!: string

    @Column(DataType.STRING)
    image_url!: string

    @CreatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt?: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    updatedAt?: Date;
}
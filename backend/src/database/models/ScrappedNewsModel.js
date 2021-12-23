import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;
class ScrappedNewsModel extends Model {}
export default ScrappedNewsModel;
export const initScrappedNewsModel = async (connection) => {
    ScrappedNewsModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                unique: true,
                primaryKey: true,
            },
            from: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            headline: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            link: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "scrappednews",
            hooks: {
                beforeValidate(query) {
                    return query;
                },
            },
        }
    );
};

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
                unique: true,
                primaryKey: true,
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

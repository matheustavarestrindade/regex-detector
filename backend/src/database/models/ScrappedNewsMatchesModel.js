import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;
class ScrappedNewsMatchesModel extends Model {}
export default ScrappedNewsMatchesModel;
export const initScrappedNewsMatchesModel = async (connection) => {
    ScrappedNewsMatchesModel.init(
        {
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            match_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "scrappednewsmatches",
        }
    );
};

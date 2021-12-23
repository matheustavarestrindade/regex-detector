import Sequelize from "sequelize";

const { Model, DataTypes } = Sequelize;

class ParsesModel extends Model {}

export default ParsesModel;

export const initParsesModel = async (connection) => {
    ParsesModel.init(
        {
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            sentiment: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            sequelize: connection,
            tableName: "parsed_parses",
        }
    );
    await ParsesModel.sync();
};

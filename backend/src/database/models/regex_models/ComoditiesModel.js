import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;

class ComoditiesModel extends Model {}

export default ComoditiesModel;

export const initComoditiesModel = async (connection) => {
    ComoditiesModel.init(
        {
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize: connection,
            tableName: "comodities",
        }
    );
    await ComoditiesModel.sync();
};

export const prefillComodities = async () => {
    const comodities = [
        {
            type: "Gado",
            name: "Boi gordo",
        },
        {
            type: "Agricola",
            name: "Soja",
        },
        {
            type: "Agricola",
            name: "Café",
        },
        {
            type: "Agricola",
            name: "Laranja",
        },
        {
            type: "Agricola",
            name: "Milho",
        },
        {
            type: "Agricola",
            name: "Trigo",
        },
        {
            type: "Agricola",
            name: "Açúcar",
        },
        {
            type: "Agricola",
            name: "Algodão",
        },
        {
            type: "Minerais",
            name: "Petróleo",
        },
        {
            type: "Minerais",
            name: "Gás natural",
        },
        {
            type: "Minerais",
            name: "Etanol",
        },
        {
            type: "Ambientais",
            name: "Madeira",
        },
        {
            type: "Ambientais",
            name: "Água",
        },
    ];

    for (const comoditie of comodities) {
        await ComoditiesModel.upsert(comoditie);
    }
};

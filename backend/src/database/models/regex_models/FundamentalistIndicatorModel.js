import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;

class FundamentalistIndicatorModel extends Model {}

export default FundamentalistIndicatorModel;

export const initFundamentalistIndicatorModel = async (connection) => {
    FundamentalistIndicatorModel.init(
        {
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            description: {
                unique: true,
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "fundamentalist_indicators",
        }
    );
    await FundamentalistIndicatorModel.sync();
};

export const preffilFundamentalistModel = async () => {
    const fundamentus = [
        {
            symbol: "CDI",
            description: "Certificado de Depósito Interbancário",
        },
        {
            symbol: "CETIP",
            description: "Central de Custódia e de Liquidação Financeira de Títulos",
        },
        {
            symbol: "ETF",
            description: "Exchange Traded Funds",
        },
        {
            symbol: "FGC",
            description: "Fundo Garantidor de Crédito",
        },
        {
            symbol: "IPCA",
            description: "Índice Nacional de Preços ao Consumidor Amplo",
        },
        {
            symbol: "Selic",
            description: "Sistema Especial de Liquidação e Custódia",
        },
        {
            symbol: "Spread",
            description: "Diferença entre o preço que foi adquirido algo, para o preço que isso está sendo oferecido",
        },
        {
            symbol: "ANBIMA",
            description: "Indice de renda Fixa",
        },
        {
            symbol: "IRF-M",
            description: "sub indice ANBIMA",
        },
        {
            symbol: "IMA-B",
            description: "Sub indice ANBIMA",
        },
        {
            symbol: "IMA-C",
            description: "Sub indice ANBIMA",
        },
        {
            symbol: "IMA-S",
            description: "Sub indice ANBIMA",
        },
        {
            symbol: "IDA",
            description: "Índice de Debêntures ANBIMA",
        },
        {
            symbol: "IHFA",
            description: "Índice de Hedge Funds ANBIMA",
        },
    ];

    for (const fundamento of fundamentus) {
        await FundamentalistIndicatorModel.upsert(fundamento);
    }
};

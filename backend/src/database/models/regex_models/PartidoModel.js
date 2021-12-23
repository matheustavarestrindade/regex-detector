import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;

class PartidoModel extends Model {}

export default PartidoModel;

export const initPartidoModel = async (connection) => {
    PartidoModel.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize: connection,
            tableName: "partidos",
        }
    );
    await PartidoModel.sync();
};
export const prefillPartidos = async () => {
    const preDefinedPartidos = [
        {
            name: "Movimento Democrático Brasileiro",
            symbol: "MDB",
        },
        {
            name: "Partido dos Trabalhadores",
            symbol: "PT",
        },
        {
            name: "Partido da Social Democracia Brasileira",
            symbol: "PSDB",
        },
        {
            name: "Progressistas",
            symbol: "PP",
        },
        {
            name: "Partido Democrático Trabalhista",
            symbol: "PDT",
        },
        {
            name: "Partido Trabalhista Brasileiro",
            symbol: "PTB",
        },
        {
            name: "Democratas",
            symbol: "DEM",
        },
        {
            name: "Partido Liberal",
            symbol: "PL",
        },
        {
            name: "Partido Socialista Brasileiro",
            symbol: "PSB",
        },
        {
            name: "Partido Social Cristão",
            symbol: "PSC",
        },
        {
            name: "Partido Comunista do Brasil",
            symbol: "PCdoB",
        },
        {
            name: "Podemos",
            symbol: "PODE",
        },
        {
            name: "Partido Social Democrático",
            symbol: "PSD",
        },
        {
            name: "Partido Verde",
            symbol: "PV",
        },
        {
            name: "Partido Socialismo e Liberdade",
            symbol: "PSOL",
        },
        {
            name: "Partido da Mobilização Nacional",
            symbol: "PMN",
        },
        {
            name: "Partido Trabalhista Cristão",
            symbol: "PTC",
        },
        {
            name: "Democracia Cristã",
            symbol: "DC",
        },
        {
            name: "Partido Renovador Trabalhista Brasileiro",
            symbol: "PRTB",
        },
        {
            name: "Partido Republicano da Ordem Social",
            symbol: "PROS",
        },
        {
            name: "Partido Social Liberal",
            symbol: "PSL",
        },
        {
            name: "Partido da Mulher Brasileira",
            symbol: "PMB",
        },
        {
            name: "Partido Novo",
            symbol: "NOVO",
        },
        {
            name: "Rede Sustentabilidade",
            symbol: "REDE",
        },
        {
            name: "Partido Socialista dos Trabalhadores Unificado",
            symbol: "PSTU",
        },
        {
            name: "Partido Comunista Brasileiro",
            symbol: "PCB",
        },
        {
            name: "Partido da Causa Operária",
            symbol: "PCO",
        },
        {
            name: "Unidade Popular",
            symbol: "UP",
        },
    ];

    for (const partido of preDefinedPartidos) {
        await PartidoModel.upsert(partido);
    }
};

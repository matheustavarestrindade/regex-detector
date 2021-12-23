import Sequelize from "sequelize";
import { fixText } from "../../../regex/RegexValidator.js";

const { Model, DataTypes } = Sequelize;

class CryptoModel extends Model {}

export default CryptoModel;

export const initCryptoModel = async (connection) => {
    CryptoModel.init(
        {
            id: {
                unique: true,
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            symbol: {
                field: "symbol",
                unique: true,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize: connection,
            tableName: "cryptos",
            hooks: {
                beforeValidate: (crypto) => {
                    crypto.name = fixText(crypto.name.toLowerCase());
                    crypto.symbol = fixText(crypto.symbol.toLowerCase());
                },
            },
        }
    );
    await CryptoModel.sync();
};

export const prefillCryptoModel = async () => {
    const cryptoList = [
        {
            name: "Bitcoin",
            symbol: "BTC",
        },
        {
            name: "Ethereum",
            symbol: "ETH",
        },
        {
            name: "Tether",
            symbol: "USDT",
        },
        {
            name: "Binance Coin",
            symbol: "BNB",
        },
        {
            name: "Cardano",
            symbol: "ADA",
        },
        {
            name: "XRP",
            symbol: "XRP",
        },
        {
            name: "Dogecoin",
            symbol: "DOGE",
        },
        {
            name: "USD Coin",
            symbol: "USDC",
        },
        {
            name: "Polkadot",
            symbol: "DOT",
        },
        {
            name: "Binance USD",
            symbol: "BUSD",
        },
        {
            name: "Uniswap",
            symbol: "UNI",
        },
        {
            name: "Bitcoin Cash",
            symbol: "BCH",
        },
        {
            name: "Litecoin",
            symbol: "LTC",
        },
        {
            name: "Chainlink",
            symbol: "LINK",
        },
        {
            name: "Solana",
            symbol: "SOL",
        },
        {
            name: "Wrapped Bitcoin",
            symbol: "WBTC",
        },
        {
            name: "Polygon",
            symbol: "MATIC",
        },
        {
            name: "Ethereum Classic",
            symbol: "ETC",
        },
        {
            name: "Stellar",
            symbol: "XLM",
        },
        {
            name: "THETA",
            symbol: "THETA",
        },
        {
            name: "Internet Computer",
            symbol: "ICP",
        },
        {
            name: "Dai",
            symbol: "DAI",
        },
        {
            name: "VeChain",
            symbol: "VET",
        },
        {
            name: "Filecoin",
            symbol: "FIL",
        },
        {
            name: "TRON",
            symbol: "TRX",
        },
        {
            name: "Monero",
            symbol: "XMR",
        },
        {
            name: "Terra",
            symbol: "LUNA",
        },
        {
            name: "Aave",
            symbol: "AAVE",
        },
        {
            name: "EOS",
            symbol: "EOS",
        },
        {
            name: "Crypto.com Coin",
            symbol: "CRO",
        },
        {
            name: "PancakeSwap",
            symbol: "CAKE",
        },
        {
            name: "FTX Token",
            symbol: "FTT",
        },
        {
            name: "Amp",
            symbol: "AMP",
        },
        {
            name: "Bitcoin BEP2",
            symbol: "BTCB",
        },
        {
            name: "Axie Infinity",
            symbol: "AXS",
        },
        {
            name: "UNUS SED LEO",
            symbol: "LEO",
        },
        {
            name: "Algorand",
            symbol: "ALGO",
        },
        {
            name: "The Graph",
            symbol: "GRT",
        },
        {
            name: "Maker",
            symbol: "MKR",
        },
        {
            name: "Cosmos",
            symbol: "ATOM",
        },
        {
            name: "Bitcoin SV",
            symbol: "BSV",
        },
        {
            name: "Klaytn",
            symbol: "KLAY",
        },
        {
            name: "SHIBA INU",
            symbol: "SHIB",
        },
        {
            name: "Tezos",
            symbol: "XTZ",
        },
        {
            name: "Neo",
            symbol: "NEO",
        },
        {
            name: "IOTA",
            symbol: "MIOTA",
        },
        {
            name: "Compound",
            symbol: "COMP",
        },
        {
            name: "Avalanche",
            symbol: "AVAX",
        },
        {
            name: "TerraUSD",
            symbol: "UST",
        },
        {
            name: "BitTorrent",
            symbol: "BTT",
        },
        {
            name: "Huobi Token",
            symbol: "HT",
        },
        {
            name: "Hedera Hashgraph",
            symbol: "HBAR",
        },
        {
            name: "Decred",
            symbol: "DCR",
        },
        {
            name: "Theta Fuel",
            symbol: "TFUEL",
        },
        {
            name: "Elrond",
            symbol: "EGLD",
        },
        {
            name: "Waves",
            symbol: "WAVES",
        },
        {
            name: "Kusama",
            symbol: "KSM",
        },
        {
            name: "Dash",
            symbol: "DASH",
        },
        {
            name: "Chiliz",
            symbol: "CHZ",
        },
        {
            name: "NEM",
            symbol: "XEM",
        },
        {
            name: "Celsius",
            symbol: "CEL",
        },
        {
            name: "Stacks",
            symbol: "STX",
        },
        {
            name: "Zcash",
            symbol: "ZEC",
        },
        {
            name: "TrueUSD",
            symbol: "TUSD",
        },
        {
            name: "Decentraland",
            symbol: "MANA",
        },
        {
            name: "Quant",
            symbol: "QNT",
        },
        {
            name: "OKB",
            symbol: "OKB",
        },
        {
            name: "Enjin Coin",
            symbol: "ENJ",
        },
        {
            name: "yearn.finance",
            symbol: "YFI",
        },
        {
            name: "Holo",
            symbol: "HOT",
        },
        {
            name: "Synthetix",
            symbol: "SNX",
        },
        {
            name: "Telcoin",
            symbol: "TEL",
        },
        {
            name: "SushiSwap",
            symbol: "SUSHI",
        },
        {
            name: "Helium",
            symbol: "HNT",
        },
        {
            name: "XinFin Network",
            symbol: "XDC",
        },
        {
            name: "Flow",
            symbol: "FLOW",
        },
        {
            name: "Nexo",
            symbol: "NEXO",
        },
        {
            name: "THORChain",
            symbol: "RUNE",
        },
        {
            name: "NEAR Protocol",
            symbol: "NEAR",
        },
        {
            name: "Paxos Standard",
            symbol: "PAX",
        },
        {
            name: "Zilliqa",
            symbol: "ZIL",
        },
        {
            name: "Basic Attention Token",
            symbol: "BAT",
        },
        {
            name: "Bitcoin Gold",
            symbol: "BTG",
        },
        {
            name: "Bancor",
            symbol: "BNT",
        },
        {
            name: "KuCoin Token",
            symbol: "KCS",
        },
        {
            name: "Harmony",
            symbol: "ONE",
        },
        {
            name: "SwissBorg",
            symbol: "CHSB",
        },
        {
            name: "Celo",
            symbol: "CELO",
        },
        {
            name: "Mdex",
            symbol: "MDX",
        },
        {
            name: "Qtum",
            symbol: "QTUM",
        },
        {
            name: "DigiByte",
            symbol: "DGB",
        },
        {
            name: "Horizen",
            symbol: "ZEN",
        },
        {
            name: "Siacoin",
            symbol: "SC",
        },
        {
            name: "Ontology",
            symbol: "ONT",
        },
        {
            name: "0x",
            symbol: "ZRX",
        },
        {
            name: "Curve DAO Token",
            symbol: "CRV",
        },
        {
            name: "HUSD",
            symbol: "HUSD",
        },
        {
            name: "Ankr",
            symbol: "ANKR",
        },
        {
            name: "Ravencoin",
            symbol: "RVN",
        },
        {
            name: "Fantom",
            symbol: "FTM",
        },
        {
            name: "ICON",
            symbol: "ICX",
        },
        {
            name: "Nano",
            symbol: "NANO",
        },
        {
            name: "BakeryToken",
            symbol: "BAKE",
        },
        {
            name: "Revain",
            symbol: "REV",
        },
        {
            name: "OMG Network",
            symbol: "OMG",
        },
        {
            name: "UMA",
            symbol: "UMA",
        },
        {
            name: "The Sandbox",
            symbol: "SAND",
        },
        {
            name: "renBTC",
            symbol: "RENBTC",
        },
        {
            name: "Voyager Token",
            symbol: "VGX",
        },
        {
            name: "Neutrino USD",
            symbol: "USDN",
        },
        {
            name: "1inch",
            symbol: "1INCH",
        },
        {
            name: "IOST",
            symbol: "IOST",
        },
        {
            name: "Kava.io",
            symbol: "KAVA",
        },
        {
            name: "Reserve Rights",
            symbol: "RSR",
        },
        {
            name: "Bitcoin Diamond",
            symbol: "BCD",
        },
        {
            name: "Golem",
            symbol: "GLM",
        },
        {
            name: "Verge",
            symbol: "XVG",
        },
        {
            name: "Ren",
            symbol: "REN",
        },
        {
            name: "Lisk",
            symbol: "LSK",
        },
        {
            name: "Arweave",
            symbol: "AR",
        },
        {
            name: "WazirX",
            symbol: "WRX",
        },
        {
            name: "MaidSafeCoin",
            symbol: "MAID",
        },
        {
            name: "Storj",
            symbol: "STORJ",
        },
        {
            name: "Gemini Dollar",
            symbol: "GUSD",
        },
        {
            name: "PAX Gold",
            symbol: "PAXG",
        },
        {
            name: "Augur",
            symbol: "REP",
        },
        {
            name: "Livepeer",
            symbol: "LPT",
        },
        {
            name: "Nervos Network",
            symbol: "CKB",
        },
        {
            name: "Kyber Network Crystal Legacy",
            symbol: "KNC",
        },
        {
            name: "Fetch.ai",
            symbol: "FET",
        },
        {
            name: "Venus",
            symbol: "XVS",
        },
        {
            name: "Gnosis",
            symbol: "GNO",
        },
        {
            name: "Loopring",
            symbol: "LRC",
        },
        {
            name: "WINkLink",
            symbol: "WIN",
        },
        {
            name: "SKALE Network",
            symbol: "SKL",
        },
        {
            name: "Mina",
            symbol: "MINA",
        },
        {
            name: "Ocean Protocol",
            symbol: "OCEAN",
        },
        {
            name: "ASD",
            symbol: "BTMX",
        },
        {
            name: "GateToken",
            symbol: "GT",
        },
        {
            name: "WAX",
            symbol: "WAXP",
        },
        {
            name: "Dent",
            symbol: "DENT",
        },
        {
            name: "Wootrade",
            symbol: "WOO",
        },
        {
            name: "MediBloc",
            symbol: "MED",
        },
        {
            name: "Origin Protocol",
            symbol: "OGN",
        },
        {
            name: "VeThor Token",
            symbol: "VTHO",
        },
        {
            name: "MyNeighborAlice",
            symbol: "ALICE",
        },
        {
            name: "Status",
            symbol: "SNT",
        },
        {
            name: "Stratis",
            symbol: "STRAX",
        },
        {
            name: "Constellation",
            symbol: "DAG",
        },
        {
            name: "TomoChain",
            symbol: "TOMO",
        },
        {
            name: "Ontology Gas",
            symbol: "ONG",
        },
        {
            name: "iExec RLC",
            symbol: "RLC",
        },
        {
            name: "Alpha Finance Lab",
            symbol: "ALPHA",
        },
        {
            name: "Prometeus",
            symbol: "PROM",
        },
        {
            name: "Bitcoin Standard Hashrate Token",
            symbol: "BTCST",
        },
        {
            name: "Band Protocol",
            symbol: "BAND",
        },
        {
            name: "Unibright",
            symbol: "UBT",
        },
        {
            name: "Numeraire",
            symbol: "NMR",
        },
        {
            name: "Energy Web Token",
            symbol: "EWT",
        },
        {
            name: "Injective Protocol",
            symbol: "INJ",
        },
        {
            name: "ABBC Coin",
            symbol: "ABBC",
        },
        {
            name: "Swipe",
            symbol: "SXP",
        },
        {
            name: "Orchid",
            symbol: "OXT",
        },
        {
            name: "StormX",
            symbol: "STMX",
        },
        {
            name: "Reef",
            symbol: "REEF",
        },
        {
            name: "IoTeX",
            symbol: "IOTX",
        },
        {
            name: "Uquid Coin",
            symbol: "UQC",
        },
        {
            name: "Conflux Network",
            symbol: "CFX",
        },
        {
            name: "Civic",
            symbol: "CVC",
        },
        {
            name: "SingularityNET",
            symbol: "AGIX",
        },
        {
            name: "Ergo",
            symbol: "ERG",
        },
        {
            name: "Steem",
            symbol: "STEEM",
        },
        {
            name: "Strike",
            symbol: "STRK",
        },
        {
            name: "Aragon",
            symbol: "ANT",
        },
        {
            name: "Ultra",
            symbol: "UOS",
        },
        {
            name: "FUNToken",
            symbol: "FUN",
        },
        {
            name: "Ardor",
            symbol: "ARDR",
        },
        {
            name: "NKN",
            symbol: "NKN",
        },
        {
            name: "Serum",
            symbol: "SRM",
        },
        {
            name: "Cartesi",
            symbol: "CTSI",
        },
        {
            name: "Celer Network",
            symbol: "CELR",
        },
        {
            name: "Ampleforth",
            symbol: "AMPL",
        },
        {
            name: "Chromia",
            symbol: "CHR",
        },
        {
            name: "Orbs",
            symbol: "ORBS",
        },
        {
            name: "Polymath",
            symbol: "POLY",
        },
        {
            name: "Smooth Love Potion",
            symbol: "SLP",
        },
        {
            name: "MVL",
            symbol: "MVL",
        },
        {
            name: "RSK Infrastructure Framework",
            symbol: "RIF",
        },
        {
            name: "Hive",
            symbol: "HIVE",
        },
        {
            name: "NuCypher",
            symbol: "NU",
        },
        {
            name: "MCO",
            symbol: "MCO",
        },
        {
            name: "ZKSwap",
            symbol: "ZKS",
        },
        {
            name: "Balancer",
            symbol: "BAL",
        },
        {
            name: "ZB Token",
            symbol: "ZB",
        },
        {
            name: "Phala Network",
            symbol: "PHA",
        },
        {
            name: "Metadium",
            symbol: "META",
        },
        {
            name: "Ark",
            symbol: "ARK",
        },
        {
            name: "Enzyme",
            symbol: "MLN",
        },
        {
            name: "aelf",
            symbol: "ELF",
        },
        {
            name: "BitShares",
            symbol: "BTS",
        },
    ];

    for (const crypto of cryptoList) {
        await CryptoModel.upsert(crypto);
    }
};

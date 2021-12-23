import Sequelize from "sequelize";
import { fixText } from "../../../regex/RegexValidator.js";
const { Model, DataTypes } = Sequelize;
class EmpresasDaBolsaModel extends Model {}
export default EmpresasDaBolsaModel;

export const initEmpresasDaBolsaModel = async (connection) => {
    EmpresasDaBolsaModel.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            symbols: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "empresasdabolsas",
            hooks: {
                beforeValidate: (query) => {
                    query.name = fixText(query.name.toString().toLowerCase());
                    query.symbols = query.symbols.toString().toLowerCase();
                    return query;
                },
            },
        }
    );
    await EmpresasDaBolsaModel.sync();
};
export const prefillEmpresasDaBolsa = async () => {
    const empresas = [
        {
            name: "Americanas",
            symbols: "AMER3",
        },
        {
            name: "Armac",
            symbols: "ARML3",
        },
        {
            name: "Multilaser",
            symbols: "MLAS3",
        },
        {
            name: "CBA",
            symbols: "CBAV3",
        },
        {
            name: "3tentos",
            symbols: "TTEN3",
        },
        {
            name: "BR Partners",
            symbols: "BRBI11",
        },
        {
            name: "GetNinjas",
            symbols: "NINJ3",
        },
        {
            name: "Dotz ",
            symbols: "DOTZ3",
        },
        {
            name: "Athena Saúde",
            symbols: "ATEA3",
        },
        {
            name: "Banco Modal ",
            symbols: "MODL4,MODL11",
        },
        {
            name: "Banco Modal",
            symbols: "MODL3",
        },
        {
            name: "VITT3",
            symbols: "VittiaFertilizantes",
        },
        {
            name: "Kora Saúde",
            symbols: "KRSA3",
        },
        {
            name: "Infracommerce ",
            symbols: "IFCM3",
        },
        {
            name: "Boa Safra",
            symbols: "",
        },
        {
            name: "Caixa Seguridade",
            symbols: "CXSE3",
        },
        {
            name: "Rio Alto Energias Renováveis",
            symbols: "RIOS3",
        },
        {
            name: "Hospital Care Caledonia",
            symbols: "HCAR3",
        },
        {
            name: "Grupos GPS",
            symbols: "GGPS3",
        },
        {
            name: "Mater Dei",
            symbols: "MATD3",
        },
        {
            name: "CM Hospitalar",
            symbols: "VVEO3",
        },
        {
            name: "Allied Tecnologia",
            symbols: "ALLD3",
        },
        {
            name: "Blau Farmacêutica",
            symbols: "BLAU3",
        },
        {
            name: "Atma Participações",
            symbols: "ATMP3",
        },
        {
            name: "Assaí",
            symbols: "ASAI3",
        },
        {
            name: "Grupo JSL",
            symbols: "JSLG3",
        },
        {
            name: "CSN Mineração",
            symbols: "CMIN3",
        },
        {
            name: "Eletromídia ",
            symbols: "ELMD3",
        },
        {
            name: "Orizon",
            symbols: "ORVR3",
        },
        {
            name: "OceanPact",
            symbols: "OPCT3",
        },
        {
            name: "Westwing",
            symbols: "WEST3",
        },
        {
            name: "Cruzeiro Do Sul Educacional",
            symbols: "CSED3",
        },
        {
            name: "Bemobi",
            symbols: "BMOB3",
        },
        {
            name: "Jalles Machado",
            symbols: "JALL3",
        },
        {
            name: "Focus Energia",
            symbols: "POWE3",
        },
        {
            name: "Mosaico",
            symbols: "MOSI3",
        },
        {
            name: "Mobly",
            symbols: "MBLY3",
        },
        {
            name: "Espaçolaser ",
            symbols: "ESPA3",
        },
        {
            name: "Vamos",
            symbols: "VAMO3",
        },
        {
            name: "Intelbras SA",
            symbols: "INTB3",
        },
        {
            name: "Hedge Investiments",
            symbols: "CJCT11",
        },
        {
            name: "BM Brascam Lajes Corporativas",
            symbols: "BMLC11",
        },
        {
            name: "Real Estate Capital",
            symbols: "RECR11",
        },
        {
            name: "Urca Prime",
            symbols: "URPR11",
        },
        {
            name: "Devant Recebíveis Imobiliários",
            symbols: "DEVA11",
        },
        {
            name: "Mérito Investimentos",
            symbols: "MFAI11",
        },
        {
            name: "Neogrid ",
            symbols: "NGRD3",
        },
        {
            name: "Berkshire Hathaway Inc.",
            symbols: "BRK.B",
        },
        {
            name: "Baxter International Inc.",
            symbols: "BAX",
        },
        {
            name: "Baker Hughes Company",
            symbols: "BKR",
        },
        {
            name: "AT&T Inc.",
            symbols: "T",
        },
        {
            name: "Altria Group, Inc.",
            symbols: "MO",
        },
        {
            name: "American International Group, Inc.",
            symbols: "AIG",
        },
        {
            name: "Accenture plc",
            symbols: "ACN",
        },
        {
            name: "Abbott Laboratories",
            symbols: "ABT,ABTT34F",
        },
        {
            name: "3M Company",
            symbols: "MMM",
        },
        {
            name: "PepsiCo Inc",
            symbols: "PEP",
        },
        {
            name: "Alphabet Inc Class C",
            symbols: "GOOG",
        },
        {
            name: "Alphaville S.A.",
            symbols: "AVLL3",
        },
        {
            name: "3R Petroleum",
            symbols: "RRRP3",
        },
        {
            name: "Aeris",
            symbols: "AERI3",
        },
        {
            name: "Enjoei",
            symbols: "ENJU3",
        },
        {
            name: "Méliuz ",
            symbols: "CASH3",
        },
        {
            name: "Track & Field",
            symbols: "TFCO4",
        },
        {
            name: "Triple Play",
            symbols: "CONX3",
        },
        {
            name: "Grupo Mateus",
            symbols: "GMAT3",
        },
        {
            name: "Sequoia ",
            symbols: "SEQL3",
        },
        {
            name: "Compass",
            symbols: "PASS3",
        },
        {
            name: " Boa Vista SCPC",
            symbols: "BOAS3",
        },
        {
            name: "Melnick ",
            symbols: "MELK3",
        },
        {
            name: "Hidrovias do Brasil",
            symbols: "HBSA3",
        },
        {
            name: "Simpar",
            symbols: "SIMH3F",
        },
        {
            name: "Cury",
            symbols: "CURY3",
        },
        {
            name: "Plano & Plano",
            symbols: "PLPL3",
        },
        {
            name: "Petz",
            symbols: "PETZ3",
        },
        {
            name: "Pague Menos",
            symbols: "PGMN3",
        },
        {
            name: "Lavvi Incorporadora",
            symbols: "LAVV3",
        },
        {
            name: "Quero-Quero",
            symbols: "LJQQ3",
        },
        {
            name: "d1000",
            symbols: "DMVF3",
        },
        {
            name: "Grupo Soma",
            symbols: "SOMA3",
        },
        {
            name: "Riva 9",
            symbols: "RIVA3",
        },
        {
            name: "Ambipar",
            symbols: "AMBP3",
        },
        {
            name: "Allpark",
            symbols: "ALPK3",
        },
        {
            name: "Mitre Realty",
            symbols: "MTRE3",
        },
        {
            name: "Moura Dubeux",
            symbols: "MDNE3",
        },
        {
            name: "Bardella",
            symbols: "BDLL4F,BDLL3F",
        },
        {
            name: "UPS",
            symbols: "UPSS34F",
        },
        {
            name: "Lockheed",
            symbols: "LMTB34F",
        },
        {
            name: "Johnson",
            symbols: "JNJB34F",
        },
        {
            name: "Fedex Corp",
            symbols: "FDXB34F",
        },
        {
            name: "Exxon Mobile",
            symbols: "EXXO34F",
        },
        {
            name: "Caterpillar",
            symbols: "CATP34F",
        },
        {
            name: "Bristolmyers",
            symbols: "BMYB34F",
        },
        {
            name: "Boeing",
            symbols: "BOEI34F",
        },
        {
            name: "Arcelor",
            symbols: "ARMT34F",
        },
        {
            name: "American Express",
            symbols: "AXPB34F",
        },
        {
            name: "Santos - Brasil",
            symbols: "STBP3F",
        },
        {
            name: "Randon Part",
            symbols: "RAPT3F",
        },
        {
            name: "Cedro",
            symbols: "CEDO4F,CEDO3F",
        },
        {
            name: "Netflix",
            symbols: "NFLX34F,NFLX34",
        },
        {
            name: "Nike",
            symbols: "NIKE34F,NIKE34",
        },
        {
            name: "MC Donald's",
            symbols: "MCDC34F,MCDC34",
        },
        {
            name: "Home Depot",
            symbols: "HOME34F,HOME34",
        },
        {
            name: "Ford Motors",
            symbols: "FDMO34F,FDMO34",
        },
        {
            name: "Comcast",
            symbols: "CMCS34F",
        },
        {
            name: "Amazon",
            symbols: "AMZO34F",
        },
        {
            name: "Rodobens",
            symbols: "RDNI3F,RDNI3",
        },
        {
            name: "Saraiva Livr",
            symbols: "SLED4F,SLED3F,SLED3",
        },
        {
            name: "Rossi Resid",
            symbols: "RSID3F,RSID3",
        },
        {
            name: "Mundial",
            symbols: "MNDL3F,MNDL3",
        },
        {
            name: "Metal Leve",
            symbols: "LEVE3F,LEVE3",
        },
        {
            name: "Karsten",
            symbols: "CTKA4F,CTKA3F,CTKA4,CTKA3",
        },
        {
            name: "Iochpe-Maxion",
            symbols: "MYPK3F,MYPK3",
        },
        {
            name: "Grendene",
            symbols: "GRND3F,GRND3",
        },
        {
            name: "Locamerica",
            symbols: "LCAM3F,LCAM3",
        },
        {
            name: "C&A",
            symbols: "CEAB3",
        },
        {
            name: "Le Lis Blanc",
            symbols: "LLIS3F,LLIS3",
        },
        {
            name: "Grazziotin",
            symbols: "CGRA3F,CGRA4F,CGRA4,CGRA3",
        },
        {
            name: "Estrela",
            symbols: "ESTR4F,ESTR3F,ESTR4,ESTR3",
        },
        {
            name: "Direcional",
            symbols: "DIRR3F,DIRR3",
        },
        {
            name: "Coteminas",
            symbols: "CTNM3F,CTNM4F,CTNM4,CTNM3",
        },
        {
            name: "Anima",
            symbols: "ANIM3F",
        },
        {
            name: "Even",
            symbols: "EVEN3F,EVEN3",
        },
        {
            name: "Marisa",
            symbols: "AMAR3F,AMAR3",
        },
        {
            name: "Movida",
            symbols: "MOVI3F,MOVI3",
        },
        {
            name: "JHSF",
            symbols: "JHSF3F,JHSF3",
        },
        {
            name: "Helbor",
            symbols: "HBOR3F,HBOR3",
        },
        {
            name: "PDG Realty",
            symbols: "PDGR3F,PDGR3",
        },
        {
            name: "Arezzo",
            symbols: "ARZZ3F",
        },
        {
            name: "Ez Tec",
            symbols: "EZTC3F,EZTC3",
        },
        {
            name: "Cia Hering",
            symbols: "HGTX3F",
        },
        {
            name: "Alpargatas",
            symbols: "ALPA3F,ALPA4F",
        },
        {
            name: "Smiles",
            symbols: "SMLS3F,SMLS3",
        },
        {
            name: "Localiza",
            symbols: "RENT3F,RENT3",
        },
        {
            name: "MRV Engenharia",
            symbols: "MRVE3F,MRVE3",
        },
        {
            name: "Magazine Luiza",
            symbols: "MGLU3F,MGLU3",
        },
        {
            name: "Lojas Renner",
            symbols: "LREN3F,LREN3",
        },
        {
            name: "Cogna",
            symbols: "COGN3F,COGN3",
        },
        {
            name: "Whirlpool",
            symbols: "WHRL4",
        },
        {
            name: "Whirpool",
            symbols: "WHRL3",
        },
        {
            name: "Via Varejo",
            symbols: "VVAR3",
        },
        {
            name: "Tecnisa",
            symbols: "TCSA3",
        },
        {
            name: "Starbucks",
            symbols: "SBUB34",
        },
        {
            name: "Ser Educacional",
            symbols: "SEER3",
        },
        {
            name: "Saraiva livr",
            symbols: "SLED4",
        },
        {
            name: "Lojas Americanas",
            symbols: "LAME4F,LAME4,LAME3F,LAME3",
        },
        {
            name: "Hoteis Othon",
            symbols: "HOOT4",
        },
        {
            name: "Gafisa",
            symbols: "GFSA3,GFSA3F",
        },
        {
            name: "YDUQS",
            symbols: "YDUQ3",
        },
        {
            name: "Cyrela Realty",
            symbols: "CYRE3",
        },
        {
            name: "CVC",
            symbols: "CVCB3",
        },
        {
            name: "Privalia",
            symbols: "PRVA3",
        },
        {
            name: "Walmart",
            symbols: "WALM34F,WALM34",
        },
        {
            name: "Starbucks",
            symbols: "SBUB34F",
        },
        {
            name: "Procter Gamble",
            symbols: "PGCO34F",
        },
        {
            name: "Pepsico Inc",
            symbols: "PEPB34F,PEPB34",
        },
        {
            name: "Colgate",
            symbols: "COLG34F,COLG34",
        },
        {
            name: "Coca-Cola",
            symbols: "COCA34F,COCA34",
        },
        {
            name: "Avon",
            symbols: "AVON34F,AVON34",
        },
        {
            name: "São Martinho",
            symbols: "SMTO3F,SMTO3",
        },
        {
            name: "MDiasBranco",
            symbols: "MDIA3F,MDIA3",
        },
        {
            name: "CAMIL",
            symbols: "CAML3F,CAML3",
        },
        {
            name: "Brasilagro",
            symbols: "AGRO3F,AGRO3",
        },
        {
            name: "Biosev",
            symbols: "BSEV3F,BSEV3",
        },
        {
            name: "Minerva",
            symbols: "BEEF3F,BEEF3,BEEF11",
        },
        {
            name: "Vivara",
            symbols: "VIVA3",
        },
        {
            name: "Carrefour",
            symbols: "CRFB3F,CRFB3",
        },
        {
            name: "Pão de Açúcar",
            symbols: "PCAR3F,PCAR4F,PCAR3",
        },
        {
            name: "Natura",
            symbols: "NTCO3F,NTCO3",
        },
        {
            name: "Marfrig",
            symbols: "MRFG3F,MRFG3",
        },
        {
            name: "JBS",
            symbols: "JBSS3F,JBSS3",
        },
        {
            name: "Proctor Gamble",
            symbols: "PGCO34",
        },
        {
            name: "BRF",
            symbols: "BRFS3",
        },
        {
            name: "TradersClub",
            symbols: "TRAD3",
        },
        {
            name: "The Bank of New York Mellon Corporation",
            symbols: "BK",
        },
        {
            name: "Bank of America Corporation",
            symbols: "BAC",
        },
        {
            name: "BRB Banco",
            symbols: "BSLI4F,BSLI3F,BSLI4,BSLI3",
        },
        {
            name: "Battistella",
            symbols: "BTTL3F,BTTL3",
        },
        {
            name: "Banpara",
            symbols: "BPAR3F,BPAR3",
        },
        {
            name: "Wells Fargo",
            symbols: "WFCO34F,WFCO34",
        },
        {
            name: "Visa",
            symbols: "VISA34F,VISA34",
        },
        {
            name: "Morgan Stanley",
            symbols: "MSBR34F,MSBR34",
        },
        {
            name: "Mastercard",
            symbols: "MSCD34F,MSCD34",
        },
        {
            name: "JPMorgan",
            symbols: "JPMC34F,JPMC34",
        },
        {
            name: "Honeywell",
            symbols: "HONB34F,HONB34",
        },
        {
            name: "GE",
            symbols: "GEOO34F,GEOO34",
        },
        {
            name: "Goldman Sachs",
            symbols: "GSGI34F,GSGI34",
        },
        {
            name: "Citigroup",
            symbols: "CTGP34F,CTGP34",
        },
        {
            name: "Bank America",
            symbols: "BOAC34F,BOAC34",
        },
        {
            name: "3M",
            symbols: "MMMC34F,MMMC34",
        },
        {
            name: "Sao Carlos",
            symbols: "SCAR3F,SCAR3",
        },
        {
            name: "LPS Brasil",
            symbols: "LPSB3F,LPSB3",
        },
        {
            name: "BMG",
            symbols: "BMGB11,BMGB4",
        },
        {
            name: "Gradiente",
            symbols: "IGBR3F,IGBR3",
        },
        {
            name: "General Shopping",
            symbols: "GSHP3F,GSHP3",
        },
        {
            name: "Porto Seguro",
            symbols: "PSSA3F,PSSA3",
        },
        {
            name: "CSU CardSyst",
            symbols: "CARD3F,CARD3",
        },
        {
            name: "Brasil Brokers",
            symbols: "BBRK3F,BBRK3",
        },
        {
            name: "BR Properties",
            symbols: "BRPR3F,BRPR3",
        },
        {
            name: "Banrisul",
            symbols: "BRSR6F,BRSR5F,BRSR3F,BRSR6,BRSR5,BRSR3",
        },
        {
            name: "Banco Inter",
            symbols: "BIDI3,BIDI11,BIDI4",
        },
        {
            name: "Santander BR",
            symbols: "SANB4F,SANB3F,SANB11F,SANB4,SANB3,SANB11",
        },
        {
            name: "Multiplan",
            symbols: "MULT3F,MULT3",
        },
        {
            name: "Itaú Unibanco",
            symbols: "ITUB3F,ITUB4,ITUB3,ITUB4F",
        },
        {
            name: "Aliansce Sonae",
            symbols: "ALSO3",
        },
        {
            name: "Banco Mercantil de Investimentos",
            symbols: "BMIN3",
        },
        {
            name: "Mercantil do Brasil Financeira",
            symbols: "MERC4",
        },
        {
            name: "Log",
            symbols: "LOGG3",
        },
        {
            name: "Itaúsa",
            symbols: "ITSA4F,ITSA4,ITSA3F",
        },
        {
            name: "IRB Brasil RE",
            symbols: "IRBR3",
        },
        {
            name: "Iguatemi",
            symbols: "IGTA3",
        },
        {
            name: "Bradesco",
            symbols: "BBDC4F,BBDC4,BBDC3",
        },
        {
            name: "brMalls",
            symbols: "BRML3",
        },
        {
            name: "Alper",
            symbols: "APER3F,APER3",
        },
        {
            name: "BB Seguridade",
            symbols: "BBSE3",
        },
        {
            name: "Banco Pan",
            symbols: "BPAN4",
        },
        {
            name: "Banco do Brasil",
            symbols: "BBAS3F,BBAS3,BBAS12,BBAS11",
        },
        {
            name: "American Express",
            symbols: "AXPB34",
        },
        {
            name: "Dexxos Part",
            symbols: "DEXP4,DEXP3",
        },
        {
            name: "Celul Irani",
            symbols: "RANI3F,RANI4F",
        },
        {
            name: "Freeport",
            symbols: "FCXO34F,FCXO34",
        },
        {
            name: "Paranapanema",
            symbols: "PMAM3F,PMAM3",
        },
        {
            name: "Ferbasa",
            symbols: "FESA4F,FESA3F,FESA4,FESA3",
        },
        {
            name: "Eucatex",
            symbols: "EUCA4F,EUCA3F,EUCA4,EUCA3",
        },
        {
            name: "Suzano Papel",
            symbols: "SUZB3F,SUZB3",
        },
        {
            name: "Klabin S/A",
            symbols: "KLBN4F,KLBN3F,KLBN11F,KLBN4,KLBN3,KLBN11",
        },
        {
            name: "Vale",
            symbols: "VALE5",
        },
        {
            name: "Unipar",
            symbols: "UNIP6F,UNIP6,UNIP5F,UNIP5,UNIP3",
        },
        {
            name: "Suzano Holding",
            symbols: "NEMO6,NEMO5,NEMO3",
        },
        {
            name: "MMX Mineração",
            symbols: "MMXM3,MMXM11",
        },
        {
            name: "Gerdau",
            symbols: "GOAU4",
        },
        {
            name: "CSN",
            symbols: "CSNA3F,CSNA3",
        },
        {
            name: "Celulose Irani",
            symbols: "RANI4",
        },
        {
            name: "Braskem",
            symbols: "BRKM6,BRKM5F,BRKM5,BRKM3",
        },
        {
            name: "Bradespar",
            symbols: "BRAP4F,BRAP4,BRAP3F,BRAP3",
        },
        {
            name: "Arcelor",
            symbols: "ARMT34",
        },
        {
            name: "AgroGalaxy",
            symbols: "AGXY3",
        },
        {
            name: "Tronox",
            symbols: "CRPG6,CRPG5,CRPG3",
        },
        {
            name: "Smart Fit",
            symbols: "SMFT3",
        },
        {
            name: "Boa Safra",
            symbols: "SOJA3",
        },
        {
            name: "Zynga Inc",
            symbols: "Z2NG34",
        },
        {
            name: "Trade Desk",
            symbols: "T2TD34",
        },
        {
            name: "Teladochealt",
            symbols: "T2DH34",
        },
        {
            name: "Sun Commun",
            symbols: "S2UI34",
        },
        {
            name: "Square Inc",
            symbols: "S2QU34",
        },
        {
            name: "Snowflake",
            symbols: "S2NW34",
        },
        {
            name: "Shopify Inc",
            symbols: "S2HO34",
        },
        {
            name: "Caesars Entt",
            symbols: "C2ZR34",
        },
        {
            name: "Unity Softwr",
            symbols: "U2ST34",
        },
        {
            name: "Sea Ltd",
            symbols: "S2EA34",
        },
        {
            name: "Penn Nationl",
            symbols: "P2EN34",
        },
        {
            name: "Medical P Tr",
            symbols: "M2PW34",
        },
        {
            name: "Kingsoft Chl",
            symbols: "K2CG34",
        },
        {
            name: "Draftkings",
            symbols: "D2KN34",
        },
        {
            name: "Cyrusone Inc",
            symbols: "C2ON34",
        },
        {
            name: "Churchill Dw",
            symbols: "C2HD34",
        },
        {
            name: "Beyond Meat",
            symbols: "B2YN34",
        },
        {
            name: "Energisa MT",
            symbols: "ENMT4,ENMT3",
        },
        {
            name: "AirBnb",
            symbols: "AIRB34",
        },
        {
            name: "PagSeguro",
            symbols: "PAGS34",
        },
        {
            name: "HBR Realty",
            symbols: "HBRE3,HBRE3F",
        },
        {
            name: "TREND CHINA",
            symbols: "XINA11",
        },
        {
            name: "Automatic Data Processing Inc.",
            symbols: "ADP",
        },
        {
            name: "One Liberty Properties Inc.",
            symbols: "OLP",
        },
        {
            name: "Duluth Holdings Inc. Class B",
            symbols: "DLTH",
        },
        {
            name: "Akebia Therapeutics Inc.",
            symbols: "AKBA",
        },
        {
            name: "Endurance International Group Holdings Inc.",
            symbols: "EIGI",
        },
        {
            name: "Kbl Merger Corp. Iv",
            symbols: "KBLM",
        },
        {
            name: "Everspin Technologies Inc.",
            symbols: "MRAM",
        },
        {
            name: "Despegar.Com Corp.",
            symbols: "DESP",
        },
        {
            name: "Bellicum Pharmaceuticals Inc",
            symbols: "BLCM",
        },
        {
            name: "Culp Inc.",
            symbols: "CULP",
        },
        {
            name: "Levi Strauss & Co. Class A",
            symbols: "LEVI",
        },
        {
            name: "Huntington Ingalls Industries Inc.",
            symbols: "HII",
        },
        {
            name: "Assembly Biosciences Inc.",
            symbols: "ASMB",
        },
        {
            name: "Cabaletta Bio Inc.",
            symbols: "CABA",
        },
        {
            name: "Trimble Inc.",
            symbols: "TRMB",
        },
        {
            name: "Ribbon Communications Inc.",
            symbols: "RBBN",
        },
        {
            name: "Fidelity D & D Bancorp Inc.",
            symbols: "FDBC",
        },
        {
            name: "Partners Bancorp",
            symbols: "PTRS",
        },
        {
            name: "Hudson Ltd. Class A",
            symbols: "HUD",
        },
        {
            name: "Oshkosh Corp",
            symbols: "OSK",
        },
        {
            name: "Op Bancorp",
            symbols: "OPBK",
        },
        {
            name: "Equillium Inc.",
            symbols: "EQ",
        },
        {
            name: "Seachange International Inc.",
            symbols: "SEAC",
        },
        {
            name: "Rand Capital Corporation",
            symbols: "RAND",
        },
        {
            name: "Eastman Chemical Company",
            symbols: "EMN",
        },
        {
            name: "Repro Med Systems Inc.",
            symbols: "KRMD",
        },
        {
            name: "Gx Acquisition Corp. Class A",
            symbols: "GXGX",
        },
        {
            name: "Mohawk Industries Inc.",
            symbols: "MHK",
        },
        {
            name: "Apogee Enterprises Inc.",
            symbols: "APOG",
        },
        {
            name: "Hudson Executive Investment Corp Class A",
            symbols: "HEC",
        },
        {
            name: "Xenon Pharmaceuticals Inc.",
            symbols: "XENE",
        },
        {
            name: "Alphabet Inc. Class A",
            symbols: "GOOGL",
        },
        {
            name: "Live Nation Entertainment Inc.",
            symbols: "LYV",
        },
        {
            name: "Black Diamond Therapeutics Inc.",
            symbols: "BDTX",
        },
        {
            name: "Advanced Drainage Systems Inc.",
            symbols: "WMS",
        },
        {
            name: "Virtusa Corporation",
            symbols: "VRTU",
        },
        {
            name: "Kbr Inc.",
            symbols: "KBR",
        },
        {
            name: "Westwood Holdings Group Inc.",
            symbols: "WHG",
        },
        {
            name: "Hartford Financial Services Group Inc.",
            symbols: "HIG",
        },
        {
            name: "Neuronetics Inc.",
            symbols: "STIM",
        },
        {
            name: "Magnachip Semiconductor Corporation",
            symbols: "MX",
        },
        {
            name: "State Auto Financial Corporation",
            symbols: "STFC",
        },
        {
            name: "Vapotherm Inc.",
            symbols: "VAPO",
        },
        {
            name: "Mesa Royalty Trust",
            symbols: "MTR",
        },
        {
            name: "Citigroup Inc.",
            symbols: "C",
        },
        {
            name: "L.S. Starrett Company Class A",
            symbols: "SCX",
        },
        {
            name: "Ekso Bionics Holdings Inc.",
            symbols: "EKSO",
        },
        {
            name: "Ameriserv Financial Inc.",
            symbols: "ASRV",
        },
        {
            name: "Gladstone Capital Corporation",
            symbols: "GLAD",
        },
        {
            name: "Houghton Mifflin Harcourt Company",
            symbols: "HMHC",
        },
        {
            name: "Healthequity Inc",
            symbols: "HQY",
        },
        {
            name: "Lemonade Inc",
            symbols: "LMND",
        },
        {
            name: "Check Point Software Technologies Ltd.",
            symbols: "CHKP",
        },
        {
            name: "Victory Capital Holdings Inc. Class A",
            symbols: "VCTR",
        },
        {
            name: "Veeva Systems Inc Class A",
            symbols: "VEEV",
        },
        {
            name: "Constellation Brands Inc. Class B",
            symbols: "STZ.B",
        },
        {
            name: "Consumer Portfolio Services Inc.",
            symbols: "CPSS",
        },
        {
            name: "Natural Health Trends Corp.",
            symbols: "NHTC",
        },
        {
            name: "Charles River Laboratories International Inc.",
            symbols: "CRL",
        },
        {
            name: "Sei Investments Company",
            symbols: "SEIC",
        },
        {
            name: "Dmy Technology Group Inc Class A",
            symbols: "DMYT",
        },
        {
            name: "Altabancorp",
            symbols: "ALTA",
        },
        {
            name: "Boeing Company",
            symbols: "BA",
        },
        {
            name: "Barrett Business Services Inc.",
            symbols: "BBSI",
        },
        {
            name: "Boot Barn Holdings Inc.",
            symbols: "BOOT",
        },
        {
            name: "Markel Corporation",
            symbols: "MKL",
        },
        {
            name: "Arch Resources Inc. Class A",
            symbols: "ARCH",
        },
        {
            name: "Ever-Glory International Group Inc.",
            symbols: "EVK",
        },
        {
            name: "Iterum Therapeutics Plc",
            symbols: "ITRM",
        },
        {
            name: "Gcp Applied Technologies Inc.",
            symbols: "GCP",
        },
        {
            name: "PetroRecôncavo Geral SA",
            symbols: "RECV3",
        },
        {
            name: "Schlumberger ",
            symbols: "SLBG34F,SLBG34",
        },
        {
            name: "Halliburton",
            symbols: "HALI34F,HALI34",
        },
        {
            name: "Cophillips",
            symbols: "COPH34,COPH34",
        },
        {
            name: "Chevron",
            symbols: "CHVX34F,CHVX34",
        },
        {
            name: "PETRORIO",
            symbols: "PRIO3F,PRIO3",
        },
        {
            name: "OSX Brasil",
            symbols: "OSXB3F,OSXB3",
        },
        {
            name: "Dommo",
            symbols: "DMMO11,DMMO3F,DMMO3",
        },
        {
            name: "Pet Manguinhos",
            symbols: "RPMG3F,RPMG3",
        },
        {
            name: "Ultrapar",
            symbols: "UGPA3,UGPA3F",
        },
        {
            name: "Petrobras",
            symbols: "PETR4F,PETR4,PETR3F,PETR3",
        },
        {
            name: "Petrobras Distribuidora",
            symbols: "BRDT3",
        },
        {
            name: "Exxon Mobil",
            symbols: "EXXO34",
        },
        {
            name: "Enauta Part",
            symbols: "ENAT3",
        },
        {
            name: " Instituto Hermes Pardini SA",
            symbols: "PARD3",
        },
        {
            name: "Biomm",
            symbols: "BIOM3F,BIOM3",
        },
        {
            name: "Baumer",
            symbols: "BALM3F,BALM4F,BALM4,BALM3",
        },
        {
            name: "Pfizer",
            symbols: "PFIZ34F,PFIZ34",
        },
        {
            name: "Merck",
            symbols: "MRCK34F,MRCK34",
        },
        {
            name: "Biotoscana",
            symbols: "GBIO33F,GBIO33",
        },
        {
            name: "Dimed",
            symbols: "PNVL4F,PNVL3F,PNVL4,PNVL3",
        },
        {
            name: "Alliar",
            symbols: "AALR3F,AALR3",
        },
        {
            name: "OdontoPrev",
            symbols: "ODPV3F,ODPV3",
        },
        {
            name: "RD",
            symbols: "RADL3F,RADL3",
        },
        {
            name: "Qualicorp",
            symbols: "QUAL3F,QUAL3",
        },
        {
            name: "Ourofino S/A",
            symbols: "OFSA3",
        },
        {
            name: "Johnson",
            symbols: "JNJB34",
        },
        {
            name: "Hypera Pharma",
            symbols: "HYPE3",
        },
        {
            name: "Fleury",
            symbols: "FLRY3",
        },
        {
            name: "Bristolmyers",
            symbols: "BMYB34",
        },
        {
            name: "Abbott Laboratories",
            symbols: "ABTT34",
        },
        {
            name: "ClearSale",
            symbols: "CLSA3",
        },
        {
            name: "Livetech",
            symbols: "LVTC3",
        },
        {
            name: "G2D Investments",
            symbols: "G2DI33",
        },
        {
            name: "Adobe Systems Incorporated",
            symbols: "ADBE",
        },
        {
            name: "Comcast Corporation",
            symbols: "CMCSA",
        },
        {
            name: "Cisco Systems Inc",
            symbols: "CSCO",
        },
        {
            name: " Intel Corporation",
            symbols: "INTC",
        },
        {
            name: "Facebook Inc",
            symbols: "FB",
        },
        {
            name: "Amazon.com Inc",
            symbols: "AMZN",
        },
        {
            name: "Apple Inc",
            symbols: "AAPL",
        },
        {
            name: "Microsoft Corporation",
            symbols: "MSFT",
        },
        {
            name: "Alphabet",
            symbols: "GOGL35",
        },
        {
            name: "Locaweb",
            symbols: "LWSA3",
        },
        {
            name: "Totvs",
            symbols: "TOTS3F,TOTS3",
        },
        {
            name: "Xerox",
            symbols: "XRXB34F,XRXB34",
        },
        {
            name: "Qualcomm",
            symbols: "QCOM34F,QCOM34",
        },
        {
            name: "Oracle",
            symbols: "ORCL34F,ORCL34",
        },
        {
            name: "Microsoft",
            symbols: "MSFT34F,MSFT34",
        },
        {
            name: "IBM",
            symbols: "IBMB34F,IBMB34",
        },
        {
            name: "Intel",
            symbols: "ITLC34F,ITLC34",
        },
        {
            name: "HP Company",
            symbols: "HPQB34F,HPQB34",
        },
        {
            name: "eBay",
            symbols: "EBAY34F",
        },
        {
            name: "Cisco",
            symbols: "CSCO34F,CSCO34",
        },
        {
            name: "Att Inc",
            symbols: "ATTB34F",
        },
        {
            name: "Apple",
            symbols: "AAPL34F,AAPL34",
        },
        {
            name: "Linx",
            symbols: "LINX3F,LINX3",
        },
        {
            name: "Positivo Inf",
            symbols: "POSI3F,POSI3",
        },
        {
            name: "Ebay",
            symbols: "EBAY34",
        },
        {
            name: "Brisanet",
            symbols: "BRIT3",
        },
        {
            name: "Unifique",
            symbols: "FIQE3",
        },
        {
            name: "Desktop",
            symbols: "DESK3",
        },
        {
            name: "Verizon",
            symbols: "VERZ34F,VERZ34",
        },
        {
            name: "OI",
            symbols: "OIBR4F,OIBR4,OIBR",
        },
        {
            name: "Tim Participações",
            symbols: "TIMS3F,TIMS3",
        },
        {
            name: "Telefônica Brasil S.A",
            symbols: "VIVT4F,VIVT4,VIVT3F,VIVT3",
        },
        {
            name: "Telebras",
            symbols: "TELB4F,TELB4,TELB3F,TELB3",
        },
        {
            name: "Att Inc",
            symbols: "ATTB34",
        },
        {
            name: "Celpe",
            symbols: "CEPE6F,CEPE5F,CEPE3F,CEPE6,CEPE5,CEPE3",
        },
        {
            name: "CEEE-D",
            symbols: "CEED3F,CEED4F,CEED4,CEED3",
        },
        {
            name: "Ceee-gt",
            symbols: "EEEL4F,EEEL3F,EEEL4,EEEL3",
        },
        {
            name: "Casan",
            symbols: "CASN4F,CASN3F,CASN4,CASN3",
        },
        {
            name: "CEG",
            symbols: "CEGR3F,CEGR3",
        },
        {
            name: "CEB",
            symbols: "CEBR3F,CEBR6F,CEBR5F,CEBR6,CEBR5,CEBR3",
        },
        {
            name: "Renova",
            symbols: "RNEW11F,RNEW11F,RNEW4F,RNEW4,RNEW3",
        },
        {
            name: "Coelce",
            symbols: "COCE6F,COCE5F,COCE3F,COCE6,COCE5,COCE3",
        },
        {
            name: "Celesc",
            symbols: "CLSC4F,CLSC3F,CLSC4,CLSC3",
        },
        {
            name: "Alupar Investimento",
            symbols: "ALUP4F,ALUP3F,ALUP11F,ALUP4,ALUP3,ALUP11",
        },
        {
            name: "Sanepar",
            symbols: "SAPR11F,SAPR4F,SAPR3F,SAPR4,SAPR3,SAPR11",
        },
        {
            name: "CPFL Renovav",
            symbols: "CPRE3F,CPRE3",
        },
        {
            name: "Copel",
            symbols: "CPLE5F,CPLE6F,CPLE6,CPLE5,CPLE3F,CPLE3",
        },
        {
            name: "CPFL Energia",
            symbols: "CPFE3F,CPFE3",
        },
        {
            name: "Comgás",
            symbols: "CGAS3F,CGAS5F,CGAS5,CGAS3",
        },
        {
            name: "AES Brasil",
            symbols: "AESB3F,AESB3",
        },
        {
            name: "Neoenergia",
            symbols: "NEOE3",
        },
        {
            name: "ISA CTEEP",
            symbols: "TRPL4F,TRPL4,TRPL3F,TRPL3",
        },
        {
            name: "Engie Brasil",
            symbols: "EGIE3",
        },
        {
            name: "Taesa",
            symbols: "TAEE4,TAEE3,TAEE11",
        },
        {
            name: "Sabesp",
            symbols: "SBSP3F,SBSP3",
        },
        {
            name: "Renaova",
            symbols: "RNEW11",
        },
        {
            name: "Ger Paranapanema",
            symbols: "GEPA4,GEPA3",
        },
        {
            name: "CESP",
            symbols: "CESP6,CESP5,CESP3F,CESP3",
        },
        {
            name: "Cemig",
            symbols: "CMIG4,CMIG3F,CMIG3",
        },
        {
            name: "Afluente T",
            symbols: "AFLT3",
        },
    ];

    for (const empresa of empresas) {
        await EmpresasDaBolsaModel.upsert(empresa);
    }
};

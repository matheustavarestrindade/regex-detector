import Sequelize from "sequelize";
import { fixText } from "../../../regex/RegexValidator.js";
const { Model, DataTypes } = Sequelize;

class VIPModel extends Model {}

export default VIPModel;

export const initVIPModel = async (connection) => {
    VIPModel.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            twitter: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "vips",
            hooks: {
                beforeValidate: (user) => {
                    user.name = fixText(user.name.toLowerCase());
                    user.twitter = user.twitter.toLowerCase();
                },
            },
        }
    );
    await VIPModel.sync();
};

export const prefillVIPModel = async () => {
    const users = [
        {
            name: "Changpeng Zhao",
            twitter: "@cz_binance",
            description:
                " Changpeng Zhao is CEO of Binance, the world’s largest cryptocurrency exchange by volume, launched in 2015. He was number three on the Forbes 2018 list of The Richest People in Cryptocurrency. Prior to this, he was Head of Development at Blockchain and Chief Technology Officer of OK Coin. He also developed trading software at Bloomberg and the Tokyo Stock Exchange.",
        },
        {
            name: "Vitalik Buterin",
            twitter: "@VitalikButerin",
            description:
                " Vitalik Buterin is Founder of Ethereum, the second-largest cryptocurrency platform after Bitcoin. A researcher and developer, he also co-founded Bitcoin Magazine. Ethereum, called a “decentralized mining network and software development platform rolled into one” went live in 2015 with 65 million Ether (ETH) coins. Its market capitalization was around $16 billion in early 2020 (Bitcoin’s was around $150 billion).",
        },
        {
            name: "Jihan Wu",
            twitter: "@jihanwu",
            description:
                " Jihan Wu is Co-founder, Chairman, and CEO at Bitmain Technologies, a semiconductor company offering servers, chips, and cloud solutions for AI and blockchain. Their products include the cryptocurrency mining platform Antpool, blockchain supercomputing hardware Antminer, and the mining pool and block explorer BTC.com. Prior to this, he was Investment Manager at China Grand Prosperity Investment.",
        },
        {
            name: "Barry Silbert",
            twitter: "@BarrySilbert",
            description:
                " Barry Silbert is Founder and CEO of the pivotal blockchain company Digital Currency Group, parent company of CoinDesk, Grayscale, Genesis, Foundry, and Luno. Prior to this, he was Founder and CEO of SecondMarket (acquired by NASDAQ). He was Crain’s and Ernst & Young’s Entrepreneur of the Year and appeared on Fortune’s 40 Under 40 list.",
        },
        {
            name: "Brian Armstrong",
            twitter: "@brian_armstrong",
            description:
                " Brian Armstrong is Co-founder and CEO at the open cryptocurrency trading platform and wallet Coinbase. He also co-founded GiveCrypto, a platform for philanthropy that encourages giving cryptocurrency to underprivileged people who otherwise could not access finance or investment opportunities. Prior to this, he founded UniversityTutor.com and worked at Airbnb, IBM, and Deloitte.",
        },
        {
            name: "Charles Hoskinson",
            twitter: "@iohk_charles",
            description:
                " Charles Hoskinson is Co-founder of Input Output HK (IOHK), an industry-leading blockchain and cryptocurrency research company serving academic institutions, corporations, and government agencies. Co-founder of Invictus Innovations (Bitshares Network) and Ethereum, he was Founding Chairman of the educational committee of the Bitcoin Foundation and founded the Cryptocurrency Research Group. He also led development of the cryptocurrency Cardano in 2017.",
        },
        {
            name: "Michael Saylor",
            twitter: "@michael_saylor",
            description:
                " Michael Saylor is Founder, Chairman, and CEO at MicroStrategy, an enterprise analytics and mobility software company (the largest business intelligence company that is publicly traded), which invested $425 million in Bitcoin as a safer alternative to gold and bonds. He also created Saylor Academy, a free online education platform, and wrote “The Mobile Wave: How Mobile Intelligence Will Change Everything.”",
        },
        {
            name: "Jack Dorsey",
            twitter: "@jack",
            description:
                " Jack Dorsey is Co-founder and CEO of Twitter, and Founder and CEO of the financial services company Square. In October 2020, Square invested $50 million (25% of their assets) in Bitcoin, and he has said that Bitcoin is “probably the best” internet currency. He also plans to establish Bluesky, a non-profit platform developing blockchain social media protocols.",
        },
        {
            name: "Raoul Pal",
            twitter: "@RaoulGMI",
            description:
                " Raoul Pal is Founder and CEO of Real Vision, a “disruptive financial media brand” exploring business, finance, and economics using long-form interviews and in-depth research and analysis. He is also Founder and CEO of The Global Macro Investor, an investment strategy research firm serving major hedge, pension, sovereign wealth, and family funds.",
        },
        {
            name: "Kris Marszalek",
            twitter: "@Kris_HK",
            description:
                " Kris Marszalek is CEO at Crypto.com, a banking platform offering trades, payments, Visa cards, interest-bearing savings, and credit for 80+ crypto coins and serving 5+ million clients. Prior to this, he was CEO of Ensogo, the one-time top online retailer in Southeast Asia (previously iBuy Group). He also founded or co-founded BEECRAZY, Yiyi, and Starline Polska.",
        },
        {
            name: "Sam Bankman-Fried",
            twitter: "@SBF_Alameda",
            description:
                " Sam Bankman-Fried is CEO at the cryptocurrency derivative exchange FTX. They offer financial products such as options, leveraged tokens, derivatives, and volatility products and serve both experienced and novice traders. He is also CEO of Alameda Research, a cryptocurrency trading fund managing $70 million in assets and trading $1 billion per day in every global market and exchange.",
        },
        {
            name: "Meltem Demirors",
            twitter: "@Melt_Dem",
            description:
                " Meltem Demirors is Chief Strategy Officer at CoinShares, an industry-leading digital asset fund managing $1+ billion. She was also an Inaugural Member of the Blockchain Council at World Economic Forum. She lectures on blockchain at Oxford and is Advisor for Future Commerce at MIT Media Lab. Prior to this, she was Vice President at Digital Currency Group.",
        },
        {
            name: "Mike Novogratz",
            twitter: "@novogratz\n",
            description:
                " Michael Novogratz is the Founder, CEO and Chairman of Galaxy Digital. He was formerly a Partner and President of Fortress Investment Group LLC. Prior to Fortress, Mr. Novogratz spent 11 years at Goldman Sachs, where he was elected Partner in 1998. Mr. Novogratz served on the New York Federal Reserve’s Investment Advisory Committee on Financial Markets from 2012 – 2015. Mr. Novogratz serves as the Chairman of The Bail Project and has made criminal justice reform a focus of his family’s foundation.\n",
        },
        {
            name: "Gavin Wood",
            twitter: "@gavofyork",
            description:
                " Gavin Wood is President and Founder at Web3 Foundation, developers of the Polkadot Protocol that will allow a completely decentralized web by enabling independent blockchains to exchange information and execute transactions. Prior to this, he was Co-founder of Ethereum, inventor of its Solidity contract language, and author of the Yellow Paper, which was the first blockchain protocol to be formally specified.",
        },
        {
            name: "Adam Back",
            twitter: "@adam3us",
            description:
                " Adam Back is Co-founder and CEO of Blockstream, a blockchain and Bitcoin technology company and creators of Liquid, a sidechain-based network. A cryptographer, he is a leader in “Bitcoin-like” currencies and creator of Hashcash. He has been suggested to be the mysterious figure Satoshi Nakamoto (which he denies), and he was one of eight references in his Bitcoin white paper.",
        },
        {
            name: "Sergey Nazarov",
            twitter: "@sergeynazarov",
            description:
                " Sergey Nazarov is Co-founder of Chainlink and Co-founder and CEO of SmartContract, connecting smart contracts to external data, APIs, and bank payment networks and proving functionality to these tamper-proof contracts. Prior to this, he was Co-founder and CEO of Secure Asset Exchange, smart contracts for real-time revenue sharing, and Co-founder and CEO of CryptaMail, a decentralized, secure email service.",
        },
        {
            name: "Caitlin Long",
            twitter: "@CaitlinLong_",
            description:
                " Caitlin Long is Founder and CEO at Avanti Bank & Trust and Chairman of WyoHackathon. A long-time blockchain and Bitcoin advocate, she was in Morgan Stanley’s blockchain group and Wyoming Blockchain Task Force, and was Chairman/President of Symbiont, CustodyRisk’s 2017’s FinTech Company of the Year. In 2016, she received MarketsMedia Women in Finance Award for Excellence in Blockchain.",
        },
        {
            name: "Danny Ryan",
            twitter: "@dannyryan",
            description:
                " Danny Ryan is a researcher leading Eth2 at the Ethereum Foundation. Prior to this, he was a cryptocurrency investor and contributed to open-source Ethereum projects. He writes about Eth2 for the community and tweets about updates to this project.",
        },
        {
            name: "Dan Schulman",
            twitter: "@dan_schulman",
            description:
                " Dan Schulman is President and CEO of PayPal, which has recently allowed users to buy, hold, and sell cryptocurrencies within their PayPal wallets. Prior to this, he was in leadership roles at Verizon, AT&T, NortonLifeLock, American Express, Sprint, Priceline, and others. He was also named by Fortune as one of the top 20 Businesspersons of the Year.",
        },
        {
            name: "Cathie Wood",
            twitter: "@CathieDWood",
            description:
                " Cathie Wood is Founder, CEO, and CIO at ARK Invest, an investment advisory that only invests in disruptive innovations. With 40+ years of experience, she was CIO of Global Thematic Strategies at AllianceBernstein (managing $5+ billion) and Co-founder of hedge fund Tupelo Capital Management. She was named one of 50 people shaping global business by Bloomberg, among other recognitions.",
        },
        {
            name: "Chamath Palihapitiya",
            twitter: "@chamath",
            description:
                " is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook and is a minority stakeholder and board member of the Golden State Warriors. He was also an early investor in Bitcoin, and at one point personally held roughly 5% of the circulating supply of Bitcoin. He is an outspoken activist for decentralization and democrotization of power. ",
        },
        {
            name: "Tyler Winklevoss",
            twitter: "@tyler",
            description:
                " Tyler Winklevoss is Co-Founder and CEO of Gemini (with his twin brother Cameron), a cryptocurrency exchange and custodian with industry-leading security and instantaneous transfers, featured in The New York Times, Forbes, The Wall Street Journal, Bloomberg, Fortune, and others. He is also Principal of Winklevoss Capital. Prior to this, he was an Olympian on the US Rowing Team.",
        },
        {
            name: "Hayden Adams",
            twitter: "@haydenzadams",
            description:
                " Hayden Adams is Founder of Uniswap, a decentralized trading protocol for ERC-20 tokens on Ethereum. Uniswap automates liquidity and removes the need for intermediaries, and it eclipsed CoinBase in trading volume in 2020. Prior to this, he was an engineer at Siemens and at Vista Wearable.",
        },
        {
            name: "Joseph Lubin",
            twitter: "@ethereumJoseph",
            description:
                " Joseph Lubin is Co-founder of Ethereum and Founder of ConsenSys, a blockchain studio and consultancy creating decentralized applications, developer tools, and enterprise solutions on Ethereum. Their products include Quorum, Codefi, Infura, MetaMask, Truffle, and Diligence and manage billions of dollars in assets for millions of users. Prior to this, he was in technology and research at companies including Goldman Sachs.",
        },
        {
            name: "Robert Leshner",
            twitter: "@rleshner",
            description:
                " Robert Leshner is Founder at Compound Finance, an autonomous, open-source protocol for developers. He is also an investor at Robot Ventures, a pre-seed and seed stage fintech, blockchain, and crypto fund. Prior to this, he was Founder at Safe Shepherd, a 500 Startups company that finds and removes personal information from the internet, and Product Lead at Postmates.",
        },
        {
            name: "Jeremy Allaire",
            twitter: "@jerallaire",
            description:
                " Jeremy Allaire is Co-founder, Chairman, and CEO of Circle, a global distributed payment system using blockchain. They created USD Coin (USDC), the fastest-growing, fully regulated digital dollar stablecoin. USDC increased by 500% in 2020, to a $2.9 billion market cap. Prior to this, he led Brightcove, Macromedia, and other companies, and served on the IMF’s High-Level Advisory Group on FinTech.",
        },
        {
            name: "Cameron Winklevoss",
            twitter: "@cameron",
            description:
                " Cameron Winklevoss is Principal at Winklevoss Capital and Co-founder and President of Gemini (with his twin brother Tyler), an important cryptocurrency exchange. Prior to this, he was a US Olympic Rower. He is a cryptocurrency advocate who believes that Bitcoin will succeed as a safe haven against inflation and an alternative to gold.",
        },
        {
            name: "Jed McCaleb",
            twitter: "@JedMcCaleb",
            description:
                " Jed McCaleb is Co-founder and Chief Architect of Stellar Development Foundation, which hopes to create a more inclusive global economy by “making money more fluid and people more empowered,” backed by the open-source software nonprofit Stellar.org. He is also Advisor to Machine Intelligence Research Institute. Prior to this, he founded Ripple, Code Collective, and MetaMachine.",
        },
        {
            name: "Stani Kulechov",
            twitter: "@StaniKulechov",
            description:
                " Stani Kulechov is Founder and CEO of Aave, a lending startup using Ethereum and “a decentralized, open-source, and non-custodial liquidity protocol.” Its unique elements include fixed-rate lending pools funded by depositors, aTokens accruing real-time interest, flash loans, and credit delegation. Aave was one of PwC’s Top 50 Blockchain Startups.",
        },
        {
            name: "Andre Cronje",
            twitter: "@AndreCronjeTech",
            description:
                " Andre Cronje is DeFi Architect at Ethereum and freelance, with projects including yearn.finance, curve.finance, and ytrade.finance. He is also Chief Crypto Code Reviewer at the ICO review and cryptocurrency media company CryptoBriefing. Prior to this, he was at the blockchain smart contract company Fantom Foundation and at FUSION Foundation, among other crypto-related projects.",
        },
        {
            name: "Marc Andreessen",
            twitter: "@pmarca",
            description:
                " Marc Lowell Andreessen is an American entrepreneur, investor, and software engineer. He is the co-author of Mosaic, the first widely used web browser; co-founder of Netscape; and co-founder and general partner of Silicon Valley venture capital firm Andreessen Horowitz. His firm is one of the largest global investors in cryptocurrency start-ups. ",
        },
        {
            name: "Ryan Selkis",
            twitter: "@twobitidiot",
            description:
                " Ryan Selkis is Founder and CEO at Messari, a crypto data and market intelligence startup. Prior to this, he was Managing Director of CoinDesk during its acquisition, as it grew revenue 7x in 18 months and organized the largest industry event, Consensus 2017. Prior to this, he was Director of Growth and in the founding team at Digital Currency Group.",
        },
        {
            name: "Peter Smith",
            twitter: "@OneMorePeter",
            description:
                " Peter Smith is CEO and Co-Founder of Blockchain, the leading financial technology for digital currencies and distributed ledgers and the top Bitcoin wallet, API, and network data platform. He was a World Economic Forum Technology Pioneer in 2016 and appeared in outlets including The Wall Street Journal, The New York Times, Bloomberg, CNBC, and at numerous conferences.",
        },
        {
            name: "Gavin Andresen",
            twitter: "@gavinandresen",
            description:
                " Gavin Andresen is Founder and Chief Scientist at Bitcoin Foundation. Prior to this, he was Lead Core Bitcoin Developer at TruCoin, leading development of Bitcoin’s client software. His other projects include the website The Bitcoin Faucet and Bitcoin XT. He blogs and tweets about crypto, technology, and current events.",
        },
        {
            name: "Kain Warwick",
            twitter: "@kaiynne",
            description:
                " Kain Warwick is Founder of Synthetix, a synthetic asset platform using Ethereum and supporting fiat currencies and commodities. He is also Advisory Council Member at Blockchain Australia and Non-executive Director at blueshyft. Prior to this, he was Advisory Board Member and Investor for the app The Burger Collective, and he wrote the novel Bending Medal about artificial intelligence.",
        },
        {
            name: "Elizabeth Stark",
            twitter: "@starkness",
            description:
                " Elizabeth Stark is Co-founder and CEO at Lightning Labs, which created the open source, secure, and scalable Lightning Network to transfer money efficiently. They also offer financial services and Bitcoin software. A former instructor in privacy, peer-to-peer technology, and the future of the internet at Yale and Stanford, she is also a fellow at Coin Center and a startup mentor.",
        },
        {
            name: "Stephen Pair",
            twitter: "@spair",
            description:
                " Stephen Pair is Co-founder and CEO at Bitpay, offering Bitcoin merchant services and letting users pay in US dollars using Bitcoin. He is also Chair of the TAG Blockchain task force. Prior to this, he was Senior Software Engineer and Development Manager at IBM, and he has 20+ years of experience building financial and telecommunications software systems.",
        },
        {
            name: "Sam McIngvale",
            twitter: "@sammcingvale",
            description:
                " Sam McIngvale is Head of Product for Coinbase Custody at Coinbase, the most trusted cryptocurrency custodian and cold storage, offering insurance and externally audited financial and security controls. He is also a Board Member at M1 Finance. Prior to this, he was Head of Product for Digital Wealth at Apex Clearing Corporation and Engineering Manager at PEAK6 Investments.",
        },
        {
            name: "Bobby Ong",
            twitter: "@bobbyong",
            description:
                " Bobby Ong is Co-founder and Chief Operating Officer at CoinGecko, a data aggregator charting 7,000+ cryptocurrencies on 400+ exchanges. A researcher at Singapore University of Social Science, he has contributed to the books “Handbook of Blockchain, Digital Finance, and Inclusion” and “Handbook of Digital Currency, 1st Edition.” He has also appeared in outlets including The Washington Post and Today Online.",
        },
        {
            name: "Olaf Carlson-Wee",
            twitter: "@polychain",
            description:
                " Olaf Carlson-Wee is Founder and CEO of Polychain Capital, one of the top cryptocurrency and blockchain investment funds, with investments in 48 companies. He believes that cryptocurrency will begin “the greatest wealth transfer of our lifetimes.” Prior to this, he was Founder and Managing Member at Cryptographic Financial and Head of Risk and Product Manager at Coinbase (their first employee).",
        },
        {
            name: "Jesse Powell",
            twitter: "@jespow",
            description:
                " Jesse Powell is Co-founder and CEO at Kraken Exchange, a digital asset exchange platform supporting Bitcoin, Ethereum, Namecoin, Litecoin, Ripple, Dogecoin, and Stellar, as well as fiat currencies. He is also Founder and CEO of the gamer community and MMORPG-related projects Lewt and Internet Ventures and Holdings, as well as Founder and Board Member for Verge Center for the Arts.",
        },
        {
            name: "Vansa Chatikavanij",
            twitter: "@vansa_c",
            description:
                " Vansa Chatikavanij is Co-founder and CEO at OMG Network (formerly Omise Blockchain Lab and OmiseGO). They seek to democratize access to financial services and provide a “trustless, non-custodial, Layer-2 scaling solution for transferring value” to the Ethereum ecosystem, serving governments, enterprises, and startups. Prior to this, she was a consultant to the World Bank Group and the IFC.",
        },
        {
            name: "Rune Christensen",
            twitter: "@RuneKek",
            description:
                " Rune Christensen is Co-founder and CEO of MakerDAO, issuers of the first stablecoin for the Ethereum blockchain, Dai. MakerDAO keeps Dai stable using smart contracts that respond to the changing market. Prior to this, he Co-founded the international recruitment agency Try China. He tweets about crypto, news, MakerDAO, and Dai.",
        },
        {
            name: "Ben Goertzel",
            twitter: "@bengoertzel",
            description:
                " Ben Goertzel is CEO of Singularity.net, an open market for AIs using blockchain, aiming to democratize AI creation, access, and benefits. He is also AGI (Artificial General Intelligence) Advisor to the VanHealthing CryptoFund of Biotech Innovations and Chairman of the Artificial General Intelligence Society and Open Cog. His interests include philosophy of mind, consciousness, complex systems, theoretical physics, and metaphysics.",
        },
        {
            name: "Zac Prince",
            twitter: "@BlockFiZac",
            description:
                " Zac Prince is Founder and CEO at BlockFi, blockchain-powered wealth management software for investors in cryptocurrencies, offering interest-bearing accounts, credit, and trading. He also founded the blog Better Finance Guru about innovative investment products. Prior to this, he was Senior Vice President of Business Development and Sales at Cognical, a retail point-of-sale lending business.",
        },
        {
            name: "Dan Morehead",
            twitter: "@dan_pantera",
            description:
                " Dan Morehead is Founder and CEO of Pantera Capital, the first US investment firm with funds in cryptocurrencies and blockchain. Investing solely in blockchain technologies, they are now one of the largest institutional crypto holders. He is also Chairman of Bitstamp, the world’s largest Bitcoin exchange. Prior to this, he founded Atriax and worked at Deutsche Bank.",
        },
        {
            name: "Joyce Kim",
            twitter: "@joyce",
            description:
                " Joyce Kim is Co-founder and Executive Director of Stellar, an open payment network using blockchain to bridge global and digital currencies and assets, with the intention of helping everyone access financial services. It is built to handle both microtransactions and large payments, as well as foreign exchange and low-fee cross-border transactions. She is also Managing Partner at SparkChain Capital.",
        },
        {
            name: "Jean-Louis van der Velde",
            twitter: "@jlvdv",
            description:
                " J. L. van der Velde is CEO at Bitfinex, a digital asset trading platform that was one of the first to offer cryptocurrency trading. He is also CEO of Tether, a system for frictionless payment clearing that is being beta tested. Prior to this, he founded or was CEO of Asian technology companies including PAG Asia and Tuxia.",
        },
        {
            name: "Brandon Chez",
            twitter: "@coinmarketcap",
            description:
                " Brandon Chez is Founder and CEO of CoinMarketCap, one of the most-visited sources of cryptocurrency rankings, data, and guides. Their CMC Alexandria project brings together work by cryptocurrency’s most important experts and their in-house writers to provide in-depth information, news, and analysis. He also founded the top cryptocurrency publication CoinTelegraph.",
        },
        {
            name: "Evan Kuo",
            twitter: "@evankuo",
            description:
                " Evan Kuo is Founder and CEO of Ampleforth, creators of the AMPL, a cryptocurrency with a dynamic supply that changes according to market forces: holders’ balances increase when the price is higher, and decrease when the price is lower, thus maintaining their proportional ownership. This adds diversity to the cryptocurrency ecosystem and attempts to solve the supply inelasticity problem.",
        },
        {
            name: "Paul Tudor Jones",
            twitter: "@ptj_official",
            description:
                " Paul Tudor Jones is Founder, Chief Investment Officer, and Co-chairman of Tudor Investment Corporation, as well as a billionaire who capitalized on the 1987 stock market crash. After making waves in May 2020 by advocating for Bitcoin as a hedge against inflation similar to gold, in October he made more enthusiastic statements, saying “it’s got a long way to go.”",
        },
        {
            name: "Kathleen Breitman",
            twitter: "@breitwoman",
            description:
                " Kathleen Breitman is CEO of Dynamic Ledger Solutions and Co-founder at Tezos, a self-amending cryptographic ledger, and creator of the unreleased blockchain-based trading card game Emergents. Prior to this, she was Senior Strategy Associate at the large financial consortium R3 CEV and worked in strategy at Accenture. She was also a Robert L. Bartley Fellow at The Wall Street Journal.",
        },
        {
            name: "Nejc Kodric",
            twitter: "@nejc_kodric",
            description:
                " Nejc Kodric is Co-founder and Board Member at Bitstamp, the oldest global cryptocurrency exchange, the first virtual currency exchange licensed in the EU, and one of the highest-volume Bitcoin exchanges. He has spoken at events including Bitcoin Foundation, Techcrunch, and Deloitte Conference: Future Challenges, and he has invested in startups like the financial services provider GateHub.",
        },
        {
            name: "Soravis Srinawakoon",
            twitter: "@ssrinawakoon",
            description:
                " Soravis Srinawakoon is Co-founder and CEO of Band Protocol, a decentralized data oracle to connect real-world data and blockchain applications, and the first blockchain company to join the Open API Initiative. It was funded by Sequoia Capital, Dunamu & Partners, and other major firms. On Forbes’s 30 Under 30 list, he also founded the Thai children’s library nonprofit Better Off.",
        },
        {
            name: "Andreas Antonopoulos",
            twitter: "@aantonop",
            description:
                " Andreas Antonopoulos is a blockchain, cryptocurrency, and Bitcoin educator. The Co-host of Let’s Talk Bitcoin and presenter of the Pragma workshops, he wrote the bestselling books “Mastering Bitcoin” and “Mastering Ethereum,” and published the book series “The Internet of Money.” He has appeared in media outlets including The Financial Times, Bloomberg, CNN, CBS, NBC, and BBC.",
        },
        {
            name: "Naval Ravikant",
            twitter: "@naval",
            description:
                " Naval Ravikant is a venture capitalist and Managing Partner at the early-stage social media investment fund Hit Forge. An advocate for cryptocurrencies and blockchain, he backed the crypto index fund HOLD 10 and writes about these technologies on his blog, and Twitter. He is also Founder, CEO, and Chairman at the AI decision-making enterprise Vast.com",
        },
        {
            name: "Jinglan Wang",
            twitter: "@jinglanW",
            description:
                " Jinglan Wang is Co-founder and CEO at Optimism PBC, an Ethereum OVM that aims “to enhance and enshrine fair access to public goods on the internet through the development of open-source software.” She is also Executive Director of the Blockchain Education Network. Prior to this, she was Blockchain Product Manager at Nasdaq and Co-founder of Eximchain.",
        },
        {
            name: "Brendan Blumer",
            twitter: "@brendanblumer",
            description:
                " Brendan Blumer is Co-founder and CEO of Block.one, a blockchain, distributed ledger, and open-source software company focusing on trust, transparency, and efficiency. Prior to this, he founded companies including okay.com (now Hong Kong’s biggest online real estate agency), as well as Gamecliff and The Accounts Network, which automate valuation and trade of in-game items and MMORPG avatars.",
        },
        {
            name: "Erik Voorhees",
            twitter: "@ErikVoorhees",
            description:
                " Erik Voorhees is CEO and Founder of ShapeShift, a zero-fee, self-custody crypto platform that allows users to seamlessly convert between digital assets. Prior to this, he was Co-founder of SatoshiDICE (a Bitcoin gambling website), FeedZeBirds (for Twitter advertising using Bitcoin), and Coinapult (for sending Bitcoin via SMS), as well as Head of Marketing at BitInstant.",
        },
        {
            name: "Stan Druckenmiller",
            twitter: "@",
            description:
                " Stanley Druckenmiller is a billionaire investor and Founder, former Chairman, and former President of Duquesne Capital (managing $12 billion in assets). In November 2020, he said that he had a portion of his portfolio in Bitcoin, which prompted some to label him a “Bitcoin bull.” Prior to this, he was Lead Portfolio Manager for Quantum Fund, investing with George Soros.",
        },
        {
            name: "Brian Brooks",
            twitter: "@brianbrooksocc",
            description:
                " Brian Brooks is Acting Comptroller of the Currency at the US Office of the Comptroller of the Currency and serves on the Board of Directors of the FDIC. Prior to this, he was Former Chief Legal Officer at Coinbase, where he oversaw compliance, legal issues, and government regulations. He has 35+ years of experience in law, oversight, and fintech.",
        },
        {
            name: "Galia Benartzi",
            twitter: "@galiabenartzi",
            description:
                " Galia Benartzi is Co-founder and in Business Development at The Bprotocol Foundation, developing the Bancor protocol, which creates tradable smart tokens leveraging algorithmic pricing and the network effect. Prior to this, she was a Venture Partner at Founders Fund, Co-founder and CEO at Particle Code (acquired by Appcelerator), and VP of Business Development at Mytopia (acquired by 888).",
        },
        {
            name: "Charlie Lee",
            twitter: "@SatoshiLite",
            description:
                " Charlie Lee is Creator of Litecoin and Managing Director of the Litecoin Foundation, where he leads efforts to increase adoption of Litecoin. Complimentary to Bitcoin, Litecoin allows for much faster, near zero-fee peer-to-peer transactions. Prior to this, he was Director of Engineering at Coinbase and a software engineer at Google.",
        },
        {
            name: "Chris Dixon",
            twitter: "@cdixon",
            description:
                " Chris Dixon is General Partner at Andreessen Horowitz (a16z) and a leader of its crypto funds ($865 million). They believe in the potential of blockchain and cryptocurrencies for store of value, payments, DeFi, and new monetization methods. Prior to this, he was Founder and CEO of SiteAdvisor (acquired by McAfee) and Hunch (acquired by eBay).",
        },
        {
            name: "Anthony Pompliano",
            twitter: "@apompliano",
            description:
                " Anthony Pompliano writes the Pomp Letter, a daily newsletter on finance, business, and investment with 90,000+ subscribers. A Co-founder and Partner at the blockchain and digital assets firm Morgan Creek Digital Assets (formerly Full Tilt Capital), he has invested $100+ million in early-stage startups. Prior to this, he was Product Manager at Facebook and in growth at Snapchat.",
        },
        {
            name: "Nick Szabo",
            twitter: "@NickSzabo4",
            description:
                " Nick Szabo is a computer scientist and legal expert who developed the concept of “smart contracts,” bringing contract law and reliability to digital transactions. He also designed the digital currency bit gold, which was never adopted but is a direct precursor to Bitcoin. He has been rumored to be Satoshi Nakamoto, creator of Bitcoin—which he denies.",
        },
        {
            name: "Michael Arrington",
            twitter: "@arrington",
            description:
                " Michael Arrington is Founder and Editor of TechCrunch (acquired by AOL), Founder of CrunchBase, and Co-founder of CrunchFund. He is a partner at Arrington XRP Capital, a $100 million cryptocurrency startup fund denominated in XRP. He has also invested in Airbnb, Uber, Pinterest, and others. Time Magazine, Wired, and Forbes have recognized him as a highly influential figure.",
        },
        {
            name: "Jameson Lopp",
            twitter: "@lopp",
            description:
                " Jameson Lopp is Co-founder and Chief Technology Officer at Casa, a secure Bitcoin storage solution, and Editor of The Bitcoin Times. He is also an advisor to INXL Ltd., a regulated crypto investment platform and advisory for institutional and retail investors. He is a technologist who “build[s] tools that empower individuals,” such as Statoshi.info, Bitcoin.page, and lightning.how.",
        },
        {
            name: "Vinny Lingham",
            twitter: "@VinnyLingham",
            description:
                " Vinny Lingham is Co-founder and CEO of Civic, a digital wallet and identity verification startup; General Partner of Multicoin Capital, a crypto, blockchain, and token investment fund; and former Board Member at Bitcoin Foundation. A Shark on Shark Tank South Africa, he also co-founded the Cape Town technology seed fund Newtown Partners.",
        },
        {
            name: "Charlie Shrem",
            twitter: "@CharlieShrem",
            description:
                " Charlie Shrem is Founder of Bitcoin Foundation and BitInstant, an early Bitcoin startup. He hosts the podcast Untold Stories about the most influential figures in cryptocurrency, and is Founder of the crypto news and analysis site Crypto.iq. Prior to this, he was at the Toronto innovation hub Decentral, the multi-coin wallet Jaxx, and crypto exchange Changelly.",
        },
        {
            name: "Tim Draper",
            twitter: "@timdraper",
            description:
                " Tim Draper is Founder of Draper Associates, an early-stage Silicon Valley venture fund, and Draper University, a not-for-profit entrepreneurship school associated with Arizona State University. He is a Bitcoin and crypto advocate who received attention after buying 30,000 Bitcoins seized from the Silk Road website. His other investments include Coinbase, Tesla, Twitter, Robinhood, Skype, Baidu, and SpaceX.",
        },
        {
            name: "Laura Shin",
            twitter: "@laurashin",
            description:
                " Laura Shin is Host of the podcasts Unchained and Unconfirmed, and her upcoming book will be published by PublicAffairs (Hachette). A crypto and blockchain journalist, she won the Blockchain Award for Most Insightful Journalist in 2016 and speaks at conferences. Former Senior Editor at Forbes, she wrote for CBS, LearnVest, The New York Times, The Wall Street Journal, and others.",
        },
        {
            name: "Dan Held",
            twitter: "@danheld",
            description:
                " Dan Held is currently leading Growth at Kraken. His former company Interchange, a portfolio reconciliation tool for crypto institutional traders, was acquired by Kraken in 7/2019. Prior to that, he was at Uber on Rider Growth/Global Data. Before Uber, Dan built some of the most popular early crypto products including ChangeTip (acquired by AirBnB), and ZeroBlock (acquired by Blockchain.com in the second ever all Bitcoin acquisition). He was part of the original 2013 crypto meetup group in SF which was comprised with the founders of Coinbase, Ripple, Kraken, and others.",
        },
        {
            name: "Ari Paul",
            twitter: "@AriDavidPaul",
            description:
                " Ari Paul is Co-founder and Chief Information Officer of BlockTower Capital, an investment firm with a large crypto portfolio and investments including Hedera Hashgraph (decentralized ledger), Origin Protocol (decentralized marketplace), and The Block (crypto media). He writes the blog The Cryptocurrency Investor. Listed in CIO Magazine’s 40 Under 40, he was previously Portfolio Manager at the University of Chicago.",
        },
        {
            name: "Riccardo Spagni",
            twitter: "@fluffypony",
            description:
                " Riccardo Spagni is Project Lead at Monero, a secure, private digital currency. He is also Chief Technology Officer at Tari Labs, creators of a new decentralized, open-source protocol. Prior to this, he was founder of the multi-currency payment platform Globee. Also known as “Fluffypony,” he is a blockchain and crypto expert who speaks at international events.",
        },
        {
            name: "Sally Eaves",
            twitter: "@sallyeaves",
            description:
                " Dr. Sally Eaves is an expert on emerging technologies including blockchain, crypto, and AI who consults businesses on disruptive technologies, innovation, and social good. She is Senior Policy Advisor to the Global Foundation for Cyber Studies and Research, Member of Forbes Technology Council, Strategic Advisor in AI for Effect.AI, a top online influencer, and was awarded by the UN.",
        },
        {
            name: "Ran NeuNer",
            twitter: "@cryptomanran",
            description:
                " Ran Neuner is Founder of Crypto Banter, a streaming call-in channel that is the first 24/7 crypto media outlet. The Host and Executive Producer of CNBC’s Crypto Trader, he is also the Co-founder and CEO of Onchain Capital, a blockchain and crypto investment advisory. Richtopia named him one of blockchain’s 10 most influential people.",
        },
        {
            name: "Fred Ehrsam",
            twitter: "@fehrsam",
            description:
                " Fred Ehrsam is Co-founder of the early-stage crypto and blockchain investment fund Paradigm, whose investors include Sequoia Capital and Yale University. Co-founder and Board Member of the crypto exchange platform Coinbase, he appeared on 30 Under 30 lists in both Time and Forbes. Prior to this, he was a trader at Goldman Sachs.",
        },
        {
            name: "Emin Gün Sirer",
            twitter: "@el33th4xor",
            description:
                " Emin Gün Sirer is Founder and CEO at Ava Labs, developers of the decentralized, scalable Avalanche ecosystem and AVAX. He is also Associate Professor at Cornell University and Co-director of IC3, the Initiative for CryptoCurrencies and Contracts. His contributions to crypto include the Karma system, Bitcoin-NG, Bitcoin Covenants, and co-writing the paper “Majority is not Enough, Bitcoin Mining is Vulnerable.”",
        },
        {
            name: "Bobby Lee",
            twitter: "@bobbyclee",
            description:
                " Bobby Lee is Founder and CEO of the crypto wallet Ballet. Prior to this, he was Co-founder and CEO of BTCChina (now BTCC, acquired by a firm in Hong Kong), China’s first Bitcoin exchange and one of the world’s largest. He is now a Board Member of the Bitcoin Foundation.",
        },
        {
            name: "Preethi Kasireddy",
            twitter: "@iam_preethi",
            description:
                " Preethi Kasireddy is a writer and autodidact who offers a free email course on cryptocurrency, leveraging her prior experience as a software engineer at Coinbase, a blockchain and smart contract engineer, a partner at Andreessen Horowitz, and as Technology, Media, and Telecom (TMT) Investment Banking Analyst at Goldman Sachs. She is also Founder and CEO of the social network TruStory.",
        },
        {
            name: "Pieter Wuille",
            twitter: "@pwuille",
            description:
                " Pieter Wuille is an engineer at Chaincode Labs, a center for Bitcoin research and development. Prior to this, he was Co-founder and Core Tech Engineer at Blockstream, “the global leader in Bitcoin and blockchain technology.” His projects have included the scaling solution Segregated Witness, a multisignature scheme allowing more private transactions, and the Miniscript smart contract language.",
        },
        {
            name: "Linda Xie",
            twitter: "@ljxie",
            description:
                " Linda Xie is Co-founder of the cryptoasset investment management company Scalar Capital. Prior to this, she was Product Manager at Coinbase, focusing on legal and regulatory issues. She is also an advisor to 0x, a decentralized exchange using Ethereum, and appeared on the Forbes 30 under 30 list. She began her career as a Portfolio Risk Analyst at AIG.",
        },
        {
            name: "Yuzo Kano",
            twitter: "@yuzokano",
            description:
                " Yuzo Kano is Co-founder of bitFlyer Group, Japan’s largest cryptocurrency exchange with the world’s largest Bitcoin trading volume, and Chairman of the Japan Blockchain Association. He is also CEO of bitFlyer USA and bitFlyer Blockchain, as well as Chairman of bitFlyer Europe. Prior to this, he was at Goldman Sachs and PNB Paribas.",
        },
        {
            name: "Arianna Simpson",
            twitter: "@AriannaSimpson",
            description:
                " Arianna Simpson is a Deal Partner at Andreessen Horowitz and Managing Director at Autonomous Partners (ASP), a crypto hedge and venture capital fund focused on infrastructure, monetary use cases, security, privacy, and scalability. She is also on the board of Blockstack PBC, Arwen, and Stork Club. Prior to this, she was at BitGo and Facebook.",
        },
        {
            name: "Amber Baldet",
            twitter: "@AmberBaldet",
            description:
                " Amber Baldet is Co-founder and CEO of Clovyr. A leader in the financial industry’s turn towards blockchain, she was Executive Director for Blockchain Center of Excellence at J.P. Morgan and is on the Blockchain Council of the World Economic Forum. Coindesk called her one of Blockchain’s 10 Most Influential people and she was on the Forbes 40 under 40 list.",
        },
        {
            name: "Muneeb Ali",
            twitter: "@muneeb",
            description:
                " Muneeb Ali is Co-founder of Blockstack, an open-source network to build Bitcoin apps and smart contracts, with 400+ apps built using their Stacks blockchain. He has a PhD in Computer Science from Princeton University, and his thesis was the basis for the Blockstack decentralized network. His work also led to the first SEC-qualified cryptoasset offering.",
        },
        {
            name: "Dominik Schiener",
            twitter: "@domschiener",
            description:
                " Dominik Schiener is Co-Founder, Stifter, and Chairman at IOTA Foundation, a nonprofit blockchain research organization and creators of the Tangle decentralized ledger. He is also involved in projects on blockchain, peer-to-peer, and collective intelligence, including PublicVotes, a voting platform based on Ethereum, and Identity on Bitcoin. He is also Investor and Co-chairman at the privacy and search company Xayn.",
        },
        {
            name: "Catherine Coley",
            twitter: "@cryptocoley",
            description:
                " Catherine Coley is CEO at Binance.US, the leading crypto exchange’s American arm. She helped Binance.US achieve regulatory compliance and list 40+ cryptocurrencies. Prior to this, she was Head of XRP Institutional Liquidity at Ripple, Foreign Exchange Advisor (VP) at Silicon Valley Bank, and a trader at Morgan Stanley. She is on the Forbes 30 Under 30 list for Finance.",
        },
        {
            name: "Kathryn Haun",
            twitter: "@katie_haun",
            description:
                " Kathryn Haun is a General Partner at the venture capital firm Andreessen Horowitz (a16z) and is on the boards of HackerOne and Coinbase (Audit and Risk Committee). She also lectures in law and business at Stanford. Prior to this, she was a Federal Prosecutor at the U.S. Department of Justice and was instrumental in creating the cryptocurrency task force.",
        },
        {
            name: "Jake Brukhman",
            twitter: "@jbrukh",
            description:
                " Jake Brukhman is Founder at CoinFund, one of the first blockchain investment funds in the US, and at First Edition, a digital gallery for art using nonfungible Crypto Painting tokens. As a technologist, his interests including blockchain, cryptoassets, digital crowdfunding, and decentralization. Prior to this, he was at Triton Research, Amazon, and Highbridge Capital Management.",
        },
        {
            name: "Mike Belshe",
            twitter: "@mikebelshe",
            description:
                " Mike Belshe is Co-founder and CEO at BitGo, offering institutional support for cryptoasset security, finance, trading, and custody. He also created Bitcoin’s first multi-signature web wallet. Prior to this, he founded Lookout Software (acquired by Microsoft) and was among the first 10 Google Chrome engineers. He also helped invent the SPDY protocol that eventually evolved into HTTP/2.0.",
        },
        {
            name: "Matthew Roszak",
            twitter: "@matthewroszak",
            description:
                " Matthew Roszak is Co-founder of Bloq, blockchain network infrastructure, Titan Mining, and Metronome Token. He is also Founding Partner at Tally Capital, a digital assets and blockchain investment firm with investments including Blockstream, Binance, and Orchid. He is also Chairman at the blockchain trade association Chamber of Digital Commerce and serves on the board of the blockchain not-for-profit organization BitGive.",
        },
        {
            name: "Brad Garlinghouse",
            twitter: "@bgarlinghouse",
            description:
                " Brad Garlinghouse is CEO at Ripple, a global payment network of 300+ customers in 40+ countries using XRP, and currently the only enterprise blockchain company with commercial products. Ripple aims to allow “value [to move] as seamlessly as information flows today—an Internet of Value.” Prior to this, he was in senior roles at Yahoo!, AOL, and other companies.",
        },
        {
            name: "Justin Sun",
            twitter: "@",
            description:
                " Justin Sun founded TRON Foundation, “building the infrastructure for a truly decentralized Internet” using the TRON Protocol, one of the world’s largest blockchain-based OS, including Ethereum smart contract integration. He is also CEO of BitTorrent and founded Callme (Peiwo), China’s largest streaming phone app. Jack Ma’s protégé, he was on the Forbes 30 Under 30 list for Asia and China.",
        },
        {
            name: "Roger Ver",
            twitter: "@rogerkver",
            description:
                " Roger Ver is CEO of Bitcoin.com and Partner at Bitangels. Owner of the first mainstream company to accept Bitcoin as payment, he was a leader in Bitcoin merchant adoption. He then funded the seed round for the first wave of major Bitcoin and blockchain businesses, including Bitcoin.com, Blockchain.com, Ripple, Kraken, BitPay, Z.cash, and others. He now advocates for Bitcoin Cash.",
        },
        {
            name: "Bart Stephens",
            twitter: "@pbartstephens",
            description:
                " Bart Stephens is Co-founder and Managing Partner at Blockchain Capital, an early blockchain investment fund (90+ companies and cryptoassets). Prior to this, he was Founder and Managing Partner at the hedge fund Stephens Investment Management (SIM), which created the nanocap investment strategy. He was also Co-founder and Head of Corporate and Business Development for Oncology.com (acquired by Pfizer).",
        },
        {
            name: "Josh Fraser",
            twitter: "@joshfraser",
            description:
                " Josh Fraser is Founder of Origin Protocol, peer-to-peer network builders and creators of OUSD, the first interest-bearing stablecoin. He is an angel investor and an entrepreneur and Co-founder of companies including PriceSlash, Din (previously Forage), Torbit, and EventVue. He also writes about crypto at Medium.",
        },
        {
            name: "Eric Larchevêque",
            twitter: "@ericlarch",
            description:
                " Eric Larchevêque was CEO and is now Board Member of Ledger, the top company in crypto-asset security. He also founded the Bitcoin House in 2014, which was the first digital currency exchange in Europe, with a physical store in Paris. An investor and entrepreneur, he founded Montorgueil (acquired by Rentabiliweb) and Prixing (acquired by HighCo).",
        },
        {
            name: "Valery Vavilov",
            twitter: "@valeryvavilov",
            description:
                " Valery Vavilov is Co-founder and CEO at Bitfury Group, industry leader in full-service blockchain and a top ecosystem infrastructure provider, aiming to “make the world more transparent and trusted by innovating at every level of technology – hardware, security, and software – to put trust back into the equation.” They are one of the top companies on the Forbes Blockchain50 list.",
        },
    ];

    for (const user of users) {
        await VIPModel.upsert(user);
    }
};

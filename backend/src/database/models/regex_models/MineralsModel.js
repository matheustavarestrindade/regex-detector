import Sequelize from "sequelize";
const { Model, DataTypes } = Sequelize;

class MineralsModel extends Model {}

export default MineralsModel;

export const initMineralsModel = async (connection) => {
    MineralsModel.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            link: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            tableName: "minerals",
        }
    );
    await MineralsModel.sync();
};

export const prefillMineraisModel = async () => {
    const mineraisWithLink = [
        {
            link: "https://pt.wikipedia.org/wiki/Abelsonita",
            name: "Abelsonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Abenaki%C3%ADte-(Ce)",
            name: "Abenakiíte-(Ce)",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Abichita",
            name: "Abichita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Acantita",
            name: "Acantita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Actinolita",
            name: "Actinolita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Adamite",
            name: "Adamite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/%C3%81gata",
            name: "Ágata",
        },
        {
            link: "https://pt.wikipedia.org/wiki/%C3%81gua-marinha",
            name: "Água-marinha",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Alabastro",
            name: "Alabastro",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Albita",
            name: "Albita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Alexandrita",
            name: "Alexandrita",
        },
        {
            link: "https://en.wikipedia.org/wiki/Alforsite",
            name: "Alforsita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Allanita",
            name: "Allanita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Alofano",
            name: "Alofano",
        },
        {
            link: "https://es.wikipedia.org/wiki/Alta%C3%ADta",
            name: "Altaita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Aluminita",
            name: "Aluminita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Alunita",
            name: "Alunita",
        },
        {
            link: "http://www.mindat.org/min-165.html",
            name: "Alvanita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Amazonita",
            name: "Amazonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/%C3%82mbar",
            name: "Âmbar",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ambligonita",
            name: "Ambligonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ametista",
            name: "Ametista",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anf%C3%ADbola",
            name: "Anfíbola",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Analcima",
            name: "Analcima",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Analcita",
            name: "Analcita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anatase",
            name: "Anatase",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Andaluzita",
            name: "Andaluzita",
        },
        {
            link: "https://de.wikipedia.org/wiki/Andersonit",
            name: "Andersonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Andradite",
            name: "Andradite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anglesita",
            name: "Anglesita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anidrita",
            name: "Anidrita",
        },
        {
            link: "https://es.wikipedia.org/wiki/Ankerita",
            name: "Ankerita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anortita",
            name: "Anortita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Anortoclase",
            name: "Anortoclase",
        },
        {
            link: "https://es.wikipedia.org/wiki/Antlerita",
            name: "Antlerita",
        },
        {
            link: "https://es.wikipedia.org/wiki/Antofilita",
            name: "Antofilita",
        },
        {
            link: "https://es.wikipedia.org/wiki/Antigorita",
            name: "Antigorita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Antim%C3%B4nio",
            name: "Antimônio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Apatita",
            name: "Apatita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Apofilita",
            name: "Apofilita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/%C3%81gua-marinha",
            name: "Água-marinha",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Aragonita",
            name: "Aragonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Areia",
            name: "Areia",
        },
        {
            link: "https://es.wikipedia.org/wiki/Arfvedsonita",
            name: "Arfvedsonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Argila",
            name: "Argila",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Armalcolita",
            name: "Armalcolita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ars%C3%AAnio",
            name: "Arsênio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Arsenopirita",
            name: "Arsenopirita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Asbesto",
            name: "Asbesto",
        },
        {
            link: "https://es.wikipedia.org/wiki/Astrofillita",
            name: "Astrofilita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Atacamita",
            name: "Atacamita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Augita",
            name: "Augita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Autunita",
            name: "Autunita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ilite",
            name: "Avalita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Aventurina",
            name: "Aventurina",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Axinita",
            name: "Axinita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Azurita",
            name: "Azurita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Baddeleyita",
            name: "Baddeleyita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Barita",
            name: "Barita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bastnasita",
            name: "Bastnasita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bauxita",
            name: "Bauxita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Beckerita&action=edit&redlink=1",
            name: "Beckerita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bertrandita",
            name: "Bertrandita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Berilo",
            name: "Berilo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Biotita",
            name: "Biotita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bismuto",
            name: "Bismuto",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Bixbita&action=edit&redlink=1",
            name: "Bixbita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Blenda",
            name: "Blenda",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Blomstrandina&action=edit&redlink=1",
            name: "Blomstrandina",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Boehmita&action=edit&redlink=1",
            name: "Boehmita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bornita",
            name: "Bornita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Brasilianita",
            name: "Brasilianita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bronze",
            name: "Bronze",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Briartita&action=edit&redlink=1",
            name: "Briartita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Brucita",
            name: "Brucita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Burmitea&action=edit&redlink=1",
            name: "Burmitea",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Bytownita",
            name: "Bytownita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Calcinita&action=edit&redlink=1",
            name: "Calcinita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Calced%C3%B4nia_(mineral)",
            name: "Calcedônia",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Calcita",
            name: "Calcita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Calcita_amarela&action=edit&redlink=1",
            name: "Calcita amarela",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Calcita_azul&action=edit&redlink=1",
            name: "Calcita azul",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Calcita_laranja&action=edit&redlink=1",
            name: "Calcita laranja",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Espato_da_isl%C3%A2ndia",
            name: "Calcita óptica",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Calcocita",
            name: "Calcocita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Calcopirita",
            name: "Calcopirita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Caledonita",
            name: "Caledonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Camacite",
            name: "Camacite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Canfieldita&action=edit&redlink=1",
            name: "Canfieldita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Carv%C3%A3o",
            name: "Carvão",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Carnallita",
            name: "Carnallita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Carnotita",
            name: "Carnotita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cassiterita",
            name: "Cassiterita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Caulinita",
            name: "Caulinita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Celadonita&action=edit&redlink=1",
            name: "Celadonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Celestita",
            name: "Celestita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cerussita&action=edit&redlink=1",
            name: "Cerussita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Chabazita&action=edit&redlink=1",
            name: "Chabazita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cianite",
            name: "Cianite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Clorapatita&action=edit&redlink=1",
            name: "Clorapatita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Clorita",
            name: "Clorita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Columbita",
            name: "Columbita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cromita",
            name: "Cromita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cristal",
            name: "Cristal",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Crisolita",
            name: "Crisolita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Crisotila",
            name: "Crisotila",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cimofano&action=edit&redlink=1",
            name: "Cimofano",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cin%C3%A1brio",
            name: "Cinábrio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Citrino_(mineral)",
            name: "Citrino",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cleve%C3%ADta",
            name: "Cleveíta",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cris%C3%B3tilo",
            name: "Clinocrisótilo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Clinoclase",
            name: "Clinoclase",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cobaltita",
            name: "Cobaltita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cobre",
            name: "Cobre",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Coesita&action=edit&redlink=1",
            name: "Coesita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Colemanita",
            name: "Colemanita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Columbita",
            name: "Columbita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cooperita&action=edit&redlink=1",
            name: "Cooperita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Copal",
            name: "Copal",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cordierita&action=edit&redlink=1",
            name: "Cordierita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cor%C3%ADndon",
            name: "Coríndon",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cornalina",
            name: "Cornalina",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Covellita&action=edit&redlink=1",
            name: "Covellita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cristal_de_rocha",
            name: "Cristal de rocha",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Crocidolita",
            name: "Crocidolita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Crookesita&action=edit&redlink=1",
            name: "Crookesita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Criolita",
            name: "Criolita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Crisoberilo",
            name: "Crisoberilo",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cummingtonita&action=edit&redlink=1",
            name: "Cummingtonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cuprita",
            name: "Cuprita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Cilindrita&action=edit&redlink=1",
            name: "Cilindrita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Datolita&action=edit&redlink=1",
            name: "Datolita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Dawsonita&action=edit&redlink=1",
            name: "Dawsonita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Delessita&action=edit&redlink=1",
            name: "Delessita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Diamante",
            name: "Diamante",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Di%C3%A1sporo",
            name: "Diásporo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Di%C3%B3psido",
            name: "Diópsido",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Distena",
            name: "Distena",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Dolomita",
            name: "Dolomita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Dambutita&action=edit&redlink=1",
            name: "Dambutita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Eakerita&action=edit&redlink=1",
            name: "Eakerita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Enargita",
            name: "Enargita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Enxofre",
            name: "Enxofre",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Epsomita",
            name: "Epsomita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Esfalerite",
            name: "Esfalerite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Esmectite",
            name: "Esmectite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Esmeralda",
            name: "Esmeralda",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Esmeralda_falsa&action=edit&redlink=1",
            name: "Esmeralda falsa",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Espessartite",
            name: "Espessartite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Espinela",
            name: "Espinela",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Espod%C3%BAmena",
            name: "Espodúmena",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Estaurolite",
            name: "Estaurolite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Esteatite",
            name: "Esteatite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Estilbite&action=edit&redlink=1",
            name: "Estilbite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Estroncianite",
            name: "Estroncianite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Euxenita",
            name: "Euxenita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Esmectite",
            name: "Esmectite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Faialita",
            name: "Faialita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Feldspato",
            name: "Feldspato",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Fenaquita",
            name: "Fenaquita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ferberita",
            name: "Ferberita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ferricreta&action=edit&redlink=1",
            name: "Ferricreta",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ferrierita&action=edit&redlink=1",
            name: "Ferrierita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ferro-antofilita&action=edit&redlink=1",
            name: "Ferro-antofilita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ferrotantalita&action=edit&redlink=1",
            name: "Ferrotantalita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Fergusonita&action=edit&redlink=1",
            name: "Fergusonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Flogopite",
            name: "Flogopite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Fluorapatita&action=edit&redlink=1",
            name: "Fluorapatita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Fluorichterita&action=edit&redlink=1",
            name: "Fluorichterita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Fluorita",
            name: "Fluorita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Forsterita",
            name: "Forsterita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Fosforita",
            name: "Fosforita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Franckeita&action=edit&redlink=1",
            name: "Franckeita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Franklinita&action=edit&redlink=1",
            name: "Franklinita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Fuchsita&action=edit&redlink=1",
            name: "Fuchsita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Gadolinita",
            name: "Gadolinita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Galena",
            name: "Galena",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Gema_(mineralogia)",
            name: "Gema",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Granada_(mineralogia)",
            name: "Granada",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Gedanita&action=edit&redlink=1",
            name: "Gedanita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Germanita",
            name: "Germanita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Gipsita",
            name: "Gipsita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Glauconita",
            name: "Glauconita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Glessita&action=edit&redlink=1",
            name: "Glessita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Goethita",
            name: "Goethita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Grafite",
            name: "Grafite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Grunerita&action=edit&redlink=1",
            name: "Grunerita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Halita",
            name: "Halite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hapkeita&action=edit&redlink=1",
            name: "Hapkeita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Hematita",
            name: "Hematita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Hemimorfita",
            name: "Hemimorfita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hibonite&action=edit&redlink=1",
            name: "Hibonite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hiddenita&action=edit&redlink=1",
            name: "Hiddenita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Horneblenda",
            name: "Horneblenda",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Hubnerita",
            name: "Hubnerita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hutchinsonita&action=edit&redlink=1",
            name: "Hutchinsonita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hialita&action=edit&redlink=1",
            name: "Hialita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Hidroxilapatita&action=edit&redlink=1",
            name: "Hidroxilapatita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Howlita&action=edit&redlink=1",
            name: "Howlita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ilite",
            name: "Ilite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ilmenita",
            name: "Ilmenita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ir%C3%ADdio",
            name: "Iridio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Jade",
            name: "Jade",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Jade_indiana&action=edit&redlink=1",
            name: "Jade indiana",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Jaspe",
            name: "Jaspe",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Jaspe_nefrita&action=edit&redlink=1",
            name: "Jaspe nefrita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Jaspe_de_sangue&action=edit&redlink=1",
            name: "Jaspe de sangue",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Jaspe_verde&action=edit&redlink=1",
            name: "Jaspe verde",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Jaspe_vermelho&action=edit&redlink=1",
            name: "Jaspe vermelho",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Kainita",
            name: "Kainita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Kalsilita&action=edit&redlink=1",
            name: "Kalsilita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Kamacita&action=edit&redlink=1",
            name: "Kamacita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Karpinskyita&action=edit&redlink=1",
            name: "Karpinskyita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Keilhauita&action=edit&redlink=1",
            name: "Keilhauita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Kernita",
            name: "Kernita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Kobellita&action=edit&redlink=1",
            name: "Kobellita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Kogarkoita&action=edit&redlink=1",
            name: "Kogarkoita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Krantzita&action=edit&redlink=1",
            name: "Krantzita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Kunzita",
            name: "Kunzita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Labradorite",
            name: "Labradorite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Lazurita",
            name: "Lazurita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Lepidolite",
            name: "Lepidolite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/L%C3%A1pis-laz%C3%BAli",
            name: "Lápis-lazúli",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Leucite",
            name: "Leucite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Lizardite&action=edit&redlink=1",
            name: "Lizardite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Lonsdaleite",
            name: "Lonsdaleite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Lorandite&action=edit&redlink=1",
            name: "Lorandite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Magn%C3%A9sia_(mineral)",
            name: "Magnésia",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Magnesita",
            name: "Magnesita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Magnetite",
            name: "Magnetite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Malaquita",
            name: "Malaquita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Malacolite&action=edit&redlink=1",
            name: "Malacolite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Manganocolumbite&action=edit&redlink=1",
            name: "Manganocolumbite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Marcassite",
            name: "Marcassite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Margaritasite",
            name: "Margaritasite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Matioliita&action=edit&redlink=1",
            name: "Matioliita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(elemento_qu%C3%ADmico)",
            name: "Mercúrio",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Meerschaum&action=edit&redlink=1",
            name: "Meerschaum",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Mendozite&action=edit&redlink=1",
            name: "Mendozite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Menilite&action=edit&redlink=1",
            name: "Menilite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Metacinnabarite&action=edit&redlink=1",
            name: "Metacinnabarite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Mica",
            name: "Mica",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Microclina",
            name: "Microclina",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Millarite&action=edit&redlink=1",
            name: "Millarite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Millerite&action=edit&redlink=1",
            name: "Millerite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Molibdenite",
            name: "Molibdenite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Monazite",
            name: "Monazite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Morganita&action=edit&redlink=1",
            name: "Morganita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo_fumado",
            name: "Morion",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Muscovite",
            name: "Muscovite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Nefelina",
            name: "Nefelina",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Columbita",
            name: "Niobite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Niobite-tantalite&action=edit&redlink=1",
            name: "Niobite-tantalite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Obsidiana",
            name: "Obsidiana",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Olivina",
            name: "Olivina",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Opala",
            name: "Opala",
        },
        {
            link: "https://pt.wikipedia.org/wiki/%C3%93nix",
            name: "Ónix",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cris%C3%B3tilo",
            name: "Ortocrisótilo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ortoclase",
            name: "Ortoclase",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Olho_de_tigre",
            name: "Olho de tigre",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Olho_de_tigre_vermelho&action=edit&redlink=1",
            name: "Olho de tigre vermelho",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ouro",
            name: "Ouro",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Palagonite",
            name: "Palagonite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Cris%C3%B3tilo",
            name: "Paracrisótilo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pentlandita",
            name: "Pentlandita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Periclase",
            name: "Periclase",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Peridotito",
            name: "Peridotito",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Peridoto",
            name: "Peridoto",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Perovskita",
            name: "Perovskita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Petalite",
            name: "Petalite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Petzite&action=edit&redlink=1",
            name: "Petzite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Phillipsita&action=edit&redlink=1",
            name: "Phillipsita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pirita",
            name: "Pirita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pirocloro",
            name: "Pirocloro",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Pirofilite&action=edit&redlink=1",
            name: "Pirofilite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pirolusite",
            name: "Pirolusite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Piromorfite",
            name: "Piromorfite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Piropo",
            name: "Piropo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Piroxena",
            name: "Piroxena",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pirrotite",
            name: "Pirrotite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Plagioclase",
            name: "Plagioclase",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Plivine&action=edit&redlink=1",
            name: "Plivine",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Polucita",
            name: "Polucita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Pol%C3%ADcrase&action=edit&redlink=1",
            name: "Polícrase",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pot%C3%A1ssio",
            name: "Potássio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pr%C3%A1sio",
            name: "Prásio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Prata",
            name: "Prata",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Prehnite",
            name: "Prehnite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo",
            name: "Quartzo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo_rosa",
            name: "Quartzo rosa",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo_leitoso",
            name: "Quartzo leitoso",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo_azul",
            name: "Quartzo azul",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Quartzo_amarelo",
            name: "Quartzo amarelo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Citrino_(mineral)",
            name: "Quartzo citrino",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Realgar",
            name: "Realgar",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Rodocrosita",
            name: "Rodocrosita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Riebeckite",
            name: "Riebeckite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Roumanite&action=edit&redlink=1",
            name: "Roumanite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Rubi",
            name: "Rubi",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Rutilo",
            name: "Rutilo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Rodonita",
            name: "Rodonita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Sabugalite",
            name: "Sabugalite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Saflorite&action=edit&redlink=1",
            name: "Saflorite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Sal_amon%C3%ADaco",
            name: "Sal amoníaco",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Samarskite",
            name: "Samarskite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Sanbornite&action=edit&redlink=1",
            name: "Sanbornite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Saponite&action=edit&redlink=1",
            name: "Saponite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Safira",
            name: "Safira",
        },
        {
            link: "https://pt.wikipedia.org/wiki/S%C3%A1rdio",
            name: "Sárdio",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Satinspar&action=edit&redlink=1",
            name: "Satinspar",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Sauconite&action=edit&redlink=1",
            name: "Sauconite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Scapolite&action=edit&redlink=1",
            name: "Scapolite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Scheelite",
            name: "Scheelite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Turmalina",
            name: "Schorl",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Selenite",
            name: "Selenite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Seligmannite&action=edit&redlink=1",
            name: "Seligmannite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Sepiolite&action=edit&redlink=1",
            name: "Sepiolite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Serpentina_(silicato)",
            name: "Serpentina",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Shattuckite&action=edit&redlink=1",
            name: "Shattuckite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Siderita",
            name: "Siderita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/S%C3%ADlica",
            name: "Sílica",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Silimanite",
            name: "Silimanite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Simetite&action=edit&redlink=1",
            name: "Simetite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Skutterudite&action=edit&redlink=1",
            name: "Skutterudite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Smaltite&action=edit&redlink=1",
            name: "Smaltite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Smithsonite",
            name: "Smithsonite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Sodalita",
            name: "Sodalita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Sperrylite",
            name: "Sperrylite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Stannite&action=edit&redlink=1",
            name: "Stannite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Stantienite&action=edit&redlink=1",
            name: "Stantienite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Steacyite&action=edit&redlink=1",
            name: "Steacyite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Stephanite&action=edit&redlink=1",
            name: "Stephanite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Estibina",
            name: "Estibina",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Stichtite&action=edit&redlink=1",
            name: "Stichtite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Stolzite",
            name: "Stolzite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Stromeyerite&action=edit&redlink=1",
            name: "Stromeyerite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Sussexite&action=edit&redlink=1",
            name: "Sussexite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Silvina",
            name: "Silvina",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Talco",
            name: "Talco",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tantalite",
            name: "Tantalite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tarapacaite&action=edit&redlink=1",
            name: "Tarapacaite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Teallite&action=edit&redlink=1",
            name: "Teallite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Telinguaite&action=edit&redlink=1",
            name: "Telinguaite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tel%C3%BArio",
            name: "Telúrio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tennantite",
            name: "Tennantite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tephroite&action=edit&redlink=1",
            name: "Tephroite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tetraedrite&action=edit&redlink=1",
            name: "Tetraedrite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Torianita",
            name: "Torianita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Thorite&action=edit&redlink=1",
            name: "Thorite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Thortveitita",
            name: "Thortveitita",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Thulite&action=edit&redlink=1",
            name: "Thulite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tiemannite&action=edit&redlink=1",
            name: "Tiemannite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tit%C3%A2nio",
            name: "Titânio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Titanite",
            name: "Titanite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Top%C3%A1zio",
            name: "Topázio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Torbernite",
            name: "Torbernite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Turmalina",
            name: "Turmalina",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Turmalina_Para%C3%ADba",
            name: "Turmalina Paraíba",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tremolite",
            name: "Tremolite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Trevorite&action=edit&redlink=1",
            name: "Trevorite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tridimite",
            name: "Tridimite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Trifilite&action=edit&redlink=1",
            name: "Trifilite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Troctolite&action=edit&redlink=1",
            name: "Troctolite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Troilite",
            name: "Troilite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tschermigite&action=edit&redlink=1",
            name: "Tschermigite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tungst%C3%A9nio",
            name: "Tungsténio",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Sulfureto_de_tungst%C3%A9nio_(IV)",
            name: "Tungstenite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Turquesa",
            name: "Turquesa",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tutty&action=edit&redlink=1",
            name: "Tutty",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Tyuyamunite&action=edit&redlink=1",
            name: "Tyuyamunite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Tanzanite",
            name: "Tanzanite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ulexite",
            name: "Ulexite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ullmannite&action=edit&redlink=1",
            name: "Ullmannite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ulvospinela",
            name: "Ulvospinela",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Umangite&action=edit&redlink=1",
            name: "Umangite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Uralite&action=edit&redlink=1",
            name: "Uralite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Pechblenda",
            name: "Uraninite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Ur%C3%A2nio",
            name: "Urânio",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Uran%C3%B3fano&action=edit&redlink=1",
            name: "Uranófano",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Uvarovite",
            name: "Uvarovite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Uvite&action=edit&redlink=1",
            name: "Uvite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Unakita&action=edit&redlink=1",
            name: "Unakita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Vanadinite",
            name: "Vanadinite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Variscite&action=edit&redlink=1",
            name: "Variscite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Vaterite&action=edit&redlink=1",
            name: "Vaterite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Vermiculite",
            name: "Vermiculite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Vesuvianite",
            name: "Vesuvianite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Villiaumita",
            name: "Villiaumita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Vivianite",
            name: "Vivianite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Volframite",
            name: "Volframite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Wad",
            name: "Wad",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Wernerite&action=edit&redlink=1",
            name: "Wernerite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Weloganite&action=edit&redlink=1",
            name: "Weloganite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Whitlockite&action=edit&redlink=1",
            name: "Whitlockite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Willemite&action=edit&redlink=1",
            name: "Willemite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Wiserine&action=edit&redlink=1",
            name: "Wiserine",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Witherita",
            name: "Witherita",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Wollastonite",
            name: "Wollastonite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Wulfenite",
            name: "Wulfenite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Xen%C3%B3timo",
            name: "Xenótimo",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Xisto",
            name: "Xisto",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Yttria&action=edit&redlink=1",
            name: "Yttria",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zabuyelite&action=edit&redlink=1",
            name: "Zabuyelite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zaccagnaite&action=edit&redlink=1",
            name: "Zaccagnaite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zaherite&action=edit&redlink=1",
            name: "Zaherite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zajacite-(Ce)&action=edit&redlink=1",
            name: "Zajacite-(Ce)",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zakharovite&action=edit&redlink=1",
            name: "Zakharovite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zamboninite&action=edit&redlink=1",
            name: "Zamboninite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zanazziite&action=edit&redlink=1",
            name: "Zanazziite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zapalite&action=edit&redlink=1",
            name: "Zapalite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zappinite&action=edit&redlink=1",
            name: "Zappinite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zaratite&action=edit&redlink=1",
            name: "Zaratite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Zeolite",
            name: "Zeolite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zeuxite&action=edit&redlink=1",
            name: "Zeuxite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zhanghengite&action=edit&redlink=1",
            name: "Zhanghengite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zharchikhite&action=edit&redlink=1",
            name: "Zharchikhite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Zhemchuzhnikovite",
            name: "Zhemchuzhnikovite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zhonghuacerite-(Ce)&action=edit&redlink=1",
            name: "Zhonghuacerite-(Ce)",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Ziesite&action=edit&redlink=1",
            name: "Ziesite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zimbabweite&action=edit&redlink=1",
            name: "Zimbabweite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zinalsite&action=edit&redlink=1",
            name: "Zinalsite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zinc-melanterite&action=edit&redlink=1",
            name: "Zinc-melanterite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zincite&action=edit&redlink=1",
            name: "Zincite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zincobotryogen&action=edit&redlink=1",
            name: "Zincobotryogen",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zincochromite&action=edit&redlink=1",
            name: "Zincochromite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zinkenite&action=edit&redlink=1",
            name: "Zinkenite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zinnwaldite&action=edit&redlink=1",
            name: "Zinnwaldite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zippeite&action=edit&redlink=1",
            name: "Zippeite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Zirc%C3%A3o",
            name: "Zircão",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Zirconolite",
            name: "Zirconolite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zircophyllite&action=edit&redlink=1",
            name: "Zircophyllite",
        },
        {
            link: "https://pt.wikipedia.org/w/index.php?title=Zirkelite&action=edit&redlink=1",
            name: "Zirkelite",
        },
        {
            link: "https://pt.wikipedia.org/wiki/Zoisite",
            name: "Zoisite",
        },
    ];

    for (const mineral of mineraisWithLink) {
        await MineralsModel.upsert(mineral);
    }
};

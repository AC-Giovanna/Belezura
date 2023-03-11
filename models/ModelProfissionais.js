/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');
const telefones = require('./ModelTelefones');
const endereco = require('./ModelEnderecos');


//Criação do modelo
const modelProfissionais = conexao.define('profissional', {
    //Definição dos campos e de seus atributos
    IDProfissional:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    CNPJ_CPF: {
        type: sequelize.STRING,
        allowNull: false
    },
    atendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT
    },
    contatoPrincipal: {
        type: sequelize.STRING
    },
    contatoSecundario: {
        type: sequelize.STRING
    },
    fotoPerfil: {
        type: sequelize.BLOB
    },
     //FK_Enderecos_Profissionais: {},
    IDEnderecos: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    //FK_Telefones_Profissionais: {},
    IDTelefones: {
        type: sequelize.INTEGER,
        allowNull: false
    }
})

//relacionando as chaves estrangeiras
modelProfissionais.belongsTo(endereco, {foreignKey: 'IDEnderecos', allowNull:false })
modelProfissionais.belongsTo(telefones, {foreignKey: 'IDTelefones', allowNull:false })


//Forçar a criação do modelo
modelProfissionais.sync({ force: true });

//Exportação do modelo
module.exports = modelProfissionais;
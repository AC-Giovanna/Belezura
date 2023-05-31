
const conexao = require('./database/Database')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const modelStatus = require('./models/ModelStatus')

//Importação das rotas
const routeAgenda = require('./routes/RouteAgenda');
const routeAvaliacoes = require('./routes/RouteAvaliacoes');
const routeCategorias = require('./routes/RouteCategorias');
const routeClientes = require('./routes/RouteClientes');
const routeEnderecos = require('./routes/RouteEnderecos');
const routeStatus = require('./routes/RouteStatus');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');

//Tornando o express executável
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//conexao.sync({ force : true });
const sincronizar = () => {
    modelStatus.bulkCreate([
        { titulo: 'Solicitado' },
        { titulo: 'Confirmado' },
        { titulo: 'Concluído' },
        { titulo: 'Pago' },
        { titulo: 'Cancelado' },
        { titulo: 'Adiado' }
    ])
}

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeAgenda);
app.use('/', routeAvaliacoes);
app.use('/', routeCategorias);
app.use('/', routeClientes); 
app.use('/', routeEnderecos);
app.use('/', routeStatus);
app.use('/', routeProfissionais);
app.use('/', routeServicos);

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
    //SINCRONIZAÇÃO DOS STATUS PADRÃO DOS SERVIÇOS
    //sincronizar()
});
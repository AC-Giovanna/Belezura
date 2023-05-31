//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelAgenda = require('../models/ModelAgenda');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE AGENDAMENTOS

//Rota de cadastro
router.post('/cadastrarAgendamento', (req, res) => {
    console.log(req.body);
    
    let {data, FK_Servicos_Agenda, FK_Clientes_Agenda, FK_Profissionais_Agenda} = req.body;

    modelAgenda.create(
        {data, FK_Servicos_Agenda, FK_Clientes_Agenda, FK_Profissionais_Agenda}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Agendamento cadastrado com sucesso!"
            })
        }
    ).catch(
       (erro) => {
        return res.status(201).json({
            erroStatus: true,
            mensagemStatus: "Erro ao cadastrar agendamento",
            erroObject: erro
        })
       }
    )
});

//Rota de listagem
router.get('/listagemAgendamentos', (req, res) => {

    modelAgenda.findAll()
    .then(
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Agendamentos listados com sucesso!',
                data: response
            })        
        }
    ).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os Agendamentos',
                erroObject: erro
            })
        }
    )
});

//Rota de Alteração
router.put('/alterarAgendamento/:ID', (req, res) =>{

    let {data, FK_Servicos_Agenda, FK_Clientes_Agenda, FK_Profissionais_Agenda} = req.body;

    modelAgenda.update(
        {data, FK_Servicos_Agenda, FK_Clientes_Agenda, FK_Profissionais_Agenda},
        {where:{ID}}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Agendamento alterado com sucesso!'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao alterar Agendamento',
                errorObject:error
            })
        }
    )

})

//Rota de Exclusão
router.delete('/excluirAgendamento:ID', (req, res)=>{

    console.log(req.params);

    let {ID} = req.params;

    modelAgenda.destroy(
        {where:{ID}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Agendamento excluido'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao excluir Agendamento',
                errorObject:error
            })
        }
    )
})

//FIM DAS ROTAS DE CRUD TABELA DE AGENDAMENTOS

//Exportação das rotas
module.exports = router;
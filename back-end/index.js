//Imports
const express = require("express")
const route = express()
const cors = require("cors")
const database = require("./database/db")
const Usuario = require("./models/usuario")

route.use(cors())
route.use(express.json())

//Conexao c banco de dados
database
    .authenticate()
    .then(() => {
        console.log("Conexao com o banco de dados realizada com sucesso!")
    }).catch((error) => {
        console.log(error)
    })


route.get("/", (req, res) => {
    res.send("Inicial")
})

//Rotas das API'S
route.post("/cadastro", (req, res) => {
    const { nome } = req.body
    const { email } = req.body
    const { senha } = req.body

    console.log(nome)
    console.log(email)
    console.log(senha)

    Usuario.create({
        login: nome,
        email: email,
        senha: senha,
    }).then((dadoscadastro) => {
        console.log(dadoscadastro.toJSON())
        res.send("Dados enviado")
    }).catch((error) => {
        console.log(error)
    })

})

route.get("/usuarios", (req, res) => {
    Usuario.findAll({
    }).then((usuarios) => {
        console.log(usuarios.map(usuarios => usuarios.toJSON()))
        res.send(usuarios)
    }).catch((error) => {
        console.log(error)
    })
})

route.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    Usuario.destroy({
        where: {
            id:id
        }
    }).then(() => {
        res.send(`Usuário com ID ${id} excluído com sucesso.`);
    }).catch((error) => {
        console.log(error);
        res.status(500).send("Ocorreu um erro ao excluir o usuário.");
    });
});

route.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    Usuario.update({
        login: nome,
        email: email,
        senha: senha,
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send('Dados atualizados com sucesso!');
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Erro ao atualizar dados do usuário.');
    });
});
//Porta do servidor
route.listen(5000, () => {
    console.log("Aplicação on-line! \nUrl:http://localhost:5000/")
})      

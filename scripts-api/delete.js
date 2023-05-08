function excluirUsuario(id) {
    axios.delete(`http://localhost:5000/usuarios/${id}`)
        .then(function (response) {
            alert('Usuário excluído com sucesso.');
            location.reload(); // recarrega a página para atualizar a tabela de usuários
        })
        .catch(function (error) {
            console.log(error);
            alert('Ocorreu um erro ao excluir o usuário.');
        });
    }
    
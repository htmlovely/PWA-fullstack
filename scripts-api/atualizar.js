function atualizarUsuario() {
    var usuarioId = prompt('Digite a ID do usuário que deseja atualizar:');
    var novoNome = prompt('Digite o novo nome:');
    var novoEmail = prompt('Digite o novo e-mail:');
    var novaSenha = prompt('Digite a nova senha:');
  
    axios.put('http://localhost:5000/usuarios/' + usuarioId, {
      nome: novoNome,
      email: novoEmail,
      senha: novaSenha
    }).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }

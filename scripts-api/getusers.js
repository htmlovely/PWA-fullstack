    
    
    /*axios.get('http://localhost:5000/usuarios')
    .then(function (response) {
        var usuarios = response.data;
        var usuariosTableBody = document.getElementById('usuarios-table-body');

        for (var i = 0; i < usuarios.length; i++) {
            var usuario = usuarios[i];
            var tr = document.createElement('tr');
            var idTd = document.createElement('td');
            idTd.textContent = usuario.id;
            tr.appendChild(idTd);
            var loginTd = document.createElement('td');
            loginTd.textContent = usuario.login;
            tr.appendChild(loginTd);
            var emailTd = document.createElement('td');
            emailTd.textContent = usuario.email;
            tr.appendChild(emailTd);
            var senhaTd = document.createElement('td');
            senhaTd.textContent = usuario.senha;
            tr.appendChild(senhaTd);
            var acaoTd = document.createElement('td');
            var excluirButton = document.createElement('button');
            excluirButton.textContent = 'Excluir';
            excluirButton.addEventListener('click', function () {
                excluirUsuario(usuario.id);
            });
            acaoTd.appendChild(excluirButton);
            tr.appendChild(acaoTd);
            usuariosTableBody.appendChild(tr);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
*/
axios.get('http://localhost:5000/usuarios')
.then(function (response) {
    var usuarios = response.data;
    var usuariosTableBody = document.getElementById('usuarios-table-body');

    for (var i = 0; i < usuarios.length; i++) {
        var usuario = usuarios[i];
        var tr = document.createElement('tr');
        var idTd = document.createElement('td');
        idTd.textContent = usuario.id;
        tr.appendChild(idTd);
        var loginTd = document.createElement('td');
        loginTd.textContent = usuario.login;
        tr.appendChild(loginTd);
        var emailTd = document.createElement('td');
        emailTd.textContent = usuario.email;
        tr.appendChild(emailTd);
        var senhaTd = document.createElement('td');
        senhaTd.textContent = usuario.senha;
        tr.appendChild(senhaTd);
        var acaoTd = document.createElement('td');
        var excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.addEventListener('click', function () {
            excluirUsuario(usuario.id);
        });
        acaoTd.appendChild(excluirButton);
        tr.appendChild(acaoTd);
        usuariosTableBody.appendChild(tr);
    }
})
.catch(function (error) {
    console.log(error);
});

    
/*
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
*/

const form = document.querySelector('form');
const button = document.querySelector('#cadastro-button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome_cad').value;
  const email = document.querySelector('#email_cad').value;
  const senha = document.querySelector('#senha_cad').value;

  axios.post('http://localhost:5000/cadastro', { nome, email, senha })
    .then(response => {
      console.log(response.data);
      alert('Dados enviados com sucesso!');
    })
    .catch(error => {
      alert('Ocorreu um erro ao enviar os dados!');
      console.log(error);
    });
});
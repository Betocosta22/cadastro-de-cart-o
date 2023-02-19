const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne o envio do formulário

  const nomeTitular = document.querySelector('#nome-titular').value;
  const numeroCartao = document.querySelector('#numero-cartao').value;
  const dataValidade = document.querySelector('#data-validade').value;
  const codigoSeguranca = document.querySelector('#codigo-seguranca').value;

  // Verifica se os campos estão preenchidos
  if (nomeTitular === '' || numeroCartao === '' || dataValidade === '' || codigoSeguranca === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Valida o número do cartão
  const regex = /^[0-9]{16}$/;
  if (!regex.test(numeroCartao)) {
    alert('Por favor, insira um número de cartão válido.');
    return;
  }

  // Valida a data de validade
  const dataAtual = new Date();
  const partesData = dataValidade.split('/');
  const dataCartao = new Date(partesData[1], partesData[0], 0);
  if (dataCartao < dataAtual) {
    alert('Por favor, insira uma data de validade válida.');
    return;
  }

  // Valida o código de segurança
  const regexCodigo = /^[0-9]{3}$/;
  if (!regexCodigo.test(codigoSeguranca)) {
    alert('Por favor, insira um código de segurança válido.');
    return;
  }

  // Se chegou até aqui, todos os campos estão preenchidos corretamente
  // Envia os dados para o servidor
  const dadosCartao = {
    nomeTitular: nomeTitular,
    numeroCartao: numeroCartao,
    dataValidade: dataValidade,
    codigoSeguranca: codigoSeguranca
  };

  // Aqui você pode enviar os dados para um servidor usando uma requisição HTTP
  console.log


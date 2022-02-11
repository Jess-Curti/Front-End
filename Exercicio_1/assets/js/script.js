let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa')

let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"

function valorNome() {
    let txtNome = document.querySelector('#txtNome');
  
    if (nome.value.length >= 4) {
      txtNome.style.color = '#26733a';
      txtNome.innerHTML = 'Nome válido ✔';
      nomeOk = true;
    } else {
      txtNome.style.color = '#732626';
      txtNome.innerHTML = 'Nome inválido - Insira pelo menos 4 caracteres ❌';
    }
  }

  function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
  
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      txtEmail.style.color = '#26733a';
      txtEmail.innerHTML = 'E-mail valido ✔'
    } else {
        txtEmail.style.color = '#732626';
      txtEmail.innerHTML = 'E-mail Invalido ❌';
    }
  }
  
  function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
  
      contador.innerHTML = `${assunto.value.length} / 100`
  
  
    if (assunto.value.length >= 100) {
      txtAssunto.innerHTML =
        'Texto é muito grande, digite no máximo 100 caracteres ❌';
      txtAssunto.style.color = '#732626';
      txtAssunto.style.display = 'block';
    } else {
      txtAssunto.style.display = 'none';
      assuntoOk = true;
    }
  }
    
  function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha o formulário corretamente antes de enviar...');
    }
  }
  
  function count(){
    let contador = document.querySelector('#contador')
    contador.innerHTML = `${assunto.value.length} / 144`
  }
  
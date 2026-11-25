// Script do portfolio

// ---------- Menu no celular ----------
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// ---------- Marca no menu a pagina que esta aberta ----------
var pagina = window.location.pathname.split("/").pop();
if (pagina == "") {
  pagina = "index.html";
}

var links = document.querySelectorAll("#menu a");
for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") == pagina) {
    links[i].classList.add("ativo");
  }
}

// ---------- Portfolio: mostrar e esconder detalhes ----------
function mostrarDetalhes(id, botao) {
  var div = document.getElementById(id);

  if (div.style.display == "block") {
    div.style.display = "none";
    botao.innerText = "Ver mais";
  } else {
    div.style.display = "block";
    botao.innerText = "Ver menos";
  }
}

// ---------- Formulario de contato ----------
var form = document.getElementById("formContato");

// o formulario so existe na pagina de contato
if (form) {
  form.addEventListener("submit", function (evento) {
    // nao deixa a pagina recarregar
    evento.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    // limpa os erros anteriores
    document.getElementById("erroNome").innerText = "";
    document.getElementById("erroEmail").innerText = "";
    document.getElementById("erroMensagem").innerText = "";

    var valido = true;

    if (nome == "") {
      document.getElementById("erroNome").innerText = "Preencha o nome.";
      valido = false;
    }

    // verifica se o email tem o formato usuario@dominio.com
    var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
      document.getElementById("erroEmail").innerText = "Preencha o e-mail.";
      valido = false;
    } else if (!formatoEmail.test(email)) {
      document.getElementById("erroEmail").innerText = "E-mail inválido. Exemplo: usuario@dominio.com";
      valido = false;
    }

    if (mensagem == "") {
      document.getElementById("erroMensagem").innerText = "Escreva a mensagem.";
      valido = false;
    }

    // se estiver tudo certo, simula o envio
    if (valido) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });
}

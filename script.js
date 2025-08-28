const form = document.getElementById("cadastroForm");
const campos = {
  nome: document.getElementById("nome"),
  cpf: document.getElementById("cpf"),
  login: document.getElementById("login"),
  email: document.getElementById("email"),
  senha: document.getElementById("senha"),
  confirmaSenha: document.getElementById("confirmaSenha"),
  salario: document.getElementById("salario"),
  dependentes: document.getElementById("dependentes"),
  ir: document.getElementById("ir")
};

// Expressões Regulares
const regex = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  login: /^[A-Za-z0-9._-]{4,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  senha: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
};

// Função de validação genérica
function validarCampo(campo, condicao, mensagem) {
  const error = campo.nextElementSibling;
  if (!condicao) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    error.textContent = mensagem;
    return false;
  } else {
    campo.classList.add("is-valid");
    campo.classList.remove("is-invalid");
    error.textContent = "";
    return true;
  }
}

// Validações específicas
function validar() {
  let valido = true;

  if (!validarCampo(campos.nome, campos.nome.value.trim().length >= 3, "Mínimo 3 caracteres")) valido = false;
  if (!validarCampo(campos.cpf, regex.cpf.test(campos.cpf.value), "CPF inválido")) valido = false;
  if (!validarCampo(campos.login, regex.login.test(campos.login.value), "Login inválido")) valido = false;
  if (!validarCampo(campos.email, regex.email.test(campos.email.value), "E-mail inválido")) valido = false;
  if (!validarCampo(campos.senha, regex.senha.test(campos.senha.value), "Senha deve ter 8+ caracteres, 1 letra e 1 número")) valido = false;
  if (!validarCampo(campos.confirmaSenha, campos.confirmaSenha.value === campos.senha.value, "Senhas não conferem")) valido = false;
  if (!validarCampo(campos.salario, parseFloat(campos.salario.value) > 0, "Salário deve ser > 0")) valido = false;
  if (!validarCampo(campos.dependentes, parseInt(campos.dependentes.value) >= 0, "Informe dependentes (>=0)")) valido = false;

  return valido;
}

// Cálculo do IR
campos.dependentes.addEventListener("blur", () => {
  let salario = parseFloat(campos.salario.value) || 0;
  let dependentes = parseInt(campos.dependentes.value) || 0;
  let base = salario - (dependentes * 200);
  if (base < 0) base = 0;

  let aliquota = 0;
  if (base <= 2000) aliquota = 0;
  else if (base <= 3000) aliquota = 0.1;
  else if (base <= 4500) aliquota = 0.15;
  else aliquota = 0.22;

  let ir = (base * aliquota).toFixed(2);
  campos.ir.value = ir.replace(".", ",");
});

// Mostrar/Ocultar senha
document.querySelectorAll(".toggleSenha").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
  });
});

// Submissão
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validar()) {
    alert("Usuário cadastrado com sucesso!");
    form.reset();
    Object.values(campos).forEach(campo => {
      campo.classList.remove("is-valid", "is-invalid");
    });
    campos.ir.value = "0,00";
  }
});

// Botão Limpar
document.getElementById("limpar").addEventListener("click", () => {
  Object.values(campos).forEach(campo => {
    campo.classList.remove("is-valid", "is-invalid");
  });
  campos.ir.value = "0,00";
});
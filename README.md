# 📋 Cadastro de Usuários com Validação (HTML, CSS e JS)

Aplicação web simples feita com **HTML, CSS e JavaScript puro**, com foco em **validação de formulários** e **cálculo de Imposto de Renda (IR)**.

---

## 🚀 Funcionalidades

- ✅ Validação de formulário com **if/else** e **expressões regulares (REGEX)**.  
- ✅ Campos obrigatórios:
  - Nome Completo
  - CPF (formato `000.000.000-00`)
  - Login (mínimo 4 caracteres, letras, números e símbolos `._-`)
  - E-mail
  - Senha (mínimo 8 caracteres, pelo menos 1 letra e 1 número)
  - Confirmação de Senha (idêntica à senha)
  - Salário (valor maior que zero)
  - Dependentes (inteiro ≥ 0)
- 👁 Botão para **mostrar/ocultar senha e confirmação**.  
- 🧮 **Cálculo automático do IR** ao sair do campo dependentes.  
- 🎨 Feedback visual de erros e acertos (borda vermelha/verde).  
- 📌 Botão **Cadastrar**:
  - Valida todos os campos.
  - Exibe mensagem de sucesso.
  - Limpa o formulário após cadastro válido.
- 📌 Botão **Limpar**:
  - Reseta todos os campos.
  - Remove feedback visual.
  - Zera o campo IR.

---

## 🧮 Regra de Cálculo do IR

- Base de cálculo = `Salário – (200 × Nº de Dependentes)`
- Se a base < 0, usar 0.
- Aplicar a alíquota:
  - Até R$ 2000 → **0%**
  - Até R$ 3000 → **10%**
  - Até R$ 4500 → **15%**
  - Acima de R$ 4500 → **22%**
- Resultado exibido no campo **IR**, arredondado para 2 casas decimais.

---

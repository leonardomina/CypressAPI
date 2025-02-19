# CypressAPI
# Automção de Testes - VR API (Ruby + Cucumber + HTTParty e Cypress)

Este projeto contém **testes automatizados** para validar a API da **VR Benefícios** e uma função auxiliar de manipulação de strings. Foram utilizados **Ruby + Cucumber + HTTParty** e **Cypress** para desenvolver diferentes abordagens de testes.

A seguir, você encontrará um **passo a passo** detalhado para configurar o ambiente, instalar dependências e executar os testes.

---

## 1. Configuração do Ambiente

### 1.1. Pré-requisitos

Antes de executar os testes, certifique-se de que seu ambiente possui os seguintes requisitos:

- **Windows** (o tutorial é baseado nesse sistema).
- **Git** instalado e configurado.
- **Node.js** (LTS) para execução do Cypress.
- **Ruby** para execução do Cucumber.

---

## 2. Como Configurar o Projeto

Após clonar este repositório, siga os passos abaixo para instalar as dependências necessárias.

### 2.1 Instalar dependências do projeto

Na raiz do projeto, execute os seguintes comandos:

```bash
npm install    # Instala as dependências do Cypress
bundle install # Instala as dependências do Ruby
```

---

## 3. Executar os Testes

Após instalar as dependências, escolha a abordagem que deseja utilizar para rodar os testes.

### 🔹 Ruby + Cucumber + HTTParty

Execute o seguinte comando para rodar todos os testes BDD:

```bash
bundle exec cucumber
```

---

### 🔹 Cypress

#### 🔹 Modo Interativo

Para abrir o Cypress e executar os testes manualmente, rode:

```bash
npx cypress open
```

- Selecione **E2E Testing** e um navegador de sua escolha.
- Escolha o teste desejado e execute.

#### 🔹 Modo Headless

Para rodar todos os testes automaticamente no terminal, execute:

```bash
npx cypress run
```

---

## 🧪 Cenários de Testes Implementados

### ✅ Teste da API VR (`vr_api.feature` | `api_vr.cy.js`)

- **Objetivo**: Validar se a API VR retorna a chave `"typeOfEstablishment"` e exibir um tipo de estabelecimento aleatório.
- **Endpoint testado**:
  `https://portal.vr.com.br/api-web/comum/enumerations/VRPAT`
- **Fluxo do teste**:
  1. Enviar uma requisição **GET** para a API.
  2. Verificar se a resposta contém a chave `"typeOfEstablishment"`.
  3. Selecionar e exibir aleatoriamente um estabelecimento do retorno.

---

### ✅ Teste da Função de Remoção de Texto (`string_cleaner.feature` | `string_cleaner.cy.js`)

- **Objetivo**: Validar uma função que remove partes de um texto após determinados caracteres.
- **Cenários de Teste**:

#### 🔹 Cenário 1
- **Entrada**: `"bananas, tomates # e ventiladores"`
- **Marcadores**: `["#", "!"]`
- **Saída esperada**: `"bananas, tomates"`

#### 🔹 Cenário 2
- **Entrada**: `"o rato roeu a roupa $ do rei % de roma"`
- **Marcadores**: `["%", "!"]`
- **Saída esperada**: `"o rato roeu a roupa $ do rei"`

#### 🔹 Cenário 3
- **Entrada**: `"the quick brown fox & jumped over * the lazy dog"`
- **Marcadores**: `["&", "*", "%", "!"]`
- **Saída esperada**: `"the quick brown fox"`

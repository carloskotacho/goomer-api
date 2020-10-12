<p align="center">
  <img width="200" alt="logo-softmoney" src="https://user-images.githubusercontent.com/22691244/94601040-435e3080-0269-11eb-952c-209569eca81e.png">
  <br />
  <sub>Em construção<sub>
</p>

<p align="center">
  <a href="https://github.com/carloskotacho/goomer-api/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/carloskotacho/goomer-api?color=%23009ca2&style=flat-square"/>
  </a>

  <a href="https://david-dm.org/carloskotacho/goomer-api">
      <img src="https://img.shields.io/david/peer/carloskotacho/goomer-api?color=%23009ca2&logo=PROD&style=flat-square"/>
  </a>

  <a href="https://david-dm.org/carloskotacho/goomer-api?type=dev">
      <img src="https://img.shields.io/david/dev/carloskotacho/goomer-api?color=%23009ca2&logo=DEV&style=flat-square"/>
  </a>
</p>

<p align="center">
 <a href="#-layout">Layout</a> •
 <a href="#-sobre-o-projeto">Sobre o projeto</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>

## ➤ Layout

O layout da aplicação está disponível no Figma:

<a href="#">
  <img alt="Made by carloshk" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361?style=flat-square&logo=figma">
</a>

## ➤ Sobre o projeto

### Instruções

- **Nome do Projeto:** Goomer Lista Rango
- **Objetivo do Projeto:** Criar uma API RESTful capaz de gerenciar os restaurantes e os produtos do seu cardápio.
- **Tecnologia:** Node.js com banco de dados relacional ou NoSQL.

### Desafio

- A sua API deverá ser capaz de:
    - [x] Listar todos os restaurantes
    - [x] Cadastrar novos restaurantes
    - [x] Listar os dados de um restaurante
    - [x] Alterar os dados um restaurante
    - [x] Excluir um restaurante
    - [x] Listar todos os produtos
    - [x] Listar todos os produtos de um restautante
    - [x] Criar um produto de um restaurante
    - [x] Alterar um produto de um restaurante
    - [x] Excluir um produto de um restaurante

- O cadastro do restaurante precisa ter os seguintes campos:
    - [x] Foto do restaurante
    - [x] Nome do restaurante
    - [x] Endereço do restaurante
    - [x] Horários de funcionamento do restaurante (ex.: De Segunda à Sexta das 09h as 18h e de Sabado à Domingo das 11h as 20h).

- O cadastro de produtos do restaurante precisa ter os seguintes campos:
    - [ ] Foto do produto
    - [x] Nome do produto
    - [x] Preço do produto
    - [x] Categoria do produto (ex.: Doce, Salgados, Sucos...)
    - [x] Quando o Produto for colocado em promoção, precisa ter os seguintes campos:
        - [x] Descrição para a promoção do produto (ex.: Chopp pela metade do preço)
        - [x] Preço promocional
        - [x] Dias da semana e o horário em que o produto deve estar em promoção

##### Formato de horários
- [ ] É necessário tratar os campos que indicam horários de funcionamento e horário para as promoções dos produtos.
- [ ] Os campos devem possuir o formato `HH:mm`.
- [ ] Os horários devem possuir intervalo mínimo de 15 minutos.

### ➤ Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <!--img alt="goomer" title="Login" src="" width="800px"-->
</p>

## ➤ Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) / [Yarn](https://yarnpkg.com/getting-started/install).

#### 🧭 Rodando a aplicação web (Frontend)

1. Renomear o arquivo *.env.example* para *.env*;
2. Criar um database com um nome qualquer *(goomerdb)*
3. Adicionar as credenciais do seu *database* no arquivo *.env*, por exemplo:

```js
DB_HOST=localhost
DB_USER=postgres
DB_PASS=qwerty
DB_NAME=goomerdb
```

```bash

# Clone este repositório
$ git clone git@github.com:carloskotacho/goomer-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd goomer-api

# Instale as dependências
$ yarn

# Rodar migrations
$ yarn sequelize db:migrate

# Rodar seeds
$ yarn sequelize db:seed:all

# Execute a aplicação
$ yarn dev
```

## ➤ Usando

Por fim, teste as requisições abaixo, utilizando algum sistema que teste serviços RESTful *([Insomnia](https://www.postman.com/), [Postman](https://www.postman.com/), etc...)*.

**Restaurante**

| Verbo HTTP | URL | Descrição |
|--|--|--|
| GET | [http://localhost:3333/api/restaurants/v1]() | Listar todos os restaurantes |
| POST | [http://localhost:3333/api/restaurants/v1]() | Cadastrar novos restaurantes |
| GET | [http://localhost:3333/api/restaurants/:id/v1]() | Listar os dados de um restaurante |
| PUT | [http://localhost:3333/api/restaurants/:id/v1]() | Alterar os dados um restaurante |
| DELETE | [http://localhost:3333/api/restaurants/:id/v1]() | Excluir um restaurante |

**Produtos**

| Verbo HTTP | URL | Descrição |
|--|--|--|
| GET | [http://localhost:3333/api/products/v1]() | Listar todos os produtos |
| GET | [http://localhost:3333/api/products/restaurant/:id/v1]() | Listar todos os produtos de um restautante |
| POST | [http://localhost:3333/api/products/v1]() | Criar um produto |

## ➤ Autor

<a href="">
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/22691244/91348568-58532a00-e7ba-11ea-80c0-a71cd2d86481.png" width="100px;" alt=""/>
 <br />
 <sub><b>Carlos Henrique</b></sub></a> <a href="#" title="Carlos">🚀</a>
 <br />

## ➤ Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

by Carlos H. K

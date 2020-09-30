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
    - [ ] Listar todos os restaurantes
    - [ ] Cadastrar novos restaurantes
    - [ ] Listar os dados de um restaurante
    - [ ] Alterar os dados um restaurante
    - [ ] Excluir um restaurante
    - [ ] Listar todos os produtos de um restautante
    - [ ] Criar um produto de um restaurante
    - [ ] Alterar um produto de um restaurante
    - [ ] Excluir um produto de um restaurante

- O cadastro do restaurante precisa ter os seguintes campos:
    - [ ] Foto do restaurante
    - [ ] Nome do restaurante
    - [ ] Endereço do restaurante
    - [ ] Horários de funcionamento do restaurante (ex.: De Segunda à Sexta das 09h as 18h e de Sabado à Domingo das 11h as 20h).
    
- O cadastro de produtos do restaurante precisa ter os seguintes campos:
    - [ ] Foto do produto
    - [ ] Nome do produto
    - [ ] Preço do produto
    - [ ] Categoria do produto (ex.: Doce, Salgados, Sucos...)
    - [ ] Quando o Produto for colocado em promoção, precisa ter os seguintes campos:
        - [ ] Descrição para a promoção do produto (ex.: Chopp pela metade do preço)
        - [ ] Preço promocional
        - [ ] Dias da semana e o horário em que o produto deve estar em promoção

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

```bash

# Clone este repositório
$ git clone git@github.com:carloskotacho/goomer-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd goomer-api

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

## ➤ Autor

<a href="">
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/22691244/91348568-58532a00-e7ba-11ea-80c0-a71cd2d86481.png" width="100px;" alt=""/>
 <br />
 <sub><b>Carlos Henrique</b></sub></a> <a href="#" title="Carlos">🚀</a>
 <br />

## ➤ Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

by Carlos H. K

# DS Movie
Project created at [DevSuperior](https://devsuperior.com "Site da DevSuperior") Spring-React Week 2022.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/daniellegb/dsmovie/blob/main/LICENSE) 

# Sobre o projeto

https://daniellegb-dsmovie.netlify.app/

DS Movie é uma aplicação full stack web construída durante a 8ª edição da **Semana DevSuperior** (#sds8), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação se propõe a exibir e armazenar avaliações de filmes. O usuário acessa o card do filme para realizar a avaliação, insere seu e-mail e uma nota. Os dados são armazenados no banco de dados e a avaliação dos filmes é exibida em formato numérico e gráfico (através do número de estrelas preenchidas).

## Layout web
![Web 1](https://github.com/daniellegb/dsmovie/blob/main/assets/tela.PNG)

## Arquitetura do Backend em camadas

![Web 2](https://github.com/daniellegb/dsmovie/blob/main/assets/padrao-camadas.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/daniellegb/dsmovie/blob/main/assets/dsmovie-dominio.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsmovie

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsmovie

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```


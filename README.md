# API CRUD tasks

## 1. Visão Geral
Contrunstrução de API para CRUD de tarefas usando apenas Node.js

<hr>

## Recursos
Tarefas: Permite gerenciar tarefas, incluindo requisição, criação, atualização, exclusão e atualizção data e horário que a tarefa foi completada
<hr>

## Endpoints
- GET /tasks - Retorna todos as tarefas;
- POST /tasks - Cria um nova tarefa;
- PUT /tasks/:id - Atualiza uma tarefa específica;
- DELETE /tasks/:id - Deleta uma tarefa específica;
- PATCH /tasks/:id/complete - Completa uma tarefa atualizando com a data e hora atual;


<hr>

## Tecnologias
- Node.js;
- Nodemon;
- Uuid;

<hr>

## **Requerimentos**
- Node.js;
- npm ou yarn;

## **Clone do Projeto**
https://github.com/WalkerBrum/api-tasks-node.git

## **Instalação**
```bash
npm install
# or
yarn install
```

## Iniciar Projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

## **Autor e Agradecimento**
Eu Walker Lobato como desenvolvedor do projeto sou grato por poder participar desse desafio promovido pela Rocketseat, pois foi um grande oportunidade para o desenvolvimento das minhas hard skills, aprimorando os meus conhecimentos em construção de Api com Node.js, pois como o projeto foi inscrito sem nenhum framework eu pude entender o funcionamento do Node.js por de trás dos panos.
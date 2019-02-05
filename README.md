# teste-frontend
Repositório usado para o teste de front-end do Núcleo de Tecnologia Multimídia.

## O que?
Relatório que, utilizando dados de uma api, mostre a taxa (média) de ex-alunos do SENAI que continuam estudando por estado e também a taxa nacional.


Abaixo existe um link com um mockup que você pode usar de base, fique a vontade para mudá-lo, podendo usar grafico ao inves de tabelas ou como quiser, iremos levar isso consideração na hora de avaliar.

Para baixar o mockup, [clique aqui](https://github.com/SENAI-NTM/teste-frontend/blob/master/mockup.png).

## Como?
1. Consulta a API/JSON.
2. Pegar resultado e exibir para o usuário de forma usual.

## Público alvo do relatório
Gestores e coordenadores de Educação do SENAI.

## Dados de entrada
1. Consulta a api do teste anterior ou arquivo JSON a seguir, ambos na mesma estrutura abaixo:
```json
{
  "regionals": [
    {"description": "AC", "average": 23.30},
    {"description": "AL", "average": 61.00},
    {"description": "AP", "average": 30.10},
    {"description": "AM", "average": 56.30},
    ...
  ],
  "national": 47.50
}
```
Faça download clicando [aqui](https://github.com/SENAI-NTM/teste-backend/blob/master/data.json).

## Instruções?
1. Você está livre para escolher (ou não) qualquer framework/lib front-end.
2. Adicione a esse README, instruções de como executar a sua solução.
3. Você pode subir o seu código front-end através de um fork desse repositório github ou enviar por tudo email. Lembrando que temos preferência pelo o uso do github e iremos levar isso consideração na hora de avaliar.
4. Você tem uma semana (7 dias) para a finalização do teste, a partir da data de envio do e-mail.
5. Se não conseguir finalizar os testes, não se preocupe, envie a sua solução no estágio de desenvolvimento que estiver.



## instruções para rodar solução

1- baixe o projeto backend e leia o arquivo readme link abaixo.
 
 link: https://github.com/rafaelmedeiroz/teste-backend
 
 Obs: o projeto do teste-frontend só funcionará se o projeto testeBackend estiver rondado em localhost:8080!
 
2- baixe e instale o node.js e o angularCLI conforme link abaixo pois o projeto foi desenvolvido em angularCLI.
    link: https://angular.io/guide/quickstart

3-clone o projeto para uma pasta navegue até a pasta do projeto e entre na pasta do módulo via cmd (mesmo nome do projeto)
e digite ng serve no cmd. Link de lançamento abaixo. 
Link: http://localhost:4200/

por favor clicar no botão Exibir Relatório .
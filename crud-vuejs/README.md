# crud-vuejs

> Um crud com Vue.js e json-server

## Setup

```bash
# global install
npm install -g json-server

git clone https://github.com/danielschmitz/crud-vuejs.git 
cd crud-vuejs

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

Aguarde alguns segundos para a compilação e o início do servidor, então acesse `http://localhost:3000`. 


## API

O arquivo `cervejarias.json` juntamente com o `json-server` fornece a API no servidor que irá responder com as informações necessárias. Exemplos:

### Nomenclatura
```
Nomenclatura (ingles padrão):
Cervejaria: breweries (plural) brewery (singular)
Cerveja: beers (plural) beer )singular
```

### Ações

**cerejarias**
```
GET    /breweries   #Obter todas as cervejarias 
GET    /breweries/1 #Obter cervejaria cujo o id é 1
POST   /breweries #Adiciona uma cervejaria na lista 
PUT    /breweries/1 #Edita a cervejaria cujo id é 1
DELETE /breweries/1 #Deleta a cervejaria cujo id é 1
```

**cervejas**
```
GET    /beer   #Obter todas as cervejas 
GET    /beer/1 #Obter cerveja cujo o id é 1
POST   /beer #Adiciona uma cerveja na lista 
PUT    /beer/1 #Edita a cerveja cujo id é 1
DELETE /beer/1 #Deleta a cerveja cujo id é 1
```
















##Atenção

Essa é uma app de testes, nao use-a em produção

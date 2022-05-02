## Registration of people back-end

Esta aplicação foi criada para testar minha habilidades em Back-End, para um teste da empresa Uppersoft. Nessa aplicação estamos fazendo um CRUD para registrar, ler, atualizar e deletar um usuário que foi cadastrado no banco de dados.

## Ferramentas utilizadas

A aplicação foi toda desenvolvida usando linguagem [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) em [Node.js](https://nodejs.org/en/docs/)
utilizando o [Express](https://expressjs.com/pt-br/).
E o Deploy da aplicação feita na plataforma gratuita de hospedagem [Heroku](https://id.heroku.com/).

## Requisições e End-Points

Todas as requisições devem ser feitas para a URL [https://game-store-14.herokuapp.com/](https://registrationofpeoplebackend.herokuapp.com/users).

#### REGISTRO

O cadastro deve ser feito por um requisição do tipo <strong>POST</strong> para o endpoint <code>/users</code>, contendo as seguintes informações:

```json
{
  "name":"seu nome",
  "cpf": "12345678910",
  "birth_date": "06/06/1984",
  "email": "test@exemplo.com",
  "phone": "27999004868",
  "address": "endereço",
  "city": "cidade",
  "state": "estado"
}
```

Todos os campos são obrigatórios e deve ser informado um email válido para o cadastro ser concluído. Exemplo de erro:

```json
{
  "error": "Validation fails"
}
```

#### LISTAGEM DE USUÁRIOS

Para fazer a listagem de todos os usuários faça uma requisição do tipo <strong>GET</strong> para o endpoint <code>/users</code> e o retorno deve ser um array
com todos os usuários disponíveis do banco, como por exemplo:

```json
[
  {
    "id": 4,
    "name": "matheus",
    "cpf": "14688493748",
    "birth_date": "06/06/1984",
    "email": "test@test487.com",
    "phone": "27999004868",
    "address": "rua",
    "city": "péjuntststto",
    "state": "ES",
    "createdAt": "2022-04-29T03:33:24.000Z",
    "updatedAt": "2022-04-29T03:33:24.000Z"
  },
  {
    "id": 14,
    "name": "proenca",
    "cpf": "14688493749",
    "birth_date": "06/06/1984",
    "email": "test@test457.com",
    "phone": "27999004868",
    "address": "rua",
    "city": "péjuntststto",
    "state": "ES",
    "createdAt": "2022-04-29T04:07:48.000Z",
    "updatedAt": "2022-04-29T04:07:48.000Z"
  }
]
```

#### BUSCAR USUÁRIO PELO ID

Para fazer a busca de um único usuário, deve ser feito uma requisição do tipo <strong>GET</strong> para o endpoint <code>/users/:id</code>, informando o id do usuário.
Tendo o retorno da seguinte forma:

```json
  {
    "id": 4,
    "name": "matheus",
    "cpf": "14688493748",
    "birth_date": "06/06/1984",
    "email": "test@test487.com",
    "phone": "27999004868",
    "address": "rua",
    "city": "péjuntststto",
    "state": "ES",
  }
```
#### ATUALIZANDO DADOS DO USUÁRIO

A atualização deve ser feita por uma requisição do tipo <strong>PUT</strong> para o endpoint <code>/users/:id</code>.
O <code>ID</code> deve ser válido e o usuário existir. O <code>ID</code> do item a ser modificado, exemplo:

```json
{
  "name":"seu nome",
  "cpf": "12345678910",
  "birth_date": "06/06/1984",
  "email": "test@exemplo.com",
  "phone": "27999004868",
  "address": "endereço",
  "city": "cidade",
  "state": "estado"
}
```

#### BUACANDO CIDADE PELO UF

A atualização deve ser feita por uma requisição do tipo <strong>GET</strong> para o endpoint <code>/cities/:uf</code>, Exemplo:

```json
{
	"cities": [
		"Abreu e Lima",
		"Afogados da Ingazeira",
		"Afrânio",
		"Agrestina",
		"Água Preta",
		"Águas Belas",
		"Alagoinha",
		"Aliança",
		"Altinho",
		"Amaraji",
		"Angelim",
		"Araçoiaba",
		"Araripina",
		"Arcoverde",
		"Barra de Guabiraba",
		"Barreiros",
		...
	]
}
```

#### REMOVENDO USUÁRIO

Aplicação permite somente remoção de um usuário por requisição, deve informar um <code>ID</code> válido de um usuário que existe
no database. A requisição deve ser do tipo <strong>DELETE</strong> para o endpoint <code>/users/:id</code>.

## Contato

<a targer="_blank" href="https://www.linkedin.com/in/matheus-proenca-dev/"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/74427703?v=4" width=115><br><sub>Matheus Proença</sub>](https://github.com/mroenca40)

### Contribuições

Caso você queira fazer alguma contribuição, fique a vontade para comentar, fazer pull requests. Toda ajuda para melhorar o código é bem vinda :D!

###

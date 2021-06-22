# NLW - VALORIZA

## Aula 01 - Litoff

**Iniciando projeto**

`$ yarn init -y`

**Instalando dependências iniciais**

`$ yarn add typescript -D` (Para desenvolvimento)

Iniciar o typescript:

`$ yarn tsc --init`

Configurações modificadas no tsconfig.json:

`strict: false`: Propriedade do js que coloca umas checagens no código (já iremos fazer com o typescript)

**Instalando o Express**

`$ yarn add express`

Adicionando as bibliotecas de tipos do express (para desenvolver)

`$ yarn add @types/express -D`

Converter o código ts para js para que o node.js consiga compilar:

`$ yarn add ts-node-dev -D`

**Executar servidor para desenvolvimento**

Configuração:

`"dev": "ts-node-dev src/server.ts"`

Execução

`$ yarn dev`

**Tipos de Métodos**

- GET => Buscar uma informaçãp
- POST => Inserir (Criar) uma informação
- PUT => Alterar uma informação
- DELETE => Remover um dado
- PATCH => Alterar uma informação específica

## Aula 02 - Maximum Speed

**Tipos de Parâmetros**

- Routes Params => http://localhost:3000/produtos/12314 (id do produto como parâmetro na rota):
  - app.get('/produtos/:idProduto', () => {...})
- Query Params => http://localhost:3000/produtos?name=teclado&description=teclado+bom (filtro de alguma informação do produto através da url, não são obrigatórios):
  - app.get('/produtos:name:description')
- Body Params => (Parâmetros que vem no corpo da requisição, são utilizados para POST e PUT)

### Configurando o Banco de Dados - ORM (Object Relations no Mapping)

Através de um código Javascript (classes) será possível comunicar com o banco de dados para sua gestão (criar tabelas, adicionar dados para as colunas...)

**Adicionando o TypeORM e o Reflect Metadata**

`$ yarn add typeorm`

**Adicionando o Reflect Metadata**

Metadata: Decorators (permite a reutilização de código)

`$ yarn add reflect-metadata`

**Adicionando o Banco de Dados (SQLite)**

> Não são usados na produção normalmente, pois ele é mais simples e não suporta um uso mais completo

`$ yarn add sqlite3`

**Configuração do ORM**

[ormconfig.json](https://github.com/FelipePDS/nlw-valoriza/blob/main/ormconfig.json): 

- Indica o tipo de banco de dados => "type"
- Indica onde será criado / onde estará o Banco de Dados => "database"
- Indica onde será criado as migrations (quando executar o comando de criar migration pelo terminal) => "cli": { "migrationsDir" }
- Indica onde será criada as entities das tabelas geradas pelas migrations (quando executar o comando de criar entity pelo terminal) => "cli": { "entitiesDir": "src/entity" }
  - Script de execução da migration: "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
- Indica onde será executadas as migrations (quando executar o comando de executar migration pelo terminal) => "migrations"
- Indica onde está as entities para o typeorm mapear => "entities"

**Criando migration**

`$ yarn typeorm migration:create -n NomeDaTabela`

**Executando migration**

`$ yarn typeorm migration:run` => executa o método up dentro das migrations

Desfazer migration:

`$ yarn typeorm migration:revert` => executa o método down dentro das migrations

**Criando entity**

`$ yarn typeorm entity:create -n NomeDaEntity`

> Para que as entities funcionem é necessário habilitar a opção de "experimentalDecorators" e o "emitDecoratorMetadata" para true dentro do tsconfig.json

> Para desativar a função de indicar os atributos das entities (colunas da tabela referenciada) é necessário habilitar a opção de "strictPropertyInitialization" para false dentro do tsconfig.json

**Adicionando o gerador de UUID**

`$ yarn add uuid`

`$ yarn add @types/uuid -D`

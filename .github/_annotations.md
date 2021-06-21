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

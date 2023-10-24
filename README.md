# Store Manager API

### 💻 Descrição
A Store Manager API é um sistema de gerenciamento de vendas em formato dropshipping com funcionalidades completas, baseado na arquitetura MSC (Model-Service-Controller). Essa API RESTful permite criar, visualizar, atualizar e excluir produtos e vendas, com suporte ao banco de dados MySQL para uma gestão eficiente de dados. Ideal para o desenvolvimento de soluções de gerenciamento de vendas robustas e escaláveis.
<br>

### 💡 Orietações
Este projeto utiliza contêineres Docker para gerenciar o ambiente de desenvolvimento. Isso facilita a configuração do ambiente e garante a consistência entre diferentes sistemas. Certifique-se de ter o Docker instalado em seu sistema antes de prosseguir.
<br>

<details>
<summary> 🐳 Início rápido com Docker</summary><br>

**Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

 Rode os serviços node e db com o comando docker-compose up -d.
<br>

```bash
# em um terminal, inicie os containers
docker-compose up -d

# Use o comando  para acessar o container e executar
 docker exec -it store_manager bash

# Instale as dependências
npm install 

```
**Atenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.**
<br>
</details>

<details>
<summary>🖥️ Início rápido sem Docker</summary><br>

> Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo [`env.example`](./env.example) e o modifique de acordo com a necessidade.


```bash
# em um terminal, inicie a aplicação
npm install
env $(cat .env) npm start

```
- Coloque `env $(cat .env)` antes de qualquer comando que for executar, por exemplo:
</details>

<details>
 <summary>🤗 Minhas Contribuições</summary>
 <br>
 
Neste projeto, minhas contribuições incluem:

- Desenvolvimento do modelo `connection` em `src/models/connection.js` com as propriedades corretas.
- Desenvolvimento do modelo `products` em `src/models/productsModel.js` com as propriedades corretas.
- Desenvolvimento do modelo `sales` em `src/models/salesModel.js` com as propriedades corretas.
 
 - Implementação dos endpoints da API:
   1. `GET /products` para recuperar informações dos produtos.
   2. `GET /products/:id` para recuperar apenas o produto com o id presente na URL que será retornado.
   3. `POST /products` para cadastrar produtos.
   4. `PUT //products/:id` para atualizar um produto.
   5. `DELETE /products/:id` para deletar produtos por id.
   6. `GET /sales` para recuperar as vendas.
   7. `GET /sales/:id` para recuperar as vendas pelo id.
   8. `DELETE /sales/:id` para deletar a venda pelo id.
   
- Implementação de testes de cobertura nas camadas `models`, `services` e `controllers` em `src/tests/unit`.

Essas contribuições representam minha parcela de trabalho neste projeto. Obrigada por conferir o projeto!
   
 </details>

### 🙋‍♀️  Autor

- [@helmatrindade](https://github.com/helmatrindade)

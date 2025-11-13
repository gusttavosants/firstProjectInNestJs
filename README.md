# 🛍️ Aplicação Backend para Lojas

API desenvolvida em **Node.js** utilizando o **framework NestJS** e **banco de dados MySQL**, com o objetivo de fornecer um sistema completo de **CRUD** para gerenciamento de **funcionários (employees)**, **clientes (customers)** e **produtos (products)**.

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js escalável e modular  
- [TypeORM](https://typeorm.io/) — ORM para integração com MySQL  
- [MySQL](https://www.mysql.com/) — Banco de dados relacional  
- [Docker](https://www.docker.com/) — Containerização para fácil deploy  
- [Jest](https://jestjs.io/) — Framework de testes  
- [TypeScript](https://www.typescriptlang.org/) — Tipagem e segurança no código

---

## 📁 Estrutura de Pastas

src/
├── app.module.ts
├── main.ts
│
├── employee/
│ ├── employee.controller.ts
│ ├── employee.service.ts
│ ├── employee.module.ts
│ └── entities/
│ └── employee.entity.ts
│
├── customers/
│ ├── customers.controller.ts
│ ├── customers.service.ts
│ ├── customers.module.ts
│ └── entities/
│ └── customer.entity.ts
│
└── products/
├── products.controller.ts
├── products.service.ts
├── products.module.ts
└── entities/
└── product.entity.ts

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone [https://github.com/seuusuario/aplicacao-backend-lojas.git](https://github.com/gusttavosants/AplicacaoBackend)
cd AplicacaoBackend

###2️⃣ Instalar as dependências

npm install

###3️⃣Configurar variáveis de ambiente

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=
DATABASE_NAME="curso"

###4️⃣ Executar a aplicação
npm run start:dev

###🧩 Endpoints Principais
Employee --	GET	/employee/findall	Lista todos os funcionários
Employee -- GET	/employee/findall/:id	Busca funcionário por ID
Employee --	POST	/employee/add	Cria um novo funcionário
Employee --	PUT	/employee/update/:id	Atualiza funcionário
Employee --	DELETE	/employee/:id	Remove funcionário

Customers -- GET	/customers/findall	Lista todos os clientes
Customers -- GET	/customers/findall/:id	Busca cliente por ID
Customers -- POST	/customers/add	Cria um novo cliente
Customers -- PUT	/customers/update/:id	Atualiza cliente existente
Customers -- DELETE	/customers/:id	Remove cliente

Products -- GET	/products/findall	Lista todos os produtos
Products -- GET	/products/findall/:id	Busca produto por ID
Products -- POST	/products/add	Cria um novo produto
Products -- PUT	/products/update/:id	Atualiza produto existente
Products -- DELETE	/products/:id	Remove produto


###👨‍💻 Autor

Gustavo Santos
📧 gustavoluizsantosmelo@gmail.com

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

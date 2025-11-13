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





<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

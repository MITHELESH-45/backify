# Backify 🚀

## The production-ready backend generator.

Backify eliminates hours of repetitive setup by scaffolding industry-standard backend architectures instantly. It gives you a clean Express starter with shared database wiring, authentication boilerplate, validation setup, and modern ES Module support.

## Why Backify?

Backify removes the pain of repetitive backend scaffolding by generating a fully opinionated starter with best-practice architecture and sensible defaults. Choose the structure you need, inject only the database stack you selected, and get a secure, ready-to-run backend in minutes.

## Features

- ✅ Choice of `MVC` or `Service-Repository` architecture
- ✅ Smart Injection: only installs what you need for PostgreSQL/Prisma or MongoDB/Mongoose
- ✅ Security-first: pre-configured JWT Authentication and Zod Validation
- ✅ Modern JS: ES Modules support and environment configuration out of the box
- ✅ CORS enabled automatically in generated startup code

## Quick Start

```bash
npx create-backify
```

## Project Structure

Example Service-Repository project layout:

```text
my-backend-app/
├─ .env.example
├─ package.json
└─ src/
   ├─ config/
   │  └─ db.js
   ├─ controllers/
   │  └─ userController.js
   ├─ middleware/
   │  ├─ auth.js
   │  └─ validate.js
   ├─ repositories/
   │  └─ userRepository.js
   ├─ routes/
   │  └─ userRoutes.js
   ├─ services/
   │  └─ userService.js
   └─ index.js
```

## Supported Stack

- ✅ Express (available now)
- 🚧 FastAPI (coming soon)
- 🚧 Spring Boot (coming soon)

## Notes

- The generated server now loads `dotenv` automatically.
- CORS is enabled by default on startup.
- For PostgreSQL, the generated template uses Prisma and will connect when a valid `DATABASE_URL` is provided.
- For MongoDB, the generated template uses Mongoose and will connect when a valid `DATABASE_URL` is provided.
- Make sure to set `JWT_SECRET` in your `.env` if you enable authentication.

## Next Steps

After scaffolding a new project, run:

```bash
cd my-backend-app
npm install
npm start
```

If you want, I can also add a README template directly into generated scaffolded projects so every new app ships with its own project-specific documentation.
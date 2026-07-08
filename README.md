# Backify 🚀

[![npm version](https://img.shields.io/npm/v/create-backify.svg)](https://www.npmjs.com/package/create-backify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/create-backify.svg)](https://www.npmjs.com/package/create-backify)
[![Build Status](https://github.com/your-username/backify/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/backify/actions/workflows/ci.yml)

> **The production-ready backend generator.**

Backify eliminates hours of repetitive setup by scaffolding industry-standard backend architectures instantly. It gives you a clean Express starter with shared database wiring, authentication boilerplate, validation setup, and modern ES Module support.

## 🎯 Why Backify?

Building a robust backend from scratch takes time. Backify removes the pain of repetitive scaffolding by generating a fully opinionated starter with best-practice architecture and sensible defaults. Choose the structure you need, inject only the database stack you selected, and get a secure, ready-to-run backend in minutes.

## ✨ Features

- ✅ **Choice of Architecture**: Select between `MVC` or `Service-Repository` pattern.
- ✅ **Smart Injection**: Only installs what you need for PostgreSQL/Prisma or MongoDB/Mongoose.
- ✅ **Security-First**: Pre-configured JWT Authentication and Zod Validation.
- ✅ **Modern JS**: ES Modules support and environment configuration out of the box.
- ✅ **CORS Enabled**: Automatically configured in the generated startup code.

## 📦 Installation & Usage

You can run Backify directly using `npx` without installing it globally:

```bash
npx create-backify
```

The interactive CLI will guide you through:
1. Project Name
2. Preferred Architecture (MVC / Service-Repository)
3. Database Stack (PostgreSQL / MongoDB)
4. Optional Add-ons (Authentication, Validation)

### CLI Walkthrough

When you run `npx create-backify`, you'll see:

```text
──────────────────────────────
   Welcome to Backify CLI
──────────────────────────────

? What is your project named? my-backend-app
? Which architecture do you prefer? Service-Repository
? Which database stack? PostgreSQL (with Prisma)
? Enable JWT Authentication? Yes
```

## 🏗️ Architecture Choices

### Service-Repository Example Layout

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

## 📸 Screenshots

*(Placeholder for future CLI screenshots or generated architecture diagrams)*

## 🛣️ Roadmap

We have exciting plans for Backify! Check out our [ROADMAP.md](ROADMAP.md) for details on upcoming features, including FastAPI, Spring Boot, and TypeScript support.

## ❓ FAQ

**Q: Do I need to manually configure my database connection?**
A: For PostgreSQL, the template uses Prisma and connects when a valid `DATABASE_URL` is provided. For MongoDB, it uses Mongoose and connects similarly. Make sure to update your `.env` file!

**Q: How do I enable authentication?**
A: Select the JWT Authentication option during the setup. Make sure to set `JWT_SECRET` in your `.env` file.

## 🤝 Contributing

Contributions make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please check out our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for details on how to get started.

## 💬 Support

If you need help or have a question, please refer to our [Support Guide](SUPPORT.md).

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">
  <p>Made with ❤️ by MITHELESH K</p>
</div>
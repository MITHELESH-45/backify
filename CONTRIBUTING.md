# Contributing to Backify

First off, thank you for considering contributing to Backify! 🎉 
It's people like you that make Backify such a great tool for developers everywhere.

## Project Overview

Backify is a CLI tool designed to scaffold production-ready backend projects in minutes. It focuses on clean architecture, sensible defaults, and eliminating repetitive setup tasks. Our goal is to provide developers with a rock-solid foundation so they can focus on writing business logic.

## First-Time Contributors

If you are a first-time contributor, welcome! We recommend checking out issues labeled `good first issue` or `help wanted`. Don't hesitate to ask questions on the issue thread—we're here to help you get your first PR merged.

## Prerequisites

To contribute to Backify, you will need:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn` installed

## Local Development Setup

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/backify.git
   cd backify
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the CLI Locally

To test your changes locally, you can link the package to your global `node_modules`:

```bash
npm link
```

Now you can run `create-backify` anywhere on your machine to test the scaffolding generator! Once you are done testing, you can run `npm unlink` in the project directory.

Alternatively, you can run it directly:
```bash
node bin/index.js
```

## Coding Standards

- **ES Modules**: This project uses ES Modules (`import`/`export`).
- **Formatting**: We use EditorConfig to maintain consistent coding styles. Please ensure your editor respects `.editorconfig` rules.
- **Linting**: If `eslint` is configured, please ensure `npm run lint` passes before committing.
- **Keep it Simple**: Try not to over-engineer solutions. Backify is a scaffolding tool; the templates should be clean, understandable, and production-ready.

## Commit Message Guidelines

We prefer clear, descriptive commit messages. A good format to follow is [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks
- `refactor:` for code refactoring

Example: `feat: add support for Spring Boot template`

## Branch Naming Conventions

Create a new branch for each feature or fix you work on.
Use a descriptive name, like:
- `feature/add-docker-support`
- `fix/typo-in-readme`
- `docs/update-contributing`

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, if applicable.
3. The PR should include a clear description of **what** changed and **why**.
4. Link the PR to any relevant issues (e.g., "Closes #123").
5. Wait for a maintainer to review your PR. We might request some changes.
6. Once approved, a maintainer will merge it.

## Issue Reporting Guidelines

- Check if the issue already exists.
- Use the provided [Issue Templates](../.github/ISSUE_TEMPLATE) to report bugs or request features.
- Provide as much context as possible (OS, Node version, steps to reproduce).

## Code Review Expectations

- Be respectful and constructive during reviews.
- Both reviewers and authors should aim for clear communication.
- We focus on the code, not the person.

## Community Etiquette

Please read and abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a friendly, safe, and welcoming environment for all.

Once again, thank you for contributing! Let's build something awesome together.

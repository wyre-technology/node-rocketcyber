# Contributing to @wyre-technology/node-rocketcyber

Thank you for your interest in contributing to the RocketCyber TypeScript SDK. This guide will help you get started.

## Prerequisites

- **Node.js** 18 or later
- **git**

## Development Setup

1. Clone the repository:

```bash
git clone git@github.com:wyre-technology/node-rocketcyber.git
cd node-rocketcyber
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Run tests:

```bash
npm test
```

## Project Structure

```
node-rocketcyber/
  src/
    client.ts          # Main client class (composition root)
    http.ts            # HTTP request layer
    auth.ts            # Bearer token authentication
    config.ts          # Configuration types and defaults
    errors.ts          # Custom error classes
    rate-limiter.ts    # Rate limiting logic
    index.ts           # Public API exports
    resources/         # One file per API resource
      account.ts
      agents.ts
      apps.ts
      defender.ts
      events.ts
      firewalls.ts
      incidents.ts
      office.ts
    types/             # TypeScript type definitions
      account.ts
      agents.ts
      apps.ts
      common.ts
      defender.ts
      events.ts
      firewalls.ts
      incidents.ts
      index.ts
      office.ts
  tests/               # Test files (vitest + MSW)
  dist/                # Build output (CJS + ESM)
  tsconfig.json
  tsup.config.ts
  vitest.config.ts
```

## How to Add Features or Fix Bugs

1. Create a feature branch from `main`:

```bash
git checkout -b feat/my-feature
```

2. Make your changes in the `src/` directory.

3. Add or update types in `src/types/` as needed.

4. Add tests for your changes in `tests/`.

5. Ensure everything passes:

```bash
npm run build
npm run typecheck
npm test
```

6. Commit and push your branch.

## Testing

This project uses **vitest** as the test runner and **MSW** (Mock Service Worker) for HTTP mocking.

- Run all tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Run tests with coverage: `npm run test:coverage`
- Aim for at least **80% code coverage** on new code

## Pull Request Process

1. Ensure all tests pass and the build succeeds.
2. Use **Conventional Commits** for your commit messages:
   - `feat:` -- a new feature
   - `fix:` -- a bug fix
   - `docs:` -- documentation changes
   - `test:` -- adding or updating tests
   - `refactor:` -- code changes that neither fix a bug nor add a feature
   - `chore:` -- maintenance tasks
3. Open a pull request against `main`.
4. Describe what your PR does and why.
5. PRs require review before merging.

## Code Style

- **TypeScript strict mode** -- all code must pass `tsc --noEmit`
- **ES modules** -- use `import`/`export` syntax
- **Zero runtime dependencies** -- only native `fetch` for HTTP
- **Async/await** -- prefer over raw Promise chains
- **Const/let** -- no `var`
- **JSDoc comments** for public API methods

## Questions?

Open an issue on [GitHub](https://github.com/wyre-technology/node-rocketcyber/issues).

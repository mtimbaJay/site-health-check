# Site Health Check

A lightweight Next.js web tool that checks website health, performance, and basic SEO signals.

## Features

- Ping a URL and report HTTP status
- Basic performance and SEO hints (planned)
- Lightweight Next.js frontend

## Tech stack

- Next.js 14
- React 18
- TypeScript (project contains TypeScript env)

## Repository contents

- app/ - Next.js app source (pages / app router)
- components/ - UI components
- lib/ - utility libraries and helpers
- next-env.d.ts - Next TypeScript environment declarations
- next.config.js - Next.js configuration
- package.json - project metadata and scripts
- LICENSE - MIT license

## Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

## Install

1. Clone the repo:

   git clone https://github.com/mtimbaJay/site-health-check.git
   cd site-health-check

2. Install dependencies:

   npm install

## Run locally

- Development server:

  npm run dev

- Build:

  npm run build

- Start production server:

  npm run start


## Development notes

- This repository currently contains the scaffold of a Next.js app. Implement checks, pages and API routes under `app/`, `components/` and `lib/`.
- Use the app router (Next.js 14) /app or pages depending on the existing code in `app/`.

## Suggested next steps (remaining work)

- Implement server-side checks (API route) that fetch the target URL, measure response time and extract basic SEO signals (title, description, status code).
- Add UI to show results and history.
- Add tests and linting.
- Add GitHub Actions workflow for CI (lint & build).

## Known issues / Open issues

- There are currently no open GitHub issues in the repository. (open_issues_count: 0)

## Contributing

Contributions are welcome. Please open issues or pull requests. If you plan to make changes:

1. Fork the repository
2. Create a branch for your feature/fix
3. Make changes and run the app locally
4. Open a pull request describing your changes

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

Created by @mtimbaJay

# Node.js Codespace Template

A GitHub Codespace template for quickly setting up Node.js development environments with modern tooling.

## Features

- **Node.js 22**: Latest LTS version of Node.js
- **pnpm**: Fast, disk space efficient package manager
- **T3 Stack Integration**: Quick setup script for creating T3 apps
- **Dev Container**: Pre-configured development environment

## Quick Start

### Using GitHub Codespaces

1. Click "Use this template" or fork this repository
2. Open in GitHub Codespaces
3. The environment will automatically set up with Node.js 22 and pnpm

### Initialize a T3 App

Run the initialization script to create a new T3 app:

```bash
./scripts/init-app.sh
```

This script will:
- Create a new T3 app using the latest template
- Remove the nested `.git` directory
- Copy all files to the root directory
- Clean up temporary files

## What's Included

### Development Environment
- **Node.js 22**: Latest LTS version with modern JavaScript features
- **pnpm**: Efficient package manager pre-installed globally
- **Dev Container**: Consistent development environment across all machines

### T3 Stack
The initialization script sets up a full-stack TypeScript application with:
- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **tRPC**: End-to-end typesafe APIs
- **Prisma**: Next-generation ORM
- **NextAuth.js**: Authentication for Next.js

## Directory Structure

```
.
├── .devcontainer/          # Dev container configuration
│   └── devcontainer.json   # Container settings and setup
├── scripts/                # Utility scripts
│   └── init-app.sh        # T3 app initialization script
└── README.md              # This file
```

## Usage

### Starting Fresh
If you want to create a new T3 app, simply run:
```bash
./scripts/init-app.sh
```

### Manual Setup
If you prefer to set up your project manually:
```bash
# Install pnpm (if not already available)
npm install -g pnpm

# Create your preferred project structure
pnpm create next-app@latest my-app
# or
pnpm create vite@latest my-app
# or any other Node.js project
```

## Customization

### Modifying the Dev Container
Edit `.devcontainer/devcontainer.json` to:
- Change Node.js version
- Add additional tools or extensions
- Modify post-creation commands

### Updating the Init Script
Modify `scripts/init-app.sh` to:
- Use different project templates
- Add custom setup steps
- Install additional dependencies

## Requirements

- GitHub account (for Codespaces)
- Or Docker (for local dev container usage)

## Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This template is available under the MIT License. See individual project licenses for generated applications.

---

**Happy coding!** 🚀

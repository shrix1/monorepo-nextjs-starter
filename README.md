# Monorepo-nextjs-starter

A modern web application built with Next.js, React 19, and a comprehensive UI component library.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with Turbopack
- **UI Library**: Custom UI components built with [Radix UI](https://www.radix-ui.com/) primitives
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Monorepo Tool**: [Turborepo](https://turbo.build/)
- **Code Format + Linting**: [Biome](https://biomejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

This project is organized as a monorepo using Turborepo, with the following structure:

```
monorepo-nextjs-starter/
├── apps/
│   └── web/               # Next.js web application
├── packages/
│   ├── ui/                # Shared UI component library
│   ├── tailwind-config/   # Shared Tailwind configuration
│   └── typescript-config/ # Shared TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd monorepo-nextjs-starter

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

This will start the Next.js development server with Turbopack. Visit http://localhost:3000 to see the application.

### Building for Production

```bash
# Build all packages and applications
pnpm build
```

### Linting

```bash
# Run linting across all packages and applications
pnpm lint
```

### Type Checking

```bash
# Run type checking across all packages and applications
pnpm check-types
```

## UI Component Library

The project includes a comprehensive UI component library built with Radix UI primitives and styled with Tailwind CSS. The component library is located in the `packages/ui` directory and includes the following components:

- Accordion
- Alert
- Alert Dialog
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Checkbox
- Command
- Dialog
- Dropdown Menu
- Input
- Label
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- Tooltip
- and more...

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/)
- [shadcn/ui](https://ui.shadcn.com/) (inspiration for the UI component library)

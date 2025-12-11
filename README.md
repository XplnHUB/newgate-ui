# Newgate UI

> The official documentation and landing page for **[Newgate](https://github.com/newgatejs/newgate)** — the multi-format backend framework.

This repository contains the source code for the documentation website, built with **Astro**, **React**, and **Tailwind CSS**. It features a modern, "Neon Industrial" aesthetic designed to appeal to backend developers and API engineers.

## 🎨 Features

-   **Modern Aesthetics**: "Neon Industrial" theme with dark mode, high-contrast neon accents, and glassmorphism.
-   **Interactive Demos**: Live multi-format parsing demos (JSON, CSV, XML, Binary) using Framer Motion.
-   **Comprehensive Docs**: Structured documentation layout with sticky sidebars and table of contents.
-   **Responsive Design**: Mobile-first approach ensuring a great experience on all devices.
-   **Type-Safe**: Built with TypeScript for robustness and maintainability.

## 🛠️ Tech Stack

-   **Framework**: [Astro](https://astro.build/)
-   **UI Library**: [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Fonts**: Space Grotesk (Headings), Inter/Satoshi (Body), JetBrains Mono (Code)

## 🚀 Getting Started

### Prerequisites

-   Node.js v18.0.0 or higher
-   npm (or pnpm/yarn)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/newgatejs/newgate-ui.git
    cd newgate-ui
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
/
├── public/           # Static assets (fonts, icons, etc.)
├── src/
│   ├── components/   # Reusable UI components (React & Astro)
│   ├── layouts/      # Page layouts (Layout.astro)
│   ├── pages/        # Astro pages (file-based routing)
│   ├── styles/       # Global styles and Tailwind directives
│   └── env.d.ts      # TypeScript environment definitions
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json      # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the simple [MIT License](LICENSE).

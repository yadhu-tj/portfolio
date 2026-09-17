# Yadhu T.J. — Creative Portfolio

A cinematic, interactive portfolio website built with React and Vite. The experience combines smooth scrolling, animated sections, a custom cursor, film-grain styling, and a dark visual language to present selected work, personal information, and contact details.

## ✨ Highlights

- Full-screen hero section with animated entrance experience
- Project gallery for showcasing creative work
- About section for personal and professional information
- Contact section for enquiries and collaboration
- Smooth scrolling powered by Lenis
- Motion and transitions powered by GSAP
- Custom animated cursor for desktop users
- Preloader for a polished first impression
- Responsive layout styled with Tailwind CSS
- Dark, editorial visual design with film-grain texture
- ESLint configuration for maintaining code quality

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — development server and build tool
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [GSAP](https://gsap.com/) — animation library
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling
- [React Icons](https://react-icons.github.io/react-icons/) — icon library

## 📁 Project Structure

```text
.
├── public/                 # Public static assets
├── src/
│   ├── assets/             # Images and other imported assets
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   └── Preloader.jsx
│   ├── hooks/
│   │   └── useSmoothScroll.jsx
│   ├── App.jsx             # Main application composition
│   ├── Demo.jsx
│   ├── index.css           # Tailwind styles and global visual styles
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or another compatible package manager

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yadhu-tj/portfolio.git
cd portfolio
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

## 🧩 Customization

To make the portfolio your own:

1. Update the content in `src/components/Hero.jsx`, `About.jsx`, `Gallery.jsx`, and `Contact.jsx`.
2. Replace or add images in `src/assets/` and `public/`.
3. Adjust colors, typography, spacing, and global effects in `src/index.css` and `tailwind.config.js`.
4. Update the page title, favicon, and metadata in `index.html`.
5. Run the linter and production build before deploying:

```bash
npm run lint
npm run build
```

## 🌐 Deployment

The generated files in `dist/` can be deployed to any static hosting provider, including:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Most platforms can deploy directly from the repository using the following settings:

```text
Build command: npm run build
Output directory: dist
```

## 📄 License

No license has been specified for this repository yet. If you plan to reuse, modify, or distribute the project, add a license file with the terms you want to apply.

## 👤 Author

**Yadhu T.J.**

- GitHub: [@yadhu-tj](https://github.com/yadhu-tj)

If you like the project, consider giving it a ⭐ on GitHub.

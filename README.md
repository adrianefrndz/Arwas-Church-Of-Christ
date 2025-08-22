# Church Website

A modern, responsive church website built with Vite, React, TypeScript, HTML, and CSS.

## Features

- Responsive design for all devices
- Aesthetic and modern UI
- Homepage, About, Events, Gallery, and Contact sections
- Navigation bar and footer
- Contact form with feedback
- Photo gallery (replace placeholder images with real ones)
- Easy to customize

## Getting Started

1. **Install dependencies:**

```sh
npm install
```

2. **Run the development server:**

```sh
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Update `ChurchName` and address in `Navbar.tsx` and `Footer.tsx`.
- Replace placeholder images in `Gallery.tsx` with real church photos.
- Add or edit events in `Events.tsx`.

## Folder Structure

- `src/components/` – All main UI components
- `src/App.tsx` – Main app layout
- `src/App.css` – Global and component CSS imports

## License

MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

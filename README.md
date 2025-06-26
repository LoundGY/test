# User Directory (Angular 20)

This is the ready‑to‑copy **`src/`** folder for the homework assignment.

### Usage

1. Create a fresh Angular 20 workspace:

```bash
ng new user-directory --standalone --routing --style=scss
cd user-directory
```

2. Install extra dependencies:

```bash
npm i -D tailwindcss postcss autoprefixer
ng add @angular/material@20 --theme tailwind
```

3. Drop the contents of this archive into the project root (it will replace `src/`).

4. Tailwind config and postcss config are included. Ensure `src/styles.scss` is first in the `angular.json` styles array.

5. Run:

```bash
npm start
```

### Testing

If you also install Vitest & Angular Testing Library, copy the `tests/` folder from the guide and run:

```bash
npx vitest run
```

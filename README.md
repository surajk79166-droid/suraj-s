# Omvexa Digital

A responsive portfolio website for Omvexa Digital, built with React, Vite, JavaScript, and CSS.

## Run the website

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open this project folder in a terminal.
3. Install the project packages:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

The development server updates the page when you save a change.

## Edit the website

- **Page content and services:** edit `src/App.jsx`. The service list and skill list are near the top of the file.
- **Colors and type:** edit the CSS variables in `src/index.css`.
- **Layout and responsive styling:** edit `src/App.css`. The smaller-screen styles are in the media queries near the bottom.
- **Browser title and search description:** edit `index.html`.
- **Browser tab icon:** replace `public/favicon.svg`.

The contact form currently copies the visitor's project brief to their clipboard. It does not send or store messages. Connect a trusted form service or add a backend before using the website to receive enquiries. Do not put private API keys or passwords in frontend code.

## Test a production build

```bash
npm run build
```

Vite creates the production files in `dist/`. To preview that build locally, run:

```bash
npm run preview
```

## Upload to GitHub

1. Create an empty repository on GitHub. Do not add a README there if you are using this existing one.
2. In this project folder, run the commands below, replacing the URL with your repository URL:

   ```bash
   git init
   git add .
   git commit -m "Build Omvexa Digital portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

Review the files before pushing. The `.gitignore` excludes dependencies, build output, and environment files.

## Deploy with Vercel

Import the GitHub repository in Vercel and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

No deployment or repository is configured by this project.

# Sunday Ready

Sunday Ready is an interview preparation tracker for organizing practice questions and monitoring progress. The current app is a client-side React application: accounts and saved records are stored in the browser using localStorage, with Redux Toolkit managing app state.

## Contents

- [Features](#features)
- [Technology](#technology)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [App routes](#app-routes)
- [Project structure](#project-structure)
- [How data is stored](#how-data-is-stored)
- [Current limitations](#current-limitations)

## Features

- **Account registration and sign-in:** Create an account, sign in, keep the current user signed in on the device, and sign out. Passwords are stored as salted PBKDF2 hashes, not plaintext.
- **Protected routes:** The dashboard and app workspace require a signed-in account. Signed-in users are redirected away from login and registration.
- **Question tracker:** Add interview questions with a category, difficulty, readiness status, reference link, and notes. Search and filter saved questions, and delete a question.
- **Dashboard:** View totals by question status, completion progress, and recently added questions based on tracker data.
- **Interview drive library:** Add resource links, search saved drives, and assign each new drive the next sequential week.
- **Upcoming feature pages:** DSA, Full-Stack, Git, and Machine Coding pages currently show a shared “Upcoming” experience. Their earlier feature code remains in the project but is not currently displayed by those routes.
- **Responsive interface:** Built with Tailwind CSS, including a fixed desktop navigation sidebar and a scrollable app content area.

## Technology

- React 19
- Vite
- React Router
- Redux Toolkit and React Redux
- React Hook Form
- Tailwind CSS 4
- Lucide icons
- React Hot Toast

## Requirements

- Node.js 20.19+ or 22.12+
- npm

Check your installed versions:

```bash
node --version
npm --version
```

## Getting started

Open a terminal in the project directory (the directory containing `package.json`), then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite prints the local URL, usually <http://localhost:5173>. Open it in a browser, register an account, then use the dashboard and question tracker.

To stop the development server, press `Ctrl+C` in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally (run `npm run build` first). |
| `npm run lint` | Run ESLint across the project. |

## App routes

| Route | Purpose |
| --- | --- |
| `/` | Sign-in page |
| `/register` | Create an account |
| `/dashboard` | Preparation progress and recent tracker activity |
| `/questions` | Search, filter, and manage tracked questions |
| `/questions/add` | Add a question |
| `/drives` | Interview resource library |
| `/drives/add` | Add a drive resource |
| `/dsa`, `/dsa/add` | Upcoming DSA pages |
| `/fullstack`, `/fullstack/add` | Upcoming Full-Stack pages |
| `/git`, `/git/add` | Upcoming Git pages |
| `/machine-coding`, `/machine-coding/add` | Upcoming Machine Coding pages |

Workspace routes require authentication.

## Project structure

```text
src/
  app/
    layouts/             Public and authenticated app layouts
    store.jsx            Redux store configuration
  features/
    auth/
      hooks/             Login, registration, and session logic
      states/            Authentication Redux slice
      ui/                Login and registration pages
    tracker/
      hooks/             Question persistence and dashboard data
      states/            Question Redux slice
      ui/
        components/      Dashboard and question tracker UI
        pages/           Dashboard, question list, and add form
    drives/
      hooks/             Drive persistence, automatic week, and search
      states/            Drive Redux slice
      ui/                Drive list and add form
    dsa/                 DSA hooks, state, and currently unrouted UI
    fullstack/           Full-Stack feature UI
    git/                 Git feature UI
    projects/             Machine Coding feature UI
  routes/
    secure/              Public and protected route guards
    AppRoutes.jsx        Application route definitions
  shared/
    ui/components/       Shared UI, including the Upcoming feature page
  main.jsx               React entry point and Redux Provider
  index.css              Global styles and theme variables
```

Feature code is organized by domain. Hooks contain state and behavior, Redux slices define feature state, and UI components render the interface.

## How data is stored

This prototype does not require a backend or environment variables. Its current records are kept in the browser's localStorage:

| localStorage key | Data |
| --- | --- |
| `sunday-ready-users` | Registered user records, including password salt and hash |
| `sunday-ready-current-user` | The signed-in user's public profile when “Keep me signed in” is selected |
| `tracker-questions` | Question tracker entries |
| `interview-drives` | Interview drive resource entries |

Data is browser- and origin-specific. Clearing site data removes these records. Using a different browser or device does not share data.

## Current limitations

- LocalStorage authentication is for prototyping only. It does not provide server-side identity verification, secure session management, password reset, or cross-device accounts.
- The app's feature data is local to the current browser.
- The DSA, Full-Stack, Git, and Machine Coding routes display the shared Upcoming page. Their feature interfaces are not presently reachable through those routes.
- Interview drive URLs are saved as links; no Google Drive API connection or synchronization is implemented.

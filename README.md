# Personal Portfolio

My personal developer portfolio — a single-page site built with **React + Vite** on the frontend and a **Flask** REST API on the backend.

The site introduces who I am, showcases selected projects, lists the technologies I work with, and provides ways to get in touch.

> Built by **Ritam Naskar** — interested in backend engineering, Python, and building practical digital experiences.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [License](#license)

---

## Tech Stack

### Frontend
- [React](https://react.dev/) — component-based UI
- [Vite](https://vitejs.dev/) — fast dev server and bundler
- [lucide-react](https://lucide.dev/) — icon set
- Vanilla CSS (`src/styles.css`) with custom properties, gradients, and a dark theme

### Backend
- [Flask](https://flask.palletsprojects.com/) — lightweight Python web framework
- [flask-cors](https://flask-cors.readthedocs.io/) — cross-origin resource sharing
- [python-dotenv](https://pypi.org/project/python-dotenv/) — environment variable management

---

## Project Structure

```
Personal_Protfolio/
├── backend/
│   ├── app.py               # Flask application & API routes
│   ├── requirements.txt     # Python dependencies
│   ├── .gitignore
│   └── .venv/               # virtual environment (not tracked)
├── img/
│   └── image.png            # profile image used in the hero section
├── src/
│   ├── main.jsx             # React entry point & App component
│   └── styles.css           # Global styles / theme
├── index.html               # Vite HTML entry
├── package.json             # Frontend dependencies & scripts
├── package-lock.json
├── .gitignore
└── README.md
```

The app is organized around a single `App` component in `src/main.jsx`, which contains the following sections:

- **Hero** — introduction, availability status, and social links
- **About** — a short "curious mind, builder's mindset" blurb
- **Projects** — a data-driven grid of project cards
- **Skills** — the list of technologies I work with
- **Contact** — call to action and email link
- **Footer** — brand and back-to-top link

Projects and skills are defined as plain arrays inside `src/main.jsx`, so adding new entries is just a matter of appending an object or a string.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer) and npm
- [Python](https://www.python.org/) (3.10 or newer) and pip

### Frontend Setup

From the project root:

```bash
# install dependencies
npm install

# start the Vite dev server
npm run dev
```

The dev server runs on the URL printed in the terminal (typically `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

### Backend Setup

The backend is optional for viewing the portfolio — the frontend is fully static. Run it if you want the API available.

```bash
cd backend

# create and activate a virtual environment
python -m venv .venv

# Windows (PowerShell)
.venv\Scripts\Activate.ps1

# macOS / Linux
source .venv/bin/activate

# install dependencies
pip install -r requirements.txt

# run the server
python app.py
```

The Flask server runs at `http://localhost:5000` with debug mode enabled.

> If you keep secrets or configuration in a `.env` file, place it in the `backend/` directory. It is already ignored by git. `python-dotenv` loads it automatically on startup.

---

## Available Scripts

### Frontend (`package.json`)

| Script            | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the Vite development server with HMR |
| `npm run build`   | Build the production bundle into `dist/`   |
| `npm run preview` | Preview the production build locally       |

### Backend

| Command                 | Description                        |
| ----------------------- | ---------------------------------- |
| `python backend/app.py` | Start the Flask development server |

---

## API Endpoints

| Method | Endpoint      | Description                          | Sample Response                                                |
| ------ | ------------- | ------------------------------------ | -------------------------------------------------------------- |
| `GET`  | `/`           | Root check                           | `{ "message": "ok", "status": "Success" }`                     |
| `GET`  | `/api/health` | Health check for the backend service | `{ "status": "healthy", "service": "running backend service" }` |

Example:

```bash
curl http://localhost:5000/api/health
```

---

## Customization

- **Profile image** — replace `img/image.png` with your own photo (keep the filename or update the `src` in the `Avatar` component in `src/main.jsx`).
- **Projects** — edit the `projects` array in `src/main.jsx`. Each entry supports `number`, `name`, `category`, `iconClass`, `description`, `tech`, and `link`. When `link` is empty, the card renders as disabled.
- **Skills** — edit the `skills` array in `src/main.jsx`.
- **Email** — the contact links currently use the placeholder `your-email@example.com`. Update the `mailto:` links in `src/main.jsx` to your real address.
- **Social links** — update the GitHub and LinkedIn URLs in the `social-links` block in `src/main.jsx`.
- **Theme** — colors are defined as CSS custom properties in the `:root` block of `src/styles.css` (`--bg`, `--panel`, `--border`, `--muted`, `--blue`, `--purple`).

---

## Screenshots

The hero section uses a "windowed" avatar card with floating tags and orbiting rings. Replace this section with your own screenshot once deployed, for example:

```md
![Portfolio preview](./img/image.png)
```

---

## License

This project is open source and available for personal and educational use. Feel free to learn from it — please do not present it as your own work.
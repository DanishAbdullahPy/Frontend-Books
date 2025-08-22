# Book Tracker Frontend

**Tech Stack:**  
- Next.js 13+ (App Router)
- TailwindCSS
- React

---

## Features

- **Responsive Book Tracker UI**: Add and list books in real-time.
- **Modern UX:** Card design, gradients, feedback states.
- **REST API Integration:** Consumes the backend API endpoints.

---

## Getting Started

### 1. Install dependencies

npm install

text

### 2. Configure backend API endpoint

Optionally create `.env.local`:
NEXT_PUBLIC_API_URL=http://localhost:4000

text
(Default: Backend expected at `localhost:4000`.)

### 3. Start Next.js Dev Server

npm run dev

text
Frontend runs at [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

app/
page.js # Main page: book list & add form
layout.js
globals.css # Tailwind imports

text

---

## UX & Development Notes

- All state and API actions managed via React hooks.
- All styles use TailwindCSS; no external style sheets.
- Ready for further extensions: edit/delete, multi-user, auth, etc.

---

## Screenshots

_Add demo GIFs/screenshots here!_

---

## License

MIT

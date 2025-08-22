# Book Tracker Frontend

A modern, responsive frontend for tracking your books, built with Next.js 13+ and a sleek TailwindCSS design. This application seamlessly integrates with the **Book Tracker Backend** REST API.

-----

## 🛠 Tech Stack

  * **Next.js 13+** (App Router)
  * **TailwindCSS**
  * **React**

-----

## ✨ Features

  * **Responsive Book Tracker UI**: A clean, responsive user interface for adding and viewing your book collection.
  * **Modern UX**: Features a contemporary card design, subtle gradients, and clear feedback states for a great user experience.
  * **REST API Integration**: Communicates directly with the backend API to fetch and add book data.

-----

## 🚀 Getting Started

Follow these simple steps to get the frontend up and running on your local machine.

### 1\. Install Dependencies

First, navigate to the project directory and install the necessary packages.

```bash
npm install
```

### 2\. Configure Backend API Endpoint

The frontend needs to know where your backend API is running. If your backend is running on a different URL, create a `.env.local` file in the root directory and specify the API URL.

```text
NEXT_PUBLIC_API_URL=http://localhost:4000
```

> **Note:** By default, the frontend expects the backend to be at `http://localhost:4000`.

### 3\. Start the Development Server

Once configured, you can start the Next.js development server.

```bash
npm run dev
```

The application will be available at **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**.

-----

## 📁 Folder Structure

```text
app/
├── page.js          # The main page with the book list and add form
├── layout.js        # The root layout for the application
└── globals.css      # Global styles and TailwindCSS imports
```

-----

## 📝 UX & Development Notes

  * **State Management**: All state and API actions are managed directly via React hooks, keeping the logic encapsulated and easy to understand.
  * **Styling**: All styles are handled with TailwindCSS utility classes, so there are no external style sheets to manage.
  * **Extensible**: The codebase is ready for further development. You can easily add features like editing and deleting books, user authentication, or a multi-user system.

-----

## 📸 Screenshots

*Add demo GIFs/screenshots here\!*

-----

## ⚖️ License

This project is licensed under the MIT License.

'use client'; 
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch books from backend
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/books`);
      const data = await res.json();
      setBooks(data);
      setError("");
    } catch (e) {
      setError("Could not load books.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Submit new book
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  try {
    await fetch(`${API}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", author: "" });
    fetchBooks();
  } catch {
    setError("Could not add book.");
  } finally {
    setLoading(false);
  }
};

  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center py-12 px-2">
  <div className="w-full max-w-xl">
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm tracking-tight">📚 Book Tracker</h1>
    </header>
    
    <form
      onSubmit={handleSubmit}
      className="mb-10 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4 border border-blue-100"
      style={{ minWidth: 330, maxWidth: 600 }}
    >
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <input
          className="flex-1 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition text-black placeholder-gray-400 bg-white"
          placeholder="Book Title"
          value={form.title}
          required
          style={{ color: '#111', minWidth: 0 }}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="flex-1 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition text-black placeholder-gray-400 bg-white"
          placeholder="Author"
          value={form.author}
          required
          style={{ color: '#111', minWidth: 0 }}
          onChange={e => setForm({ ...form, author: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow transition active:scale-95 disabled:opacity-60"
        disabled={loading}
        style={{ letterSpacing: '.03em' }}
      >
        {loading ? (
          <span>
            <svg className="inline animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Adding...
          </span>
        ) : (
          "Add Book"
        )}
      </button>
      {error && <p className="text-center text-red-600 bg-red-50 border border-red-200 rounded p-3 shadow">{error}</p>}
    </form>

    <section className="w-full bg-white rounded-xl shadow p-6 border border-gray-100" style={{ minWidth: 330, maxWidth: 600 }}>
      <h2 className="text-2xl font-semibold mb-4 text-blue-900 tracking-tight">Books List</h2>
      {loading && books.length === 0 ? (
        <p className="animate-pulse py-12 text-center text-gray-400">Loading books...</p>
      ) : books.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <span className="text-4xl block mb-2">📖</span>
          No books added yet. Start by adding your first book!
        </div>
      ) : (
        <ul className="space-y-3">
          {books.map(book => (
            <li
              key={book.id}
              className="group bg-white hover:bg-blue-50 transition flex justify-between items-center p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div>
                <span className="text-lg font-bold text-blue-900 group-hover:underline">{book.title}</span>
                <div className="text-gray-600 text-sm mt-0.5">
                  by <span className="italic text-gray-500">{book.author}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  </div>
  <footer className="mt-12 text-gray-400 text-sm opacity-70">© 2025 Book Tracker. Built with Next.js &amp; TailwindCSS</footer>
</div>

  );
}

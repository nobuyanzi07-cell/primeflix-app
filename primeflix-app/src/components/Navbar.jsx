import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useWatchlist } from "../context/WatchListContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { watchlist } = useWatchlist();
 
   const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="wordmark">
          <span className="bulb" />
          PrimeFlix
        </Link>

        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/watchlist"
            className={location.pathname === "/watchlist" ? "active" : ""}
          >
            Watchlist
            {watchlist.length > 0 && (
              <span className="watchlist-count">{watchlist.length}</span>
            )}
          </Link>
        </nav>

        <form className="nav-search" onSubmit={handleSubmit}>
          <input
            className="ticket-input"
            type="text"
            placeholder="Search movies & shows"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}



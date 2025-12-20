import { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"

import hamburger from "/assets/hamburger.svg"
import youtube from "/assets/youtube.svg"
import search from "/assets/search.svg"
import plus from "/assets/plus.svg"



function Header({ isSidebarOpen, setIsSidebarOpen, setQuery }) {
    const [input, setInput] = useState("");
    const handleSearch = () => {
        if (input.trim()) {
            setQuery(input);
            navigate("/");
            setInput("");
        }
    };
    return (
        <header className="header">
            <nav className="nav">
                {/* LEFT */}
                <div className="nav-left">
                    <button className="icon-button" aria-label="Menu" onClick={(e) => setIsSidebarOpen(prev => !prev)}>
                        <img src={hamburger} alt="hamburger icon" />
                    </button>
                    <Link to="/" className="logo">
                        <img src={youtube} alt="YouTube icon" />
                    </Link>
                </div>

                {/* CENTER */}
                <div className="nav-center">
                    <form className="search-form" role="search" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                        <input type="text" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" className="search-button" aria-label="Search" onClick={handleSearch}>
                            <img src={search} alt="search icon" />
                        </button>
                    </form>
                    <button className="voice-search-button" aria-label="Search with your voice">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </button>
                </div>

                {/* RIGHT */}
                <div className="nav-right">
                    <Link to="" className="create-button">
                        <img src={plus} alt="plus icon" />
                        <span>Create</span>
                    </Link>
                    <button className="icon-button notifications-button" aria-label="Notifications">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                        </svg>
                    </button>
                    <button className="avatar-button" aria-label="User menu">
                        <img src="https://i.pravatar.cc/32" alt="User avatar" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
import { Link } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="sidebar sidebar-open">
      <div className="sidebar-content">
        {/* Main Navigation */}
        <nav className="sidebar-section">
          <Link to="/" className="sidebar-item active">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M12 4.44l-6 5.4V19h4v-5h4v5h4v-9.16l-6-5.4M12 3l8 7.2V19c0 .55-.45 1-1 1h-5v-6H10v6H5c-.55 0-1-.45-1-1v-8.8L12 3z" />
            </svg>
            <span>Home</span>
          </Link>

          <Link to="/shorts" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
            </svg>
            <span>Shorts</span>
          </Link>

          <Link to="/subscriptions" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
            </svg>
            <span>Subscriptions</span>
          </Link>
        </nav>

        <div className="sidebar-divider"></div>

        {/* Explore Section */}
        <nav className="sidebar-section">
          <div className="sidebar-label">Explore</div>

          <Link to="/trending" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z" />
            </svg>
            <span>Trending</span>
          </Link>

          <Link to="/music" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3zm9-12h-5V5h5v2z" />
            </svg>
            <span>Music</span>
          </Link>

          <Link to="/gaming" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35h-.02c-1.77 0-2.36.66-2.95 1.32-.59-.66-1.18-1.32-2.95-1.32h-.02C9.46 5.15 8 6.61 8 8.38v4.87c0 1.77 1.46 3.23 3.23 3.23h.02c1.77 0 2.95-1.09 2.95-2.5h.02c.59.66 1.18 2.5 2.95 2.5h.02c1.77 0 3.23-1.46 3.23-3.23V8.38c0-1.77-1.46-3.23-3.23-3.23zM9.43 15.38c-.86 0-1.63-.77-1.63-1.63V8.38c0-.86.77-1.63 1.63-1.63h.02c.86 0 1.45.4 1.74.76l.84 1.05v5.06c0 .86-.88 1.76-1.9 1.76h-.7zm10.39-1.63c0 .86-.77 1.63-1.63 1.63h-.02c-1.02 0-1.9-.9-1.9-1.76V8.56l.84-1.05c.29-.36.88-.76 1.74-.76h.02c.86 0 1.63.77 1.63 1.63v5.37h.32z" />
            </svg>
            <span>Gaming</span>
          </Link>

          <Link to="/sports" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM3 12c0-2.39.93-4.57 2.45-6.19L8 8.35v5.3c0 .83.67 1.5 1.5 1.5H13v3.35c-4.5-.43-8-4.27-8-9zm16.94-.55c-.36-.27-.78-.45-1.24-.45h-4.2v-3.7c0-.83-.67-1.5-1.5-1.5h-3.7L12 3.05c4.5.43 8 4.27 8 8.95 0 .09-.01.17-.01.25zM15 21c-.09 0-.17-.01-.25-.01V17h3.7c.83 0 1.5-.67 1.5-1.5V12c0-.09.01-.17.01-.25.36.27.78.45 1.24.45h.5c-.43 4.5-4.27 8-8.95 8H15z" />
            </svg>
            <span>Sports</span>
          </Link>
        </nav>

        {/* You Section */}
        <nav className="sidebar-section">
          <div className="sidebar-label">You</div>

          <Link to="/history" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" />
            </svg>
            <span>History</span>
          </Link>

          <Link to="/playlists" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z" />
            </svg>
            <span>Playlists</span>
          </Link>

          <Link to="/your-videos" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.8h12.8a1.8 1.8 0 0 0 1.8-1.8V5.6a1.8 1.8 0 0 0-1.8-1.8z" />
              <path d="M10.2 9v6l5.5-3z" />
            </svg>
            <span>Your videos</span>
          </Link>

          <Link to="/watch-later" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
            </svg>
            <span>Watch Later</span>
          </Link>

          <Link to="/liked" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h11.43 c0.9,0,1.7-0.59,1.94-1.44l1.55-5.49C22.36,13.13,21.92,12,20.5,12h-0.5L18.77,11z M7,11H4v10h3V11z" />
            </svg>
            <span>Liked videos</span>
          </Link>
        </nav>

        <div className="sidebar-divider"></div>

        {/* Subscriptions Section */}
        <nav className="sidebar-section">
          <div className="sidebar-label">Subscriptions</div>

          <Link to="/channel/1" className="sidebar-item">
            <img src="https://i.pravatar.cc/24?img=1" alt="" className="sidebar-avatar" />
            <span>Channel Name 1</span>
          </Link>

          <Link to="/channel/2" className="sidebar-item">
            <img src="https://i.pravatar.cc/24?img=2" alt="" className="sidebar-avatar" />
            <span>Channel Name 2</span>
          </Link>

          <Link to="/channel/3" className="sidebar-item">
            <img src="https://i.pravatar.cc/24?img=3" alt="" className="sidebar-avatar" />
            <span>Channel Name 3</span>
          </Link>

          <Link to="/channel/4" className="sidebar-item">
            <img src="https://i.pravatar.cc/24?img=4" alt="" className="sidebar-avatar" />
            <span>Channel Name 4</span>
          </Link>

          <Link to="/subscriptions/all" className="sidebar-item">
            <svg viewBox="0 0 24 24" className="sidebar-icon">
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span>Show more</span>
          </Link>
        </nav>

        <div className="sidebar-divider"></div>

      </div>
    </aside>
  )
}

export default Sidebar

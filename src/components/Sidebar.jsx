import { Link } from 'react-router-dom';

import './Sidebar.css'

function Sidebar({ isSidebarOpen, setQuery, query }) {
    return (
        <aside className={`sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <div className="sidebar-content">
                {/* Explore Section */}
                <nav className="sidebar-section">
                    <div className="sidebar-label">Explore</div>
                    <button className={`sidebar-item ${query === "Philosophy" ? "active" : ""}`} onClick={() => setQuery("Philosophy")} >
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-xl sidebar-icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"></path><path fill="none" strokeWidth="32" d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
                        <span>Home</span>
                    </button>

                    <button className={`sidebar-item ${query === "trending" ? "active" : ""}`} onClick={() => setQuery("trending")}>
                        <svg viewBox="0 0 24 24" className="sidebar-icon">
                            <path fill='currentColor' d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z" />
                        </svg>
                        <span>Trending</span>
                    </button>

                    <button className={`sidebar-item ${query === "music" ? "active" : ""}`} onClick={() => setQuery("music")}>
                        <svg viewBox="0 0 24 24" className="sidebar-icon">
                            <path fill='currentColor' d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3zm9-12h-5V5h5v2z" />
                        </svg>
                        <span>Music</span>
                    </button>

                    <button className={`sidebar-item ${query === "movie trailer" ? "active" : ""}`} onClick={() => setQuery("movie trailer")}>

                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" className="text-xl sidebar-icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M216,106H86.68L209.53,73.57a6,6,0,0,0,4.26-7.38l-8.16-30a13.94,13.94,0,0,0-17-9.72L36.32,66.67a13.77,13.77,0,0,0-8.48,6.47,13.57,13.57,0,0,0-1.36,10.42L34,111.34c0,.22,0,.44,0,.66v88a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V112A6,6,0,0,0,216,106ZM125.75,55.48l33,19.07-42.43,11.2-33-19.07Zm66-17.41a1.92,1.92,0,0,1,2.34,1.26l6.57,24.18L175.26,70.2l-33-19.07ZM38.23,79.14a1.85,1.85,0,0,1,1.15-.87L66.86,71l33,19.08L44.66,104.68l-6.6-24.27A1.63,1.63,0,0,1,38.23,79.14ZM210,200a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V118H210Z">
                            </path>
                        </svg>
                        <span>Films</span>
                    </button>

                    <button className={`sidebar-item ${query === "gaming" ? "active" : ""}`} onClick={() => setQuery("gaming")}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-xl sidebar-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z">
                            </path>
                        </svg>
                        <span>Gaming</span>
                    </button>

                    <button className={`sidebar-item ${query === "shopping" ? "active" : ""}`} onClick={() => setQuery("shopping")}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-xl sidebar-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z">
                            </path>
                        </svg>
                        <span>Shopping</span>
                    </button>

                    <button className={`sidebar-item ${query === "sports" ? "active" : ""}`} onClick={() => setQuery("sports")}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill='#fff' className='sidebar-icon'>
                            <path d="M17.5 1h-11A1.5 1.5 0 005 2.5V4H2a1 1 0 00-1 1v3a5 5 0 004.669 4.987 7.01 7.01 0 004.72 3.826l-2.926 4.655A1 1 0 008.31 23h7.38a1 1 0 00.847-1.532l-2.927-4.657a7.01 7.01 0 004.72-3.824A5 5 0 0023 8V5a1 1 0 00-1-1h-3V2.5A1.5 1.5 0 0017.5 1ZM7 10V3h10v7a5 5 0 11-10 0ZM3 8V6h2v4c0 .283.017.565.052.845A3 3 0 013 8Zm16 2V6h2v2a3 3 0 01-2.053 2.845c.034-.277.052-.559.053-.845Zm-8.88 11L12 18.008 13.88 21h-3.76Z">
                            </path>
                        </svg>
                        <span>Sports</span>
                    </button>

                    <button className={`sidebar-item ${query === "news" ? "active" : ""}`} onClick={() => setQuery("news")}>
                        <svg stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="text-xl sidebar-icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z">
                            </path>
                        </svg>
                        <span>News</span>
                    </button>

                    <button className={`sidebar-item ${query === "AI and ML" ? "active" : ""}`} onClick={() => setQuery("AI and ML")}>
                        <svg className='sidebar-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill='#fff'>
                            <path d="M11.485 2.143 1.486 8.148a1 1 0 000 1.715L5 11.968v4.957a2 2 0 00.992 1.73l5.504 3.21a1 1 0 001.008 0l5.504-3.212A2 2 0 0019 16.926V11.97l2-1.2V18a1 1 0 002 0V9a1 1 0 00-.485-.852l-10-6.005a1 1 0 00-1.03 0ZM3.944 9.005 12 4.167l8.057 4.837L12 13.834l-8.056-4.83Zm8.57 6.852L17 13.167v3.759l-5 2.917-5-2.917v-3.758l4.486 2.69a1 1 0 001.028-.001Z">
                            </path>
                        </svg>
                        <span>Course</span>
                    </button>

                    <button className={`sidebar-item ${query === "podcast" ? "active" : ""}`} onClick={() => setQuery("podcast")}>
                        <svg className='sidebar-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill='#fff'>
                            <path d="M12 1a10 10 0 00-8.66 15 1 1 0 001.732-1 8 8 0 1113.856 0 1 1 0 001.732 1A10 10 0 0012 1Zm0 5a4 4 0 00-4 4v4a4 4 0 003 3.874V20h-1a1 1 0 000 2h4a1 1 0 000-2h-1v-2.126A4 4 0 0016 14v-4a4 4 0 00-4-4Zm0 2a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2Z">
                            </path>
                        </svg>
                        <span>Podcasts</span>
                    </button>
                </nav>
                <div className="sidebar-divider"></div>

                {/* Subscriptions Section */}
                <nav className="sidebar-section">
                    <div className="sidebar-label">Subscriptions</div>
                    <Link to="https://youtube.com/@procodrr?si=YV2Ioqfr4swA5g0U" className="sidebar-item" target='_blank'>
                        <img src="https://yt3.googleusercontent.com/QQi62BHmnTzE4t3QuLXYAbhbOJXz3Xs0dqps_u_9S4BKutYQ0uL-r2gPxDbU3JFVnKpW69pcqA=s160-c-k-c0x00ffffff-no-rj" alt="Anurag singh image" className="sidebar-avatar" />
                        <span>Anurag Singh ProCodrr</span>
                    </Link>

                    <Link to="https://youtube.com/@hiteshcodelab?si=9fZuiA9HNFt0dKJn" className="sidebar-item" target='_blank'>
                        <img src="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s160-c-k-c0x00ffffff-no-rj" alt="Hitesh Choudhary image" className="sidebar-avatar" />
                        <span>Hitesh Choudhary</span>
                    </Link>

                    <Link to="https://youtube.com/@piyushgargdev?si=uaq5WQIVj69HUMQz" className="sidebar-item" target='_blank'>
                        <img src="https://yt3.googleusercontent.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s160-c-k-c0x00ffffff-no-rj" alt="Piyush Garg" className="sidebar-avatar" />
                        <span>Piyush Garg</span>
                    </Link>

                    <Link to="https://youtube.com/@freecodecamp?si=uLnWGAOCbniqfhyr" className="sidebar-item" target='_blank'>
                        <img src="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj" alt="freeCodeCamp.org image" className="sidebar-avatar" />
                        <span>freeCodeCamp.org</span>
                    </Link>
                </nav>
                <div className="sidebar-divider"></div>

                {/* Developed Section */}
                <nav className="sidebar-section">
                    <div className="sidebar-label">Developed by </div>
                    <Link to="https://github.com/sudhanshuverse" target='_blank' className="sidebar-item">
                        <img src="https://i.pravatar.cc/24?img=1" alt="" className="sidebar-avatar" />
                        <span>Sudhanshu Kumar</span>
                    </Link>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;
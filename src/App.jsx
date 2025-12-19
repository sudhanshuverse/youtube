import { useState } from "react"

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [query, setQuery] = useState("Philosophy");

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setQuery={setQuery} />
      <Sidebar isSidebarOpen={isSidebarOpen} query={query} setQuery={setQuery} />
      <Home isSidebarOpen={isSidebarOpen} query={query} />
    </>
  )
}

export default App;
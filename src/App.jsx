import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [query, setQuery] = useState("Philosophy");

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setQuery={setQuery} />
      <Sidebar isSidebarOpen={isSidebarOpen} query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} query={query} />} />
        <Route path="/video/:id" element={<Videos isSidebarOpen={isSidebarOpen} />} />
      </Routes>
    </>
  );
}

export default App;

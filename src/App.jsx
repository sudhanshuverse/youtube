import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

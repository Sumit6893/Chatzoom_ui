import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Resister";
import Features from "./Components/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={Features} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
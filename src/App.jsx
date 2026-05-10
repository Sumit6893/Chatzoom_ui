import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Resister";
import Features from "./Components/Features";
import Layout from "./Page/Layout";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path="features" element={<Features />} />
        </Route>

        {/* ❌ Without Layout (no navbar/footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

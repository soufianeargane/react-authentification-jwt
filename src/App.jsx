import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login"; // Use { Login } instead of Login
import { Register } from "./pages/Register"; // Use { Register } instead of Register
import { Activate } from "./pages/activate.jsx";
import HomeClient from "./pages/client/HomeClient";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/client" element={<HomeClient />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

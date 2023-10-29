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
import UnAuthorized from "./pages/UnAuthorized";
import { UserProvider } from "./contexts/UserContext";
import AuthorizedRoute from "./services/AuthorizedRoute";
import RootLayout from "./layouts/RootLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/activate" element={<Activate />} />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/resetpassword"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="/client"
                            element={
                                <AuthorizedRoute
                                    requiredRole="client"
                                    element={<HomeClient />}
                                />
                            }
                        />
                        <Route
                            path="/unauthorized"
                            element={<UnAuthorized />}
                        />
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;

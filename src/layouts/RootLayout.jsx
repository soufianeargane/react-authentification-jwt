import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RootLayout;

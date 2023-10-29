import axiosInstance from "../../api/axiosInstance.jsx";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useUser } from "../../contexts/UserContext.jsx";
const LogoutButton = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleLogout = async () => {
        try {
            await axiosInstance.post("/api/auth/logout").then((response) => {
                console.log(response.data);
                setUser(null);
                navigate("/login");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Typography onClick={handleLogout}>Logout</Typography>
        </div>
    );
};

export default LogoutButton;

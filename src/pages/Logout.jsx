import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout").then((response) => {
        console.log(response.data);
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

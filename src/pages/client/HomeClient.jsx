import { useUser } from "../../contexts/UserContext";
import axiosInstance from "../../api/axiosInstance";

import Logout from "../Logout";
function HomeClient() {
  const { user } = useUser();
  const check = async () => {
    await axiosInstance
      .get("/api/auth/checkauth")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
  return (
    <div>
      <h1>Welcome to the Client Role!</h1>
      <p>your name is: {user?.name} </p>
      <button onClick={check}>check</button>
      <Logout />
    </div>
  );
}

export default HomeClient;

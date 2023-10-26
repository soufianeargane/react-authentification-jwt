import { useUser } from "../contexts/UserContext";
import validateToken from "../helpers/validateToken";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthorizedRoute = ({ element, requiredRole }) => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    async function checkAuthorization() {
      if (user) {
        if (user.role === requiredRole) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } else {
        try {
          let result = await validateToken();
          if (result.success) {
            setUser(result.useUser);
            if (result.user.role === requiredRole) {
              setIsAuthorized(true);
            } else {
              setIsAuthorized(false);
            }
          } else {
            navigate("/login"); // Redirect to the login page
          }
        } catch (error) {
          navigate("/login"); // Redirect to the login page
        }
      }
    }

    checkAuthorization();
  }, [user, requiredRole, navigate, setUser]);

  if (isAuthorized === true) {
    return element;
  } else if (isAuthorized === false) {
    return <div>Not Authorized</div>;
  } else {
    // Handle loading state (you can replace this with a loading spinner or message)
    return <div>Loading...</div>;
  }
};

export default AuthorizedRoute;

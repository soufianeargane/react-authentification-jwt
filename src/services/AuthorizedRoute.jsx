import { useUser } from "../contexts/UserContext";
import validateToken from "../helpers/validateToken";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorizedRoute = ({ element, requiredRole }) => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

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
                        setUser(result.user);
                        if (result.user.role === requiredRole) {
                            setIsAuthorized(true);
                        } else {
                            setIsAuthorized(false);
                        }
                    } else {
                        setIsLogged(true);
                    }
                } catch (error) {
                    setIsLogged(true);
                }
            }
        }

        checkAuthorization();
    }, [user, requiredRole, setUser]);

    useEffect(() => {
        if (isLogged) {
            navigate("/login");
        } else if (isAuthorized === false) {
            navigate("/unauthorized");
        }
    }, [isAuthorized, isLogged, navigate]);

    if (isAuthorized === true) {
        return element;
    } else {
        // Handle loading state (you can replace this with a loading spinner or message)
        return <div>Loading...</div>;
    }
};

export default AuthorizedRoute;

import { useUser } from "../../contexts/UserContext";

function HomeManager() {
    const { user } = useUser();
    return (
        <div>
            <h1>Welcome to the Manager Role!</h1>
            <p>your name is: {user?.name} </p>
        </div>
    );
}

export default HomeManager;

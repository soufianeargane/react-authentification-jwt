import { useUser } from "../../contexts/UserContext";

function HomeClient() {
    const { user } = useUser();
    return (
        <div>
            <h1>Welcome to the Client Role!</h1>
            <p>your name is: {user?.name} </p>
        </div>
    );
}

export default HomeClient;

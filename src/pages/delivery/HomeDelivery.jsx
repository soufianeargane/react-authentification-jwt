import { useUser } from "../../contexts/UserContext";

function HomeDelivery() {
    const { user } = useUser();
    return (
        <div>
            <h1>Welcome to the Delivery Role!</h1>
            <p>your name is: {user?.name} </p>
        </div>
    );
}

export default HomeDelivery;

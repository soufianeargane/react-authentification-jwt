import "../assets/css/home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="main-div">
            <div className="main-title">
                <h1>SATISFY YOUR STOMACH WITH US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut quidem quaerat aspernatur aperiam exercitationem
                    reprehenderit harum nisi nesciunt, provident accusantium
                    impedit iure nihil, nostrum ea rem iusto maiores, itaque
                    blanditiis.
                </p>
                <Link className="link" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Home;

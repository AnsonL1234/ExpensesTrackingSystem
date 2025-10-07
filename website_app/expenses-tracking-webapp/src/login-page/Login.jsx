import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../assets/left-arrow.png";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleLoginSubmit = () => {
    event.preventDefault();

        axios
            .post(`http://localhost:7070/api/auth/login?username=${username}&password=${password}`)
            .then((respon) => {
                const id = respon.data.user_id;
                setResponseMessage("User is login successfully!");
                setHasError(false);
                navigate("/mainPage", { state: {userId: id}})
                console.log(id); // debug
            })
            .catch((err) => {
                setHasError(true);
                console.log(err);
            });
    };

    return (
        <div className="loginPage">
            <a onClick={() => navigate(-1)} className="backPointer">
                <img src={LeftArrow}  />
                back
            </a>

            <div className="loginForm">
                <h2 className="header_text">
                    Sign in to your account
                </h2>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="username">Username</label>
 
                    <input 
                        id="username"
                        type="text" 
                        placeholder="Enter your username"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="text-input"
                        required
                    />

  
                    <label htmlFor="password">Password</label>

                    <input 
                        id="password"
                        type="password" 
                        placeholder="Enter your password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />

                    <a onClick={() => navigate("/forgotPassword")} className="forgotPassword">
                        Forgot your password? 
                    </a>
                    <button type="submit" className="submit_button" >
                        Login
                    </button>
                </form>
                <div className="divider">
                    <span>or</span>
                </div>

                <button type="button" onClick={() => navigate("/register")}>
                    Create An Account
                </button>
            </div>
            

            <div className="error_panel">
                {hasError && (
                    <p className="error-message">
                        {"Something went wrong. Please try again."}
                    </p>
                )}
            </div>
        </div>
    );
}
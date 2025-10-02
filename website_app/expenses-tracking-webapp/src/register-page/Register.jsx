import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LeftArrow from "../assets/left-arrow.png"
import Register2 from "./Register2"
import "./Register.css";


export default function Register() {

    const navigate = useNavigate();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[isPasswordCorrect, setIsPasswordCorrect] = useState(true);
    const[responseMessage, setResponseMessage] = useState("");
    const[hasError, setHasError] = useState(true);

    const handleRegisterSubmit = () => {
        event.preventDefault();

        const newUser = {
            username, 
            password
        }

        if (confirmPassword !== password || password === "" || confirmPassword === "") {
            setIsPasswordCorrect(false);
            setResponseMessage("Passwords do not match!");
            setHasError(true);
            return;
        } else {
            setIsPasswordCorrect(true);
            navigate("/register2", {state: newUser});
            setHasError(false);
        }
    };


    return (
        <div className="registerPage" >
            <a onClick={() => navigate(-1)} className="backPointer">
                <img src={LeftArrow}  />
                back
            </a>

            <div className="registerForm">

                <h2 className="header_text">Register Account</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    {!isPasswordCorrect && (
                        <span className="error-message-register">* Password does not match...</span>
                    )}
                    <input 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">
                        Next Step
                    </button>
                </form>

                <div className="divider">
                        <span>or</span>
                    </div>

                    <p className="register_text">Already have an account?<a onClick={() => navigate("/login")}>Login</a></p>
            </div>
        </div>
    );
}
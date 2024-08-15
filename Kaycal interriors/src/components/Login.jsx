import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { userAuth } from "../src/Context/authContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";  
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const { login, user, logOut } = userAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Clear any previous errors
        try {
            await login(formData.email, formData.password);
            navigate("/");
        } catch (error) {
            setError("Failed to login. Please check your credentials.");
            console.error("Login error: ", error);
        }
    };

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <h1>Hello from Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /> <br /> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /> <br /> <br />
                <button type="submit">Login</button> <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <span>Do not have an account? <Link to="/signup">Sign up</Link></span>
                <p onClick={logOut} style={{ cursor: 'pointer' }}>Logout</p>
            </form>
        </>
    );
};

export default Login;

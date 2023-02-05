import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // prettier-ignore
    return (
        <div className="Login">
            <input type="text"
                value={username}
                placeholder="username..."
                onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                }}
            />
            <input type="password"
                value={password}
                placeholder="password..."
                onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                }}
            />
            <div className="button">Log in</div>
            <p>don't have an account? <Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;

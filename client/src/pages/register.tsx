import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/register.scss";

const Register: React.FC<{}> = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="Register">
            <div className="container">
                <div className="fields">
                    <input type="text"
                        className="field first_name"
                        value={firstName}
                        placeholder="first name"
                        onChange={(e) => {
                            e.preventDefault();
                            setFirstName(e.target.value);
                        }}
                    />
                    <input type="text"
                        className="field last_name"
                        value={lastName}
                        placeholder="last name"
                        onChange={(e) => {
                            e.preventDefault();
                            setLastName(e.target.value);
                        }}
                    />
                    <input type="text"
                        className="field username"
                        value={username}
                        placeholder="username..."
                        onChange={(e) => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}
                    />
                    <input type="password"
                        className="field password"
                        value={password}
                        placeholder="password..."
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="button">register</div>
                <p>
                    already have an account <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/header.scss";

const Header: React.FC<{}> = () => {
    const [search, setSearch] = useState("");

    return (
        <header>
            <div className="container">
                <Link to="/home" className="logo">
                    Shopping
                </Link>
                <div className="content">
                    <ul>
                        <li>
                            <NavLink end to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink end to="/about">About</NavLink>
                        </li>
                    </ul>
                    <input
                        type="text"
                        value={search}
                        placeholder="search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <NavLink end to="/login">Log in</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;

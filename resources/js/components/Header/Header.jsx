import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <div className="brand">F1 Data</div>
                <div className="header-links">
                    <Link to="/">Home</Link>
                    <Link to="/new-team">New team</Link>
                    <Link to="/new-driver">New driver</Link>
                </div>
            </div>
        </>
    );
}

export default Header;

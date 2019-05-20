import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/products">Product</Link>
                </div>
            </div>
        )

    }
}

export default Header;
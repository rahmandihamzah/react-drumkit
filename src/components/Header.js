import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/Header.css';
import { NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo-header">
                    <img className="logoheader" src={require('../images/logo.png')} />
                </div>

                <ul className="nav-item">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/products">Product</Link> */}
                        <NavDropdown href="/" title="Product" id="basic-nav-dropdown" className="nav-dropdown">
                            <NavDropdown.Item href="/drumkits">Drum Kits</NavDropdown.Item>
                            <NavDropdown.Item href="/snaredrums">Snare Drums</NavDropdown.Item>
                            <NavDropdown.Item href="/cymbals">Cymbals</NavDropdown.Item>
                            <NavDropdown.Item href="/drumsticks">Drumsticks</NavDropdown.Item>
                            <NavDropdown.Item href="/drumheads">Drumheads</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </div >
        )

    }
}

export default Header;
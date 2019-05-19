import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/detail-product" component={DetailProduct} />
        </div>
      </Router >
    )
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';
import Drumkits from './pages/products/Drumkits';
import Snaredrums from './pages/products/SnareDrums';
import Cymbals from './pages/products/Cymbals';
import Drumsticks from './pages/products/Drumsticks';
import Drumheads from './pages/products/Drumheads';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/detail-product" component={DetailProduct} />
          <Route exact path="/drumkits" component={Drumkits} />
          <Route exact path="/snaredrums" component={Snaredrums} />
          <Route exact path="/cymbals" component={Cymbals} />
          <Route exact path="/drumsticks" component={Drumsticks} />
          <Route exact path="/drumheads" component={Drumheads} />
        </div>
      </Router >
    )
  }
}

export default App;

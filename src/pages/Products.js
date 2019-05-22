import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Products extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    Ini halaman product
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import '../../styles/Display.css';

class Drumkits extends React.Component {
    constructor() {
        super();
        this.state = {
            dataDrumkits: [],
        }
    }

    componentDidMount() {
        // http://192.168.2.11:3000/v1/products
        axios.get('http://192.168.2.11:3000/v1/products').then((hasil) => {
            // console.log(hasil.data)
            this.setState({
                dataDrumkits: hasil.data.products
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    {this.state.dataDrumkits.map((res, i) => {
                        return (
                            <div className="display-container">
                                <img className="image-display" src={res.imagePath} />
                                <ul>
                                    <li className="item-title">{res.productName}</li>
                                    <li className="item-price">{res.price}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Drumkits;
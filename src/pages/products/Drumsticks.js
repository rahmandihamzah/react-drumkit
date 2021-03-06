import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import '../../styles/Display.css';

class Drumsticks extends React.Component {
    constructor() {
        super();
        this.state = {
            dataDrumsticks: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((hasil) => {
            // console.log(hasil.data.slice(0, 10))
            this.setState({
                dataDrumsticks: hasil.data.slice(0, 12)
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    {this.state.dataDrumsticks.map((res, i) => {
                        return (
                            <div className="display-container">
                                <img className="image-display" src={res.url} />
                                <ul>
                                    <li className="item-title">{res.title}</li>
                                    <li className="item-price">{res.id}</li>
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

export default Drumsticks;
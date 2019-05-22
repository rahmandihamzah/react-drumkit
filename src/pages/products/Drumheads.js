import React from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import '../../styles/Display.css';

class Drumheads extends React.Component {
    constructor() {
        super();
        this.state = {
            dataDrumheads: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((hasil) => {
            // console.log(hasil.data.slice(0, 10))
            this.setState({
                dataDrumheads: hasil.data.slice(0, 12)
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    {this.state.dataDrumheads.map((res, i) => {
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
            </div>
        )
    }
}

export default Drumheads;
import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';
import { 
    Carousel,
    showArrows,
    onChange,
    onClickItem,
    onClickThumb
 } from 'react-responsive-carousel';

class Home extends React.Component {
        render() {
        return (
            <div>
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://id.yamaha.com/id/files/drums_1200x480_7ea492474ff4258ad09cc3df770fa9fd.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://id.yamaha.com/id/files/phx_1200x480_06616633c4e3613c35daf01de6cfabad.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://id.yamaha.com/id/files/drum_sets_1200x480_c08916eec746d246f40635adf355e948.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://id.yamaha.com/id/files/absolute_hybrid_maple_1200x480_efb9d3561f38fe0ff0cff72b348c6d78.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
              
            </Carousel>
           </div> 
        );
    }
}

export default Home;
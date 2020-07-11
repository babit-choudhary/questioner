import React, { Component } from 'react';
import Demo from './demo';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="heading-wrapper"><h1 className="heading">Anamnese - Praxis für Schmerztherapie &amp; Naturmedizin Günter Kränzlein</h1></div>
            <div class="youtube-cont">
                <div class="col1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2jZMzkEM2BE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p8EEI9pF1QI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="siteclear"></div>
            </div>
            <div id="questioner"><Demo/></div>

            </div>
            
        );
    }
}

export default Layout;
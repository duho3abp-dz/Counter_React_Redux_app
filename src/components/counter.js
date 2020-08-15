import React from 'react';
import {connect} from 'react-redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="wrapper">

            <div className="counter-block">
                <div className="counter">{counter}</div>
            </div>

            <div className="icons-block">
                <div id="plus" onClick={inc} className="btn">
                    <img className="icon" src="/img/Plus.svg" alt="plus" />
                </div>
        
                <div id="minus" onClick={dec} className="btn">
                    <img className="icon" src="/img/Minus.svg" alt="minus" />
                </div>
        
                <div id="reset" onClick={res} className="btn">
                    <img className="icon" src="/img/Reset.svg" alt="reset" />
                </div>
            </div>
        </div>
    );
};

export default connect()(Counter);
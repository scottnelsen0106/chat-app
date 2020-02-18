import React from 'react';

import closeIcon from '../Icons/closeIcon.png';
import onlineIcon from '../Icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ( {room} ) => (
    <div className="InfoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
)

export default InfoBar;
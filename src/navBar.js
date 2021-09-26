import React from 'react';
import './index.css';

const NavBar = (props) => {
    return(
        <div className="Nav">
            <div className="rightside">
                <div className="links">
                    <a href="./home">Home</a>
                    <a href="./home">Home</a>
                    <a href="./home">Home</a>
                    <a href="./home">Home</a>
                </div>                    
            </div>
            <div className="leftside">
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cat-icon">
                </img>
                <span>3</span>
            </div>
        </div>
    );
}

export default NavBar
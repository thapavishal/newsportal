import React from 'react';
import './Homeleft.css';

const Homeleft = () => {
    return (
        <div className="cardContainer">
            <div className="cardHeader">
                <span>Featured</span>
                <h1 className="title">Welcome to the hot news</h1>
                <span>..................</span>
            </div>
            <div className="imageContainer">
                <img src={require('../images/birds.jpg')} alt="postImage"/>
            </div>
        </div>
    )
}

export default Homeleft;
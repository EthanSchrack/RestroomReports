import React from "react";
import './Detail.css'
import toilet from './goldToilet.jpg'

const Detail = () => {
    return (    
        <div className="detail">
            <div class="split right">
                <div class="centered">
                    <h1>Details</h1>
                    <h2>Bathroom Name</h2>
                    <h2>Stars</h2>
                    <p>Description Text</p>
                    <img src={toilet} width="200px" height="200px" alt="Toilet"/>
                </div>
            </div>
        </div>
        
    );
}


export default Detail;
import React from "react";
import './Detail.css'
import toilet from './goldToilet.jpg'

const Detail = ({bathroom}) => {
        return (    
        <div className="detail">
            <div class="split right">
                <div class="centered">
                    {bathroom ? (
                        <div>
                        <h1>Details</h1>
                        <h2>{bathroom.name}</h2>
                        <h2>{bathroom.rating + "/5"}</h2>
                        <p>{bathroom.description}</p>
                        <img src={bathroom.image} width="200px" height="200px" alt="Toilet"/>
                        </div>
                    ): (
                        <div>There is nothing selected!</div>
                    )}
                </div>
            </div>
        </div>
        
    );
}


export default Detail;
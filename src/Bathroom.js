import React from "react";
import "./Bathroom.css"

const Bathroom = (props) => {
        
    return (
        <div class="bathroom-element">
            <span>
                <h2>{props.name}</h2>
                <p>{props.rating} </p>
            </span>
        </div>
    );
}

export default Bathroom;
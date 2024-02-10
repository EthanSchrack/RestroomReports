import React from "react";
import "./Bathroom.css"

const Bathroom = (props) => {
        
    return (
        <div class="bathroom-element" onClick={() => props.handleBathroomChange(props)}>
            <span>
                <div>{props.name}</div>
                <p>{props.description} {props.rating} </p>

                <img src={props.image} width="75px" height="75px"/>

            </span>
        </div>
    );
}

export default Bathroom;
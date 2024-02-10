import React, {useEffect, useState} from "react";
import "./Bathroom.css";
import {createStars} from "./Stars";

// createStars();
const Bathroom = (props) => {
    useEffect(() => {
        createStars(props.name, props.rating);
        console.log(props.name);
    }, [props.name]);
    
    return (
        <body>
            <div class="bathroom-element" onClick={() => props.handleBathroomChange(props)}>
                <span>
                    <div class="bathroom-element-picture">
                        <img src={props.image} width="75px" height="75px"/>
                    </div>
                    <div class="bathroom-element-text">
                        <div>{props.name}</div>
                        <div id = {props.name}></div>

                        <p>{props.description} {props.rating} </p>
                    </div>
                </span>
            </div>
        </body>
    );
}

export default Bathroom;
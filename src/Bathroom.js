import React, {useEffect, useState} from "react";
import "./Bathroom.css";
import {createStars} from "./Stars";

const Bathroom = (props) => {
    useEffect(() => {
        createStars(props.name, props.rating);
    }, [props.name]);
    
    return (
        <div>
            <div className="bathroom-element" onClick={() => props.handleBathroomChange(props)}>
                <span>
                    <div className="bathroom-element-picture">
                        <img src={props.image} width="75px" height="75px"/>
                    </div>
                    <div className="bathroom-element-text">
                        <div>{props.name}</div>
                        <div id = {props.name}></div>

                        <p>{props.description}</p>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Bathroom;
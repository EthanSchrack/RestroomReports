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
                    <div id = {props.name} class="stars" ></div>

                    <div class="bathroom-element-text">
                        <div>{props.name} <br></br>Score:{props.rating} <br></br> 
                            {props.description} 
                        </div>
                    </div>
                    {/* <div class="stars"> */}
                    {/* </div> */}
                </span>
            </div>
        </div>
    );
}

export default Bathroom;
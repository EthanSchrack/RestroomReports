import React, {useEffect, useState} from "react";
import "./Bathroom.css";
import {createStars} from "./Stars";
import { spawnPoop } from "./Poop";

const Bathroom = (props) => {
    useEffect(() => {
        createStars(props.name, props.rating);
        spawnPoop();
    }, [props.name]);
    
    return (
        <div class="scrolling">

            <div className="bathroom-element" onClick={() => props.handleBathroomChange(props)}>
                <span>
                    <div className="bathroom-element-picture">
                        <img src={props.image} width="75px" height="75px"/>
                    </div>
                    <div id = {props.name} class="stars" ></div>

                    <div class="bathroom-element-text">
                        <div> <span class="bold">{props.name} <br></br>Score:{props.rating}</span> <br></br> 
                            {props.description} 
                        </div>

                    </div>
                </span>
            </div>
        </div>
    );
}

export default Bathroom;
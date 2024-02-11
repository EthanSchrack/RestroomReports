import React, {useEffect, useState} from "react";
import "./Bathroom.css";
import {createStars} from "./Stars";

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
        </body>
    );
}

export default Bathroom;
import React from "react";
import Toilet from "./Bathroom.js";

const ToiletList = (props) => {
    return ( 
        <div>
            {props.toilets.map((toilet) => (
                <Toilet 
                key={Math.random()}
                handleBathroomChange={props.onBathroomChange}
                name={toilet.name}
                description={toilet.description}
                rating={toilet.rating}
                image={toilet.image}
                />
            ))}
        </div>
    );
}

export default ToiletList;
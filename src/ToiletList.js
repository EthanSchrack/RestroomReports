import React, { useEffect, useState } from "react";
import Bathroom from "./Bathroom.js";


const ToiletList = (props) => {


    return ( 
        <div>
            {props.toilets.map((toilet) => (
                <Bathroom 
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
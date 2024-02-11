import React, { useEffect, useState } from "react";
import Bathroom from "./Bathroom.js";


const ToiletList = (props) => {


    return ( 
        <div>
            {props.toilets.map((toilet) => (
                <Bathroom 
                key={Math.random()}
                handleBathroomChange={props.onBathroomChange}
                id={toilet.id}
                name={toilet.name}
                description={toilet.description}
                rating={toilet.rating}
                image={toilet.image}
                latitude={toilet.latitude}
                longitude={toilet.longitude}
                />
            ))}
        </div>
    );
}

export default ToiletList;
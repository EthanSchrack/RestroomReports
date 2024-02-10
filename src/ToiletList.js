import React from "react";
import Toilet from "./Bathroom.js";

const ToiletList = ({toilets}) => {
    return ( 
        <div>
            {toilets.map((toilet) => (
                <Toilet 
                key={Math.random()}
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
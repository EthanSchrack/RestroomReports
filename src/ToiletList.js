import React from "react";
import Toilet from "./Toilet.js";

const ToiletList = ({toilets}) => {
    return ( 
        <div>
            {toilets.map((toilet) => (
                <Toilet 
                key={Math.random()}
                name={toilet.name}
                />
            ))}
        </div>
    );
}

export default ToiletList;
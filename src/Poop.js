import "./Poop.css"
import React, {useEffect} from "react";


export function spawnPoop() {
    let text = "💩";

    let poopContainer = document.getElementById('poop');
    poopContainer.style.position = "absolute";
    let x_pos = Math.random() * 1200;
    let y_pos = Math.random() * 100;
    poopContainer.style.left = x_pos+'px';
    poopContainer.style.top = y_pos+'py';
    poopContainer.innerHTML = text;

    poopContainer = document.getElementById('poop1');
    poopContainer.style.position = "absolute";
    x_pos = Math.random() * 1200;
    y_pos = Math.random() * 1000;
    poopContainer.style.left = x_pos+'px';
    poopContainer.style.top = y_pos+'py';
    poopContainer.innerHTML = text;


    poopContainer = document.getElementById('poop2');
    poopContainer.style.position = "absolute";
    x_pos = Math.random() * 1200;
    y_pos = Math.random() * 1000;
    poopContainer.style.left = x_pos+'px';
    poopContainer.style.top = y_pos+'py';
    poopContainer.innerHTML = text;

    poopContainer = document.getElementById('poop3');
    poopContainer.style.position = "absolute";
    x_pos = Math.random() * 1200;
    y_pos = Math.random() * 1000;
    poopContainer.style.left = x_pos+'px';
    poopContainer.style.top = y_pos+'py';
    poopContainer.innerHTML = text;

    poopContainer = document.getElementById('poop4');
    poopContainer.style.position = "absolute";
    x_pos = Math.random() * 1200;
    y_pos = Math.random() * 1000;
    poopContainer.style.left = x_pos+'px';
    poopContainer.style.top = y_pos+'py';
    poopContainer.innerHTML = text;

}

const Poop = () => {
    useEffect(() => {
        spawnPoop();
    }, []);
    
    return (    
        <span id='poop' class='poop'></span>
        
    );
}

export default Poop;
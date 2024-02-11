import React, { useState } from "react";
import './Detail.css'
import toilet from './goldToilet.jpg'
import AddBathroom from "./AddBathroom";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Detail = ({bathroom, onNeedsUpdate}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const showFormHandler = () => {
        setIsFormVisible(true);
    };
    const closeFormHandler = () => {
      setIsFormVisible(false);
    };

    const deleteHandler = () => {
        fetch(`http://localhost:8080/delete-bathroom?id=${bathroom.id}`, {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',  
                "Content-Type": "application/json",
            },
             
        }).then(() => onNeedsUpdate());
        
    }


    return (    
        <div className="detail">
            <div class="split right">
                <div class="centered">
                    {/* {bathroom ? (

                        <div>
                            <h1>Details</h1>
                            <h2>{bathroom.name}</h2>
                            <h2>{bathroom.rating + "/5"}</h2>
                            <p>{bathroom.description}</p>
                            <img src={bathroom.image} width="200px" height="200px" alt="Toilet"/>
                            <button onClick={showFormHandler}>Edit</button>
                        </div>
                    ): (
                        <div>There is nothing selected!
                            <button onClick={showFormHandler}>Add Bathroom</button>
                        </div>
                    )} */}
                    {(!bathroom && !isFormVisible) && 
                        <div class = "select-text">There is nothing selected!
                            <br></br>
                            <button onClick={showFormHandler} class="button add">Add <br></br>Bathroom</button>
                        </div>
                    }           
                    {(!bathroom && isFormVisible) &&
                        <div>
                            <AddBathroom onAddBathroom={onNeedsUpdate} onClose={closeFormHandler}/>
                            <button onClick={closeFormHandler}class="button cancel">Cancel</button>
                        </div>
                    }
                    {(bathroom && !isFormVisible) &&
                        <div>
                            <h1>Details</h1>
                            <h2>{bathroom.name}</h2>
                            <h2>{bathroom.rating + "/5"}</h2>
                            <p>{bathroom.description}</p>
                            <img src={bathroom.image} width="200px" height="200px" alt="Toilet"/>
                            <br></br>
                            <button onClick={showFormHandler} class="button edit">Edit</button>
                            <button onClick={deleteHandler} class="button delete">Delete</button>
                            <button onClick={onNeedsUpdate} class="button close">Close</button>
                        </div>
                    }
                    {(bathroom && isFormVisible) &&
                        <div>
                           <AddBathroom onAddBathroom={onNeedsUpdate} onClose={closeFormHandler} existingBathroom={bathroom}/>
                            <button onClick={closeFormHandler} class="button cancel">Cancel</button>
                            
                        </div>
                    }
                </div>
            </div>
        </div>

        
    );

}


export default Detail;
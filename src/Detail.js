import React, { useState } from "react";
import './Detail.css'
import toilet from './goldToilet.jpg'
import AddBathroom from "./AddBathroom";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Detail = ({bathroom}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const showFormHandler = () => {
        setIsFormVisible(true);
    };
    const closeFormHandler = () => {
      setIsFormVisible(false);
    };

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
                        <div>There is nothing selected!
                            <button onClick={showFormHandler}>Add Bathroom</button>
                        </div>
                    }           
                    {(!bathroom && isFormVisible) &&
                        <div>
                            <AddBathroom />
                            <button onClick={closeFormHandler}>Cancel</button>
                        </div>
                    }
                    {(bathroom && !isFormVisible) &&
                        <div>
                            <h1>Details</h1>
                            <h2>{bathroom.name}</h2>
                            <h2>{bathroom.rating + "/5"}</h2>
                            <p>{bathroom.description}</p>
                            <img src={bathroom.image} width="200px" height="200px" alt="Toilet"/>
                            <button onClick={showFormHandler}>Edit</button>
                        </div>
                    }
                    {(bathroom && isFormVisible) &&
                        <div>
                           <AddBathroom />
                            <button onClick={closeFormHandler}>Cancel</button>
                        </div>
                    }
                </div>
            </div>
        </div>

        
    );

}


export default Detail;
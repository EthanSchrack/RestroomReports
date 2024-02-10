import React, { useState } from "react";

const AddBathroom = ({onAddBathroom}) => {
    
    const [bathroomFeatures, setBathroomFeatures] = useState({
        id: '',
        name: '',
        description: '',
        rating: '',
        image: ''
    });

    
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setBathroomFeatures((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/add-bathroom", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                "name": bathroomFeatures.name,
                "description": bathroomFeatures.description,
                "image": bathroomFeatures.image
              }),
        }).then(() => onAddBathroom());
        setBathroomFeatures({
            id: '',
            name: '',
            description: '',
            rating: '',
            image: ''
        });
    }

    return (
        <div className="form">
                <form onSubmit={submitHandler}>
                <label>Name</label>
                <input 
                    name="name"
                    type="text"
                    value={bathroomFeatures.name}
                    onChange={changeHandler}
                />
                <label>Description</label>
                <input 
                    name="description"
                    type="text"
                    value={bathroomFeatures.description}
                    onChange={changeHandler}
                />
                <label>Rating</label>
                <input 
                    name="rating"
                    type="number"
                    value={bathroomFeatures.rating}
                    onChange={changeHandler}
                />
                <label>Image</label>
                <input 
                    name="image"
                    type="text"
                    value={bathroomFeatures.image}
                    onChange={changeHandler}
                />
                <button type="submit">Submit</button>

            </form>

        </div>
    );

};

export default AddBathroom;

import React, { useEffect, useState } from "react";

const AddBathroom = ({onAddBathroom, existingBathroom}) => {
    
    const [bathroomFeatures, setBathroomFeatures] = useState({
        id: '',
        name: '',
        description: '',
        rating: '',
        image: ''
    });

    useEffect(() => {
        if (existingBathroom) {
            setBathroomFeatures({
                id: existingBathroom.id,
                name: existingBathroom.name,
                description: existingBathroom.description,
                rating: existingBathroom.rating,
                image: existingBathroom.image
            });
        }
    }, []);
    
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setBathroomFeatures((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!existingBathroom) {
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
            }).then(() => onAddBathroom())
        } else {
            event.preventDefault();
            let updated = {};
            for (const [key, value] of Object.entries(bathroomFeatures)) {
                if (bathroomFeatures[key] != existingBathroom[key]) {
                    console.log("current " + bathroomFeatures[key] + ", last " + existingBathroom[key]);
                    Object.assign(updated, {[key]: value});
                }
            }
            if (updated.handleBathroomChange) {
                delete updated["handleBathroomChange"];
            }
            console.log(Object.assign({"id": bathroomFeatures.id}, updated));

            fetch("http://localhost:8080/update-bathroom", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(Object.assign({"id": bathroomFeatures.id}, updated))
            }).then(() => onAddBathroom());
     
        }
    
    
        setBathroomFeatures({
            id: '',
            name: '',
            description: '',
            rating: '',
            image: ''
        });
        
        existingBathroom = null;
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

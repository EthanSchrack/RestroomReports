import React, { useEffect, useState } from "react";

const AddBathroom = ({onAddBathroom, existingBathroom, onClose}) => {
    
    const [bathroomFeatures, setBathroomFeatures] = useState({
        id: '',
        name: '',
        description: '',
        rating: '',
        image: '',
        latitude: 0.0,
        longitude: 0.0
    });

    useEffect(() => {
        if (existingBathroom) {
            setBathroomFeatures({
                id: existingBathroom.id,
                name: existingBathroom.name,
                description: existingBathroom.description,
                rating: existingBathroom.rating,
                image: existingBathroom.image,
                latitude: existingBathroom.latitude,
                longitude: existingBathroom.longitude
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
                "image": bathroomFeatures.image,
                "latitude": bathroomFeatures.latitude,
                "longitude": bathroomFeatures.longitude
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
            image: '',
            latitude: null,
            longitude: null
        });
        
        existingBathroom = null;
        onClose();
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
                <label>Latitude</label>
                <input 
                    name="latitude"
                    type="number"
                    value={bathroomFeatures.latitude}
                    onChange={changeHandler}
                />
                <label>Longitude</label>
                <input 
                    name="longitude"
                    type="number"
                    value={bathroomFeatures.longitude}
                    onChange={changeHandler}
                />
                <button type="submit">Submit</button>

            </form>

        </div>
    );

};

export default AddBathroom;
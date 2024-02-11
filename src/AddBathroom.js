import React, { useEffect, useState } from "react";
import MapPickerContainer from "./MapPickerContainer";


import "./AddBathroom.css";

const AddBathroom = ({ onAddBathroom, existingBathroom, onClose }) => {

    const [bathroomFeatures, setBathroomFeatures] = useState({
        id: '',
        name: '',
        description: '',
        rating: 0,
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
                latitude: parseFloat(existingBathroom.latitude),
                longitude: parseFloat(existingBathroom.longitude)
            });
        }
    }, []);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setBathroomFeatures((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    
    };

    const locationChangeHandler = (lat, lng) => {
        setBathroomFeatures((prevData) => ({
            ...prevData,
            latitude: lat,
            longitude: lng
        }));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!existingBathroom) {
            fetch("http://50.116.37.86:8080/add-bathroom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "name": bathroomFeatures.name,
                    "description": bathroomFeatures.description,
                    "image": bathroomFeatures.image,
                    "rating": bathroomFeatures.rating,
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
                    Object.assign(updated, { [key]: value });
                }
            }
            if (updated.handleBathroomChange) {
                delete updated["handleBathroomChange"];
            }
            console.log(Object.assign({ "id": bathroomFeatures.id }, updated));

            fetch("http://50.116.37.86:8080/update-bathroom", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(Object.assign({ "id": bathroomFeatures.id }, updated))
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
                <label class="text">Name</label>
                <input
                    name="name"
                    type="text"
                    value={bathroomFeatures.name}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <label class="text">Description</label>
                <input
                    name="description"
                    type="text"
                    value={bathroomFeatures.description}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <label class="text">Rating</label>
                <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={bathroomFeatures.rating}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <label class="text">Image</label>
                <input
                    name="image"
                    type="text"
                    value={bathroomFeatures.image}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <label class="text">Latitude</label>
                <input
                    name="latitude"
                    type="number"
                    value={bathroomFeatures.latitude}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <label class="text">Longitude</label>
                <input
                    name="longitude"
                    type="number"
                    value={bathroomFeatures.longitude}
                    onChange={changeHandler}
                    class="textbox"
                />
                <br></br>
                <button type="submit" class="submit">Submit</button>

            </form>
            <span class="map">
                <MapPickerContainer onLocationChange={locationChangeHandler} />
            </span>
        </div>
    );

};

export default AddBathroom;

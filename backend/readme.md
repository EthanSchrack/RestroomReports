## BathroomReports backend
To start the server on your computer: **npm run start-server**

Make sure requests to the server have the ***"Content-Type/application/json"*** header or it will crash :((

**GET /bathrooms** - returns a list of all bathrooms

**POST /add-bathroom** - requires a JSON object in the body with a name, description, and image URL, and returns the unique ID of the newly created bathroom.

**GET /details?id=(id)** - Requires the unique ID of a bathroom in the URL, and returns a JSON object with the details of that bathroom.

**PUT /update-bathroom** - Requires a JSON object in the body with the unique ID of the bathroom and the properties you want to change, returns a JSON object that confirms that the properties that were changed
.
**DELETE /delete-bathroom?id=(id)** - Requires the unique ID of a bathroom in the URL, returns a JSON object that confirms that the object was deleted.


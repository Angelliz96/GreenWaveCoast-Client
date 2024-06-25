import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import resources from '../data/resources';


const Update = () => {
  const { resourceId } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState({});


  useEffect(() => {
    fetch(`http://localhost:8080/api/resources/${resourceId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResource(data);
      })
      .catch((error) => console.error("Error fetching resource:", error));
  }, [resourceId]);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update method ran");


    const body = {
      category: e.target.category.value,
      subTitle: e.target.subTitle.value,
      listingTitle: e.target.listingTitle.value,
      address: e.target.address.value,
      number: e.target.number.value,
      email: e.target.email.value,
      webPage: e.target.webPage.value,
      description: e.target.description.value,
      listingDescription: e.target.listingDescription.value,
      image: e.target.image.value,
    };


    fetch(`http://localhost:8080/api/resources/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resource updated:", data);
        setResource(data);
        navigate("/admin");
      })
      .catch((error) => console.error("Error updating resource:", error));
  };


 
  const allSubcategories = resources.flatMap(resource => resource.subcategories);


  return (
    <div className="contact-form">
      <main>
        <h2>Update Page</h2>
        <form onSubmit={handleUpdate}>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" required>
            <option value="Energy">Renewable Energy Solutions</option>
            <option value="local_food">Local Food</option>
            <option value="local_resources">Local Resources</option>
            <option value="transportation">Transportation</option>
            <option value="Waste">Waste</option>
            <option value="government">Government Programs</option>
            <option value="Water">Water</option>
          </select>
          <br />
          <label htmlFor="subTitle">Sub Category:</label>
          <select id="subTitle" name="subTitle" required>
            {allSubcategories.map((subcategory, index) => (
              <option key={index} value={subcategory.title}>
                {subcategory.title}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="listingTitle">Listing Title:</label>
          <input
            type="text"
            id="listingTitle"
            name="listingTitle"
            placeholder="Enter listing title"
            required
          />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <br />
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Enter phone number"
            required
          />
          <br />
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image"
            required
          />
          <br />
          <label htmlFor="webPage">Web Page:</label>
          <input
            type="text"
            id="webPage"
            name="webPage"
            placeholder="Enter web page"
            required
          />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            required
          ></textarea>
          <br />
          <label htmlFor="listingDescription">Extra coments</label>
          <textarea
            id="listingDescription"
            name="listingDescription"
            placeholder="Enter listing description"
            required
          ></textarea>
          <br />
          <input type="submit"value= "Submit"/>
        </form>
      </main>
    </div>
  );
};


export default Update;




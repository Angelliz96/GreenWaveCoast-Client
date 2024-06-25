import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const body = {
      category: event.target.category.value,
      email: event.target.email.value,
      description: event.target.description.value,
      title: event.target.title.value,
      number: event.target.number.value,
      zipCode: event.target.zipCode.value,
      webPage: event.target.webPage.value,
    };
    fetch(`http://localhost:8080/api/`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate(`/admin`);
      })
      .catch((error) => console.log("error :>> ", error));
  };
  return (
    <main>
      <div className="contact-form">
        <h1>Submit Your Innovative Idea</h1>
        <p>
          Are you a visionary with a game-changing idea? Join the revolution and
          let your voice be heard! Share your groundbreaking project with us and
          be a catalyst for community growth.
        </p>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="category" className="category-label">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="category-select"
            required
          >
            <option value="farm">Farm</option>
            <option value="local_project">Local Project</option>
            <option value="recycling">Recycling</option>
            <option value="resources">Resources</option>
          </select>

          <label htmlFor="title">title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="number">number:</label>
          <input type="tel" id="number" name="number" required />

          <label htmlFor="webPage">webPage:</label>
          <input type="text" id="webPage" name="webPage" required />

          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zipCode" name="zipCode" required />

          <label htmlFor="description">Your description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
          ></textarea>
          <input type="submit" value="Submit Idea" />
        </form>
      </div>
    </main>
  );
};

export default UserPage;

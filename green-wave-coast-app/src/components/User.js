import React from 'react';
// import './UserPage.css'; 

const UserPage = () => {
  return (
    <main>
      <div className="contact-form">
        <h1>Submit Your Innovative Idea</h1>
        <p>
          Are you a visionary with a game-changing idea? Join the revolution
          and let your voice be heard! Share your groundbreaking project with
          us and be a catalyst for community growth.
        </p>
        <form action="process_idea_submission.php" method="post">
          <label htmlFor="category" className="category-label">
            Category:
          </label>
          <select id="category" name="category" className="category-select" required>
            <option value="farm">Farm</option>
            <option value="local_project">Local Project</option>
            <option  value="recycling">Recycling</option>
            <option value="resources">Resources</option>
          </select>

          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />

          <label htmlFor="zipcode">Zip Code:</label>
          <input type="text" id="zipcode" name="zipcode" required />

          <label htmlFor="idea">Your Idea:</label>
          <textarea id="idea" name="idea" rows="4" required></textarea>
          <input type="submit" value="Submit Idea" />
        </form>
      </div>
    </main>
  );
};

export default UserPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      firstName: event.target.firstName.value,  
      lastName: event.target.lastName.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.email.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    fetch(`http://localhost:8080/api/admin/signup`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate(`/Update`);
      })
      .catch((error) => console.log("error :>> ", error));
  };

  return (
    <main>
      <div className="contact-form">
        <h1>Create Your Profile</h1>

        <p>
          Sure! Here's a creative message to encourage people to sign up: 🌿
          Become a Green Advocate! 🌿 Have a vision for a brighter, greener
          future? Ready to join a community dedicated to environmental
          awareness? We want YOU! 🌍💚 Sign up today and start making an impact.
          Together, we can turn small steps into giant leaps for our planet. By
          creating an account, you can: 💡 Share your innovative ideas and
          solutions. 🌱 Inspire and connect with like-minded individuals. 🤝
          Collaborate on projects that make a real difference. 📚 Access
          exclusive resources, events, and opportunities. Your voice is crucial.
          Help us create a community that's a beacon of hope and action for a
          sustainable future. 🌿✨ 🔒 Sign up now and be the change you want to
          see 🔒 Join us and take the first step towards a healthier, more
          sustainable world!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="firstName">first Name:</label>
          <input type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />

          <input type="submit" value="Create Profile" />
        </form>
        <p>
          Already have a profile? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </main>
  );
};

export default Create;

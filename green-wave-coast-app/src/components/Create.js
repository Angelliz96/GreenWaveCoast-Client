import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    };

    try {
      const response = await fetch("http://localhost:8080/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Profile created successfully", result);
      navigate("/profile");
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  return (
    <main>
    <div className="contact-form">

    <h1>Create Your Profile</h1>
    
      <p>
        Sure! Here's a creative message to encourage people to sign up: 🌿
        Become a Green Advocate! 🌿 Have a vision for a brighter, greener
        future? Ready to join a community dedicated to environmental awareness?
        We want YOU! 🌍💚 Sign up today and start making an impact. Together, we
        can turn small steps into giant leaps for our planet. By creating an
        account, you can: 💡 Share your innovative ideas and solutions. 🌱
        Inspire and connect with like-minded individuals. 🤝 Collaborate on
        projects that make a real difference. 📚 Access exclusive resources,
        events, and opportunities. Your voice is crucial. Help us create a
        community that's a beacon of hope and action for a sustainable future.
        🌿✨ 🔒 Sign up now and be the change you want to see 🔒 Join us and
        take the first step towards a healthier, more sustainable world!
      </p>
      
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />

          <button type="submit">Create Profile</button>
        </form>
        <p>
          Already have a profile? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </main>
  );
};

export default Create;

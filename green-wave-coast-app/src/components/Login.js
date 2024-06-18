import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';  

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      password: e.target.email.value,
    };

    fetch(`http://localhost:8080/api/resources/create`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate(`/user`);
      })
      .catch((error) => console.log("error :>> ", error));
  };


  return (
    <main>
      <div className="contact-form">
        <h1>Join the Change</h1>
        <p>
          Do you have a brilliant idea that could change the world? Want to be
          part of a community passionate about environmental consciousness? We
          need you! 🌍💚 Log in today and share your voice. Every small action
          counts, and together we can make a big difference. By joining, you
          can: 💡 Share your innovative ideas. 🌱 Inspire others with your
          stories. 🤝 Collaborate on impactful projects. 📚 Access exclusive
          resources and events. Your perspective is unique and essential. Let's
          make our community a beacon of hope and action for a greener future.
          🌿✨ 🔒 Log in now and start making a difference 🔒
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
        <Link to="/create">Sign up</Link>
          
        </p>
        <p>
        <Link to="/reset">I forgot my password</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;

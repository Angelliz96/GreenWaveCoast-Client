import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Password reset email sent", result);
        setMessage('Password reset email sent. Please check your inbox.');
        setTimeout(() => navigate('/login'), 5000); // Redirect to login after 5 seconds
      })
      .catch((error) => {
        console.error("Reset password error:", error);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <main>
      <div className="contact-form">
        <h1>Forgot Your Password?</h1>
        <p>
          Don't worry, it happens! Enter your email address and we'll help you
          reset your password.
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
          <button type="submit">Reset Password</button>
        </form>
        {message && <p>{message}</p>}
        <p>
          Remember your password? <a href="/login">Login here</a>.
        </p>
      </div>
    </main>
  );
};

export default ResetPage;

import React from 'react';
// import './Contact.css'; 

const Contact = () => {
  return (
    <main>
      <div className="maindiv">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>

        <p>
          Have questions, feedback, or suggestions? We're here to help! Connect with our team and learn more about our organization and initiatives. Whether you're interested in partnering with us on a project, volunteering your time and talents, or simply want to learn more about sustainability in Clatsop County, we'd love to hear from you. Reach out today and let's work together to create a greener, more sustainable future for all.
        </p>
      </div>
    </main>
  );
};

export default Contact;

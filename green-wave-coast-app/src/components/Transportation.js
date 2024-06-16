import React from 'react';
// import './Transportation.css'; 

const TransportationPage = () => {
  return (
    <main>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{ fontSize: '80px' }}>
            GreenWaveCoast
          </text>
        </svg>
      </div>
      <h1>Transportation and Sustainability</h1>

      <section className="electric-vehicles">
        <h2>Electric Vehicles</h2>
        <p>Explore the benefits of electric vehicles and how they contribute to sustainable transportation:</p>

        <ul className="transportation-list">
          <li><a href="#">Electric Cars</a></li>
          <li><a href="#">Electric Bikes</a></li>
         
        </ul>
      </section>

      <section className="public-transportation">
        <h2>Public Transportation</h2>
        <p>Learn about the advantages of using public transportation for a more sustainable and eco-friendly commute:</p>

        <ul className="transportation-list">
          <li><a href="#">Bus Systems</a></li>
          <li><a href="#">Subway and Light Rail</a></li>
          
        </ul>
      </section>

      <section className="biking">
        <h2>Biking</h2>
        <p>Discover the benefits of biking for both personal health and the environment, along with safety tips:</p>

        <ul className="transportation-list">
          <li><a href="#">Bike Commuting</a></li>
          <li><a href="#">Bike-sharing Programs</a></li>
         
        </ul>
      </section>
    </main>
  );
};

export default TransportationPage;

import React from 'react';
// import './WaterPage.css'; 

const WaterPage = () => {
  return (
    <main>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{ fontSize: '80px' }}>
            GreenWaveCoast
          </text>
        </svg>
      </div>
      <h1>Water and Sustainability</h1>

      <section className="water-conservation">
        <h2>Water Conservation</h2>
        <p>Learn about the importance of water conservation and how you can contribute to saving water:</p>

        <ul className="water-list">
          <li><a href="#">Tips for Efficient Water Use</a></li>
          <li><a href="#">Water-Saving Technologies</a></li>
         
        </ul>
      </section>

      <section className="water-quality">
        <h2>Water Quality</h2>
        <p>Explore information about water quality and ways to ensure clean and safe water:</p>

        <ul className="water-list">
          <li><a href="#">Understanding Water Quality Parameters</a></li>
          <li><a href="#">Testing and Monitoring Water Quality</a></li>
      
        </ul>
      </section>

      <section className="local-resources">
        <h2>Local Resources</h2>
        <p>Discover local organizations and resources dedicated to water-related issues in our community:</p>

        <ul className="resource-list">
          <li><a href="#">Local Water Conservation Group</a></li>
          <li><a href="#">Community River Cleanup Events</a></li>
          
        </ul>
      </section>
    </main>
  );
};

export default WaterPage;

import React from 'react';
// import './WastePage.css'; 

const WastePage = () => {
  return (
    <main>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{ fontSize: '80px' }}>
            GreenWaveCoast
          </text>
        </svg>
      </div>
      <h1>Waste and Sustainability</h1>
      <nav className="main-nav">
     
      </nav>

      <section className="waste-reduction">
        <h2>Waste Reduction</h2>
        <p>Explore tips and practices for reducing waste in your daily life:</p>

        <ul className="waste-list">
          <li><a href="#">Zero Waste Lifestyle</a></li>
          <li><a href="#">Composting at Home</a></li>
          
        </ul>
      </section>

      <section className="recycling-guidelines">
        <h2>Recycling Guidelines</h2>
        <p>Learn about proper recycling practices and guidelines to promote effective waste management:</p>

        <ul className="waste-list">
          <li><a href="#">Sorting Recyclables</a></li>
          <li><a href="#">Recycling Collection Schedules</a></li>
         
        </ul>
      </section>

      <section className="local-resources">
        <h2>Local Resources</h2>
        <p>Discover local organizations and resources dedicated to waste reduction and sustainable practices:</p>

        <ul className="resource-list">
          <li><a href="#">Community Recycling Center</a></li>
          <li><a href="#">Waste Reduction Workshops</a></li>
         
        </ul>
      </section>
    </main>
  );
};

export default WastePage;

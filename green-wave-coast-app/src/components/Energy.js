import React from 'react';
// import './Energy.css'; 

const EnergyPage = () => {
  return (
    <main>
      <div className="wrapper">
        <svg>
          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            style={{ fontSize: '80px' }}
          >
            GreenWaveCoast
          </text>
        </svg>
      </div>
      <h1>Energy and Sustainability</h1>
      
      <section className="renewable-energy">
        <h2>Renewable Energy</h2>
        <p>Discover the benefits of renewable energy sources and how they contribute to sustainability:</p>

        <ul className="energy-list">
          <li><a href="#">Solar Energy</a></li>
          <li><a href="#">Wind Energy</a></li>
          <li><a href="#">Hydropower</a></li>
          
        </ul>
      </section>

      <section className="energy-efficiency">
        <h2>Energy Efficiency</h2>
        <p>Learn about energy-efficient practices to reduce environmental impact and lower energy bills:</p>

        <ul className="energy-list">
          <li><a href="#">Home Energy Audits</a></li>
          <li><a href="#">Energy-Efficient Appliances</a></li>
          <li><a href="#">Insulation and Weatherization</a></li>
          
        </ul>
      </section>

      <section className="government-laws">
        <h2>Government Laws and Regulations</h2>
        <p>Explore the laws and regulations related to energy and sustainability:</p>

        <ul className="energy-list">
          <li><a href="#">Renewable Energy Standards</a></li>
          <li><a href="#">Energy Efficiency Policies</a></li>
          <li><a href="#">Waste Management Laws</a></li>
         
        </ul>
      </section>

      <section className="tips">
        <h2>Energy-Saving Tips</h2>
        <p>Explore simple tips for reducing energy consumption in your daily life:</p>

        <ul className="energy-list">
          <li>Turn off lights and appliances when not in use</li>
          <li>Use energy-efficient light bulbs</li>
          <li>Unplug chargers and electronics when not needed</li>
          
        </ul>
      </section>
    </main>
  );
};

export default EnergyPage;

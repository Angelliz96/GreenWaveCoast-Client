import React from 'react';
// import './Government.css'; 

const Government = () => {
  return (
    <main>
      <div className="wrapper">
        <svg>
          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
          >
            GreenWaveCoast
          </text>
        </svg>
      </div>

      <h1>Government Programs and Incentives</h1>

      <section className="programs">
        <h2>Government Programs and Incentives</h2>

        <p>Explore the following government initiatives to support sustainability:</p>

        <div className="program-category">
          <h3>Energy Efficiency Upgrades</h3>
          <p>Information on programs and incentives for improving energy efficiency in homes and businesses.</p>
          <ul>
            <li><a href="#">Program 1</a></li>
            <li><a href="#">Program 2</a></li>
            <li><a href="#">Program 3</a></li>
          </ul>
        </div>

        <div className="program-category">
          <h3>Renewable Energy Installations</h3>
          <p>Learn about government support for the installation of renewable energy systems.</p>
          <ul>
            <li><a href="#">Program 1</a></li>
            <li><a href="#">Program 2</a></li>
            <li><a href="#">Program 3</a></li>
          </ul>
        </div>

        <div className="program-category">
          <h3>Water Conservation Measures</h3>
          <p>Explore incentives for implementing water-saving technologies and practices.</p>
          <ul>
            <li><a href="#">Program 1</a></li>
            <li><a href="#">Program 2</a></li>
          </ul>
        </div>

        <div className="program-category">
          <h3>Sustainable Transportation</h3>
          <p>Find information on government programs promoting sustainable transportation options.</p>
          <ul>
            <li><a href="#">Program 1</a></li>
            <li><a href="#">Program 2</a></li>
          </ul>
        </div>
      </section>

      <section className="links">
        <h2>Relevant Government Links</h2>

        <p>Explore the official websites of government agencies responsible for environmental protection, energy regulation, and waste management:</p>

        <ul>
          <li><a href="#">Environmental Protection Agency</a></li>
          <li><a href="#">Department of Energy</a></li>
          <li><a href="#">Waste Management Authority</a></li>
        </ul>
      </section>
    </main>
  );
};

export default Government;

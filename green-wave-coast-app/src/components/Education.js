import React from 'react';
// import './Education.css'; 

const Education = () => {
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
      <h1>
        <a href="sustainability.html">What is Sustainability?</a>
      </h1>
      <ul>
        <li><a href="#">Interactive Modules</a></li>
        <li><a href="#">Downloadable Guides</a></li>
        <li><a href="#">Video Tutorials</a></li>
      </ul>
      <section className="tips">
        <h2>Tips for Sustainable Living</h2>
        <p>Discover practical tips to incorporate sustainability into your daily life:</p>
      </section>
    </main>
  );
};

export default Education;

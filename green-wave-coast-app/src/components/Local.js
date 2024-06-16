import React from 'react';
// import './LocalInfo.css'; 
const LocalInfoPage = () => {
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

      <h1>Local Information for Clatsop County</h1>

      <div className="resource-category">
        <h2>Local Directories</h2>
        <div className="resource-list">
          <h3>Farmers' Markets</h3>
          <ul>
            <li><a href="#">Market 1</a></li>
            <li><a href="#">Market 2</a></li>
            <li><a href="#">Market 3</a></li>
          </ul>
        </div>

        <div className="resource-list">
          <h3>Community Gardens</h3>
          <ul>
            <li><a href="#">Garden 1</a></li>
            <li><a href="#">Garden 2</a></li>
          </ul>
        </div>

        <div className="resource-list">
          <h3>Recycling Centers</h3>
          <ul>
            <li><a href="#">Recycling Center 1</a></li>
            <li><a href="#">Recycling Center 2</a></li>
          </ul>
        </div>

        <div className="resource-list">
          <h3>Eco-Friendly Businesses</h3>
          <ul>
            <li><a href="#">Business 1</a></li>
            <li><a href="#">Business 2</a></li>
            <li><a href="#">Business 3</a></li>
            <li><a href="#">Business 4</a></li>
            <li><a href="#">Business 5</a></li>
            <li><a href="#">Business 6</a></li>
          </ul>
        </div>
      </div>

      <section className="maps">
        <h2>Local Maps</h2>

        <div className="map-category">
          <h3>Bike Paths and Trails</h3>
        
        </div>

        <div className="map-category">
          <h3>Public Transit Routes</h3>
          
        </div>

        <div className="map-category">
          <h3>Bike-Sharing Programs</h3>
          <p>Find information on local bike-sharing programs.</p>
        </div>

        <div className="map-category">
          <h3>Electric Vehicle Charging Stations</h3>
          <p>Locate electric vehicle charging stations in Clatsop County.</p>
        </div>
      </section>
    </main>
  );
};

export default LocalInfoPage;

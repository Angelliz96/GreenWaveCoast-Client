import React from 'react';
// import './Food.css'; 

const FoodPage = () => {
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
      <h1>Food and Sustainability</h1>
      <nav className="main-nav">
        
      </nav>

      <section className="sustainable-farming">
        <h2>Sustainable Farming</h2>
        <p>Explore sustainable farming practices that contribute to environmental conservation:</p>

        <ul className="food-list">
          <li><a href="#">Organic Farming</a></li>
          <li><a href="#">Permaculture Techniques</a></li>
      
        </ul>
      </section>

      <section className="plant-based-diets">
        <h2>Plant-Based Diets</h2>
        <p>Learn about the benefits of plant-based diets for personal health and the environment:</p>

        <ul className="food-list">
          <li><a href="#">Vegetarianism</a></li>
          <li><a href="#">Vegan Lifestyle</a></li>
    
        </ul>
      </section>

      <section className="local-food-sources">
        <h2>Local Food Sources</h2>
        <p>Discover local sources for sustainable and locally-produced food items:</p>

        <ul className="resource-list">
          <li><a href="#">Farmers' Markets</a></li>
          <li><a href="#">Community Supported Agriculture (CSA)</a></li>
          
        </ul>
      </section>
    </main>
  );
};

export default FoodPage;

import React from 'react';
// import './Resources.css'; 

const ResourcesPage = () => {
  return (
    <main>
      <div className="title-home-page">
        <h1>BUILD A SUSTAINABLE FUTURE ONE WAVE AT A TIME</h1>
      </div>

      <div className="maindiv">
        <div className="containerhome">
          <div className="headerMain">
            <h2>
              <a href="education.html">Educational Resources:</a>
            </h2>
          </div>
          <div className="textContainer">
            <p>
              Step into our Educational Resources section, your one-stop
              destination for expanding your knowledge and skills in sustainable
              living. Dive into a treasure trove of carefully curated articles,
              videos, and interactive tools designed to inform and inspire your
              journey towards a more eco-conscious lifestyle. Whether you're
              seeking practical tips for reducing your carbon footprint or
              exploring the latest innovations in renewable energy, our
              educational resources are here to empower you to make informed
              choices and meaningful contributions to environmental stewardship
              in Clatsop County and beyond
            </p>
            <img
              src="/IMAGES/pexels-ayşegül-15167024.jpg"
              alt="Hand with oyster in the beach"
            />
          </div>

          <div className="headerMain">
            <h2>
              <a href="localinf.html">Local information:</a>
            </h2>
          </div>
          <div className="textContainer">
            <img src="./IMAGES/pexels-cottonbro-studio-3737624.jpg" alt="Orange in a bag" />
            <p>
              Explore the wealth of local resources available in Clatsop County
              through our Local Information section. From farmers' markets
              bursting with fresh produce to community gardens teeming with
              vibrant flowers, this section is your guide to all things local.
              Discover hidden gems, support small businesses, and connect with
              fellow community members passionate about sustainability. Whether
              you're a long-time resident or a newcomer to the area, there's
              something here for everyone to enjoy and explore.
            </p>
          </div>

          <div className="headerMain">
            <h2>
              <a href="goverment.html">Government Programs and Incentives:</a>
            </h2>
          </div>
          <div className="textContainer">
            <p>
              Unlock the potential of government programs and incentives to
              support your sustainability efforts with our Government Programs
              and Incentives section. Here, you'll find a comprehensive overview
              of local, state, and federal initiatives aimed at promoting energy
              efficiency, renewable energy adoption, water conservation, and more.
              From rebates and tax incentives to grants and financing options,
              we'll help you navigate the landscape of available resources and
              take advantage of opportunities to save money while making a
              positive impact on the environment.
            </p>
            <img
              src="/IMAGES/pexels-ali-madad-sakhirani-1254997.jpg"
              alt="Man looks solar panel"
            />
          </div>

          <div className="headerMain">
            <h2>
              <a href="communityforus.html">Community Organizations and Events:</a>
            </h2>
          </div>
          <div className="textContainer">
            <img
              src="/IMAGES/ocg-saving-the-ocean-bWAArZ5M4Ag-unsplash.jpg"
              alt="People cleaning the beach"
            />
            <p>
              Join a vibrant community of changemakers and activists through our
              Community Organizations and Events section. From grassroots
              organizations advocating for environmental justice to volunteer
              groups leading beach cleanups and tree-planting initiatives,
              there are countless ways to get involved and make a difference in
              Clatsop County. Discover upcoming events, connect with like-minded
              individuals, and find your tribe as you work together to create a
              more sustainable and resilient community for all.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;

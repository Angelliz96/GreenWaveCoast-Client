import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Index.css";
import "../styles/mediaQueries.css";

const Home = () => {
  const [allResources, setAllResources] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/resources", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setAllResources(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return (
    <main>
      <div className="title-home-page">
        <h1>BUILD A SUSTAINABLE FUTURE ONE WAVE AT A TIME</h1>
      </div>

      

      <div className="maindiv">
        
          {/* <div className="headerMain"> */}
          
            <h2>
              {/* <Link to="/about">About us</Link> */}
            </h2>
          {/* </div> */}
          

          <div className="textContainer">
          <div className="containerhome">
            <p>
              At GreenWaveCoast, we're passionate advocates for sustainable
              living in the breathtaking coastal region of Clatsop County. Our
              mission is simple yet profound: to inspire and empower
              individuals, families, and communities to embrace
              environmentally-friendly practices that preserve our natural
              resources, protect our ecosystems, and promote a harmonious
              relationship between humans and nature. We believe that
              sustainability isn't just a buzzword; it's a way of life—one that
              benefits both present and future generations. By fostering a
              culture of conservation, innovation, and responsibility, we strive
              to create a vibrant and resilient community where people and the
              planet thrive together.
            </p>

            {/* <img
              src="./public/images/bike-share.jpg"
              alt="Team Working together"
            /> */}
          
        

        <section>
        <div className="containerhome">
        
          <h2>Resources</h2>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            allResources.map((resource) => (
              <div className="individual-resources" key={resource.id}>
                 {/* <Link to={`/resource/${resource.title}`}></Link> */}
                 
                 <h3> {resource.title}
                  <br />
                </h3>
                {resource.description}
                <br />
                <img
                  src={`/images/${resource.image}`}
                  alt={resource.title}
                  // width="200"
                />
                </div>
             
            ))
          )}
           </div>
        </section>
        
        </div>
        </div>

        
      </div>
    </main>
  );
};

export default Home;

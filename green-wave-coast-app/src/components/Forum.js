import React from 'react';
// import './Forum.css'; 

const ForumPage = () => {
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

      <h1>Community Organizations and Events</h1>

      <section className="organizations">
        <h2>Environmental Organizations and Community Groups</h2>
        <p>Explore the vibrant community organizations and groups dedicated to sustainability in Clatsop County:</p>

        <ul>
          <li><a href="#">Environmental Group 1</a></li>
          <li><a href="#">Sustainability Organization 2</a></li>
          
        </ul>
      </section>

      <section className="events">
        <h2>Upcoming Events and Initiatives</h2>
        <p>Stay informed about upcoming sustainability events, workshops, and volunteer opportunities in the local area:</p>

        <div className="event-category">
          <h3>Sustainability Events</h3>
          
        </div>

        <div className="event-category">
          <h3>Workshops and Training</h3>
          
        </div>

        <div className="event-category">
          <h3>Volunteer Opportunities</h3>
          
        </div>

        <div className="event-category">
          <h3>Eco-Friendly Initiatives</h3>
       
        </div>
      </section>

      <section className="connect">
        <h2>Connect and Collaborate</h2>
        <p>Join online forums, social media groups, and community platforms to connect with like-minded individuals and collaborate on sustainability projects:</p>

        <ul>
          <li><a href="#">Sustainability Forum</a></li>
          <li><a href="#">Community Sustainability Group on Social Media</a></li>
          
        </ul>
      </section>
    </main>
  );
};

export default ForumPage;

const resources = [
    {
      _id: "1a2b3c4d5e6f7g8h9i0j",
      title: "Renewable Energy Solutions",
      category: "Energy",
      description: "Explore sustainable and renewable energy solutions with our curated directory. Discover leading providers in solar and wind power, offering innovative technologies and expert installations for homes and businesses. Join us in promoting a cleaner, greener future with efficient energy solutions that benefit both your environment and your bottom line",
      image: "windy-plains.jpg.jpeg",
      subcategories: [
        {
          title: "Solar Power",
          listings: [
            {
              title: "Sunshine Solar",
              address: "789 Solar Ave, Sun City",
              number: "+1 345 678 9012",
              email: "info@sunshinesolar.com",
              webpage: "https://www.sunshinesolar.com",
              description: "Leading provider of solar panels and installation services.",
              image: "sunshine-solar.jpg"
            }
          ]
        },
        {
          title: "Wind Power",
          listings: [
            {
              title: "Windy Plains",
              address: "456 Wind St, Breeze Town",
              number: "+1 876 543 2109",
              email: "contact@windyplains.com",
              webpage: "https://www.windyplains.com",
              description: "Harnessing wind energy for a sustainable future.",
              image: "windy-plains.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "1a2b3c4d5e5f7g8h29i0j",
      title: " Local Food",
      category: "Food",
      description: "Delve into the vibrant world of local food with our diverse selection of farms and markets. From organic produce to artisanal goods, our listings showcase the best of local agriculture and community-supported foods. Explore sustainable practices and connect with farmers and markets committed to freshness, quality, and supporting local economies. Whether you're a food enthusiast or eco-conscious consumer, discover the delicious possibilities of local food right in your neighborhood",
      image: "localmarket.jpg",
      subcategories: [
        {
          title: "Local Farms",
          listings: [
            {
              _id: "lf1",
              title: "Green Valley Farm",
              address: "789 Farm Road, Agri Town",
              number: "+1 345 678 9012",
              email: "info@greenvalleyfarm.com",
              webpage: "https://www.greenvalleyfarm.com",
              description: "Organic produce from local farmers.",
              image: "green-valley-farm.jpg"
            }
          ]
        },
        {
          title: "Local Markets",
          listings: [
            {
              _id: "lm1",
              title: "Downtown Farmers Market",
              address: "456 Market Street, City Center",
              number: "+1 234 567 8901",
              email: "info@dtfarmersmarket.com",
              webpage: "https://www.dtfarmersmarket.com",
              description: "Fresh and local produce every weekend.",
              image: "downtown-market.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "category-local",
      title: "Local Resources",
      category: "Local",
      description: "Explore the heart of your community with our curated listings of local businesses and community centers. Dive into the charm of neighborhood bakeries, cafes, and boutiques offering unique products and personalized service. Discover vibrant community centers that host a range of activities, from fitness classes to cultural events, fostering connections and enriching local life. Embrace the spirit of support and camaraderie that defines our local businesses and centers, where every visit leaves a positive impact on our shared community.",
      image: "local-resources.jpg",
      subcategories: [
        {
          title: "Local Businesses",
          listings: [
            {
              _id: "lb1",
              title: "Jane's Bakery",
              address: "123 Baker St, Flour Town",
              number: "+1 567 890 1234",
              email: "contact@janesbakery.com",
              webpage: "https://www.janesbakery.com",
              description: "Delicious homemade bread and pastries.",
              image: "janes-bakery.jpg"
            }
          ]
        },
        {
          title: "Community Centers",
          listings: [
            {
              _id: "cc1",
              title: "Downtown Community Center",
              address: "456 Community Rd, Center City",
              number: "+1 234 567 8901",
              email: "info@communitycenter.com",
              webpage: "https://www.communitycenter.com",
              description: "Offering activities and services for all ages.",
              image: "community-center.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "3c4d5e6f7g8h9i0j1a2b",
      title: "Local Government Office",
      address: "987 Civic Center, Govern Town",
      number: "+1 567 890 1234",
      email: "info@localgov.com",
      category: "Government",
      webpage: "https://www.localgov.com",
      description: "Providing essential services and support to the community.",
      image: "government-office.jpg",
      subcategories: [
        {
          title: "Municipal Services",
          listings: [
            {
              _id: "ms1",
              title: "City Hall",
              address: "123 City Hall Blvd, Govern Town",
              number: "+1 876 543 2109",
              email: "contact@cityhall.com",
              webpage: "https://www.cityhall.com",
              description: "Administrative services for the city.",
              image: "city-hall.jpg"
            }
          ]
        },
        {
          title: "Public Safety",
          listings: [
            {
              _id: "ps1",
              title: "Fire Department",
              address: "456 Fire Station Rd, Govern Town",
              number: "+1 345 678 9012",
              email: "info@firedepartment.com",
              webpage: "https://www.firedepartment.com",
              description: "Fire safety and emergency response services.",
              image: "fire-department.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "category-transportation",
      title: "Transportation",
      category: "Transportation",
      description: "Experience seamless mobility with our comprehensive transportation resources. Whether you prefer the convenience of public buses or the flexibility of bike-sharing programs, our city's transportation options cater to every journey. Navigate urban streets with ease aboard reliable city buses, connecting you to key destinations throughout the metropolitan area. Embrace sustainable travel with our bike-sharing initiatives, promoting eco-friendly commuting for short trips. Join us in reducing congestion and enhancing urban mobility with accessible and efficient transportation solutions designed to keep our city moving forward.",
      image: "transportation.jpg",
      subcategories: [
        {
          title: "Public Transport",
          listings: [
            {
              _id: "pt1",
              title: "City Bus Service",
              address: "789 Bus Terminal, Transit City",
              number: "+1 345 678 9012",
              email: "info@citybus.com",
              webpage: "https://www.citybus.com",
              description: "Reliable and affordable public bus service.",
              image: "city-bus.jpg"
            }
          ]
        },
        {
          title: "Bike Sharing",
          listings: [
            {
              _id: "bs1",
              title: "Bike Share Program",
              address: "123 Bike Lane, Cycle City",
              number: "+1 234 567 8901",
              email: "contact@bikeshare.com",
              webpage: "https://www.bikeshare.com",
              description: "Convenient bike sharing service for short trips.",
              image: "bike-share.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "category-waste",
      title: "Waste",
      category: "Waste",
      description: "Transform waste management into a sustainable practice with our dedicated services. At Eco Recycling, we provide comprehensive recycling solutions that empower individuals and businesses to reduce their environmental footprint. From paper and plastic to electronics and organic waste, our facilities are equipped to handle diverse recycling needs efficiently and responsibly. Partner with Clean City Waste Disposal for reliable waste collection and disposal services, ensuring a cleaner and greener environment for generations to come. Embrace eco-conscious choices and contribute to a cleaner community with our waste management initiatives",
      image: "waste.jpg",
      subcategories: [
        {
          title: "Recycling Services",
          listings: [
            {
              _id: "rs1",
              title: "Eco Recycling",
              address: "123 Recycle Way, Green City",
              number: "+1 567 890 1234",
              email: "info@ecorecycling.com",
              webpage: "https://www.ecorecycling.com",
              description: "Comprehensive recycling services for homes and businesses.",
              image: "eco-recycling.jpg"
            }
          ]
        },
        {
          title: "Waste Disposal",
          listings: [
            {
              _id: "wd1",
              title: "Clean City Waste Disposal",
              address: "456 Disposal Dr, Clean Town",
              number: "+1 876 543 2109",
              email: "contact@cleanwaste.com",
              webpage: "https://www.cleanwaste.com",
              description: "Efficient waste collection and disposal services.",
              image: "waste-disposal.jpg"
            }
          ]
        }
      ]
    },
    {
      _id: "category-water",
      title: "Water",
      category: "Water",
      description: "Promote water conservation and purity with our dedicated initiatives. Save Water Initiative leads the charge in advocating sustainable water practices, encouraging communities to adopt efficient water use strategies. Meanwhile, Pure Water Solutions ensures access to clean drinking water through state-of-the-art purification technologies, safeguarding public health and well-being. Embrace our commitment to water stewardship and join us in preserving this vital resource for future generations. Together, let's secure a sustainable water future for all.",
      image: "cleaning.jpn",
      subcategories: [
        {
          title: "Water Conservation",
          listings: [
            {
              _id: "wc1",
              title: "Save Water Initiative",
              address: "789 Conservation Rd, Water City",
              number: "+1 345 678 9012",
              email: "info@savewater.com",
              webpage: "https://www.savewater.com",
              description: "Promoting water conservation practices.",
              image: "save-water.jpg"
            }
          ]
        },
        {
          title: "Water Purification",
          listings: [
            {
              _id: "wp1",
              title: "Pure Water Solutions",
              address: "123 Purity Blvd, Water City",
              number: "+1 234 567 8901",
              email: "contact@purewater.com",
              webpage: "https://www.purewater.com",
              description: "Providing clean and safe drinking water.",
              image: "pure-water.jpg"
            }
          ]
        }
      ]
    }
  ];
  
  export default resources;
  
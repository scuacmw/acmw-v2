import './Home.css'; // Make sure you have a corresponding CSS file
import image1 from '../assets/text.png';
import image2 from '../assets/boardpic.png';
import image3 from '../assets/h4hPhoto1.jpg';
import image4 from '../assets/groupPic1.jpeg';
import image5 from '../assets/acmAcmwPhoto.jpeg';
import image6 from '../assets/cookiesocial.png';
import React, { useRef } from 'react';



const Home = () => {
  const eventsRef = useRef(null);
  //const updatesRef = useRef(null);
  const aboutUsRef = useRef(null);

  // Scroll function to target section
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = -80; 
      const top = ref.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <header className="header">
        <div className="front">
          <div className="leftcontainer">
            <div className="top">
              <div className="circlecont">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div> 
            </div>
            <div className="topbottom"></div>
            <img src={image1} alt="text" className="image1" />
          </div>
          <div className="rightcontainer">
            <div className="diamond-bg">
              <img src={image2} alt="Board" className="image2" />
            </div>
          </div>  
        </div>
      </header>

      <div className="learncontainer">
        <h1>Learn More</h1>
        <div className="icons">
          <div className="eventsbutton" onClick={() => scrollToSection(eventsRef)}>Upcoming Events</div>
          <div className="aboutbutton" onClick={() => scrollToSection(aboutUsRef)}>About ACM-W</div>
        </div>
      </div>

      <div ref={eventsRef} className="upcomingeventbox">
        <h1>UPCOMING EVENTS</h1>
        <div className="info">
          <p>Cookie Decorating Social</p>
          <p>Wednesday, Dec 3, 2025</p>
          <p>Location: SCDI 2306</p>
        </div>
        <img src={image6} alt="upcoming event" className="upcomingimage" />
      </div>

    <div ref={aboutUsRef} className="title"><h1>About Us</h1></div>
  <div className="about-us">
    <div className= "eventsact">
      <img src={image3} alt="events and acts" className="about-us-image" />
      <h1>Events & Activities</h1>
     <p>We provide professional development workshops, academic & technical workshops,  networking events with industry representatives, mentorship events! We also engage in the Women's March, Grace Hopper Conference, and Hack for Humanity!</p>

    </div>
    <div className= "ourmission">
      <img src={image4} alt="update" className="updateimage" />
      <h1>Our Mission</h1>
      <p>SCU's ACM-W chapter advocates for women's engagement in computing. We foster a learning environment where women can become passionate about CS. We strive to inspire our members with knowledge about women's contributions to technology and empower women to pursue their goals.</p>
  
    </div>
    <div className= "ACMchap">
      <img src={image5} alt="update" className="updateimage" />
      <h1>ACM SCU Chapter</h1>
      <p>ACM is our brother organization at SCU. While we dedicate ourselves to the advancement of women in computer science, we welcome all to our club. You should feel welcome at ACM's events as well! We love to see our members interact with both clubs.</p>
    </div>

  </div>
  </div>
     
  );
};

export default Home;

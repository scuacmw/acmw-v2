import React from 'react';
import './Board.css';
import image6 from '../assets/maddie.jpg'; //President
import image7 from '../assets/arya.jpg'; //Vice President
import image8 from '../assets/Gina_Chiu.jpg'; //PR and Media
import image9 from '../assets/sanjna.jpg'; //hackathon coordinator
import image10 from '../assets/sara.jpg'; //co-director of events
import image11 from '../assets/Anna_Aldrin.png'; //co director of events
import image12 from '../assets/kaavya.jpg'; // web master
import image13 from '../assets/daniela.jpg'; // cybersisters event director
import image14 from '../assets/tanvi.jpg'; //college and career advisor
import image15 from '../assets/priyanka.jpg'; //secretary
import image16 from '../assets/cath.jpg'; // treasurer
import image18 from '../assets/paulina.jpg'; //IL 1
import image19 from '../assets/emaan.jpg'; //IL 2
import image20 from '../assets/meettheboardbanner.png';
import image21 from '../assets/Laila_Heigre.jpg';
import image22 from '../assets/Priyanka_Burra.jpg';
import image23 from '../assets/jake.jpg';
import image24 from '../assets/anish.jpg';
import image25 from '../assets/abhi.jpg';
import image26 from '../assets/ivy.jpg';
import image27 from '../assets/lindsey.jpg';
import image28 from '../assets/chris.jpg';
import image29 from '../assets/marg.jpg';
import image30 from '../assets/carys.jpg';
import image31 from '../assets/alan.jpg';
import image32 from '../assets/tiffany.jpg';
import image33 from '../assets/rayyan.jpg';
import image34 from '../assets/matt.jpg';
import image35 from '../assets/espy.jpg';
import image36 from '../assets/mariam.png';


const boardMembers = [
  { name: 'Maddie Follosco', role: 'President', image: image6 },
  { name: 'Arya Deshpande', role: 'Vice President', image: image7 },
  { name: 'Gina Chiu', role: 'Director of Media and PR', image: image8 },
  { name: 'Priyanka Ganguly', role: 'Secretary', image: image15 },
  { name: 'Kaavya Jethwa', role: 'Web-Master', image: image12 },
  { name: 'Anna Aldrin', role: 'Director of Events', image: image11 },
  { name: 'Sara Donnelly', role: 'Events Coordinator', image: image10 },
  { name: 'Catherine Hung', role: 'Treasurer', image: image16 },
  { name: 'Tanvi Gandhi', role: 'Career and Conference Advisor', image: image14 },
  { name: 'Sanjna Sood', role: 'Hack-a-thon Coordinator', image: image9 },
  { name: 'Emaan Zaidi', role: 'Industry Liaison', image: image19 },
  { name: 'Daniela Casillas', role: 'Cybersisters Coordinator', image: image13 },
  { name: 'Paulina Landry', role: 'Industry Liaison', image: image18 },
  { name: 'Priyanka Burra', role: "Freshman Representative", image: image22 },
  { name: 'Laila Heigre', role: "Freshman Representative", image: image21 }
];

// Placeholder section: add your imports above (e.g. import imageXX from '../assets/Name.jpg') and replace null with the variable
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/220';
const boardMembersSecondary = [
  { name: 'Jake Esperson', role: 'President', image: image23 },
  { name: 'Anish Katragadda', role: 'Vice President', image: image24 },
  { name: 'Abhinav Ala', role: 'Workshop Coordinator', image: image25 },
  { name: 'Ivy Zhuang', role: 'Webmaster', image: image26 },
  { name: 'Lindsey Leong', role: 'Outreach Coordinator', image: image27 },
  { name: 'Chris Shobe', role: 'Treasurer', image: image28 },
  { name: 'Margarita Schemel', role: 'Social Media Manager', image: image29 },
  { name: 'Carys Chiu', role: 'Industry Liaison', image: image30 },
  { name: 'Alan Fung', role: 'Industry Liaison', image: image31 },
  { name: 'Tiffany Le', role: 'Secretary', image: image32 },
  { name: 'Rayyan Hussain', role: 'Hackathon Coordinator', image: image33 },
  { name: 'Matthias Masiera', role: 'Event Coordinator', image: image34 },
  { name: 'Esperanza Aguilar', role: 'Underclassmen Representative', image: image35 },
  { name: 'Mariam Shihab', role: 'Underclassmen Representative', image: image36 },
];

const Board = () => {
  return (
    <div className="board-page">
      <div className="banner">
        <img src={image20} alt="Board banner" className="banner-image" />
        <div className="banner-title">
          <h1 className="board-title">2025-2026</h1>
        </div>
      </div>
      
      <div className="members-container">
        {boardMembers.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image-frame">
              <img src={member.image} alt={member.name} className="member-image" />
            </div>
            <h2 className="member-name">{member.name}</h2>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>

      <section className="board-section">
        <h2 className="board-section-title">ACM Board</h2>
        <div className="members-container">
          {boardMembersSecondary.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-image-frame">
                <img
                  src={member.image || PLACEHOLDER_IMAGE}
                  alt={member.name}
                  className="member-image"
                />
              </div>
              <h2 className="member-name">{member.name}</h2>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Board;

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
import prez_acm from '../assets/acmBoard/chris.jpg';
import vp_acm from '../assets/acmBoard/rayyan.jpg';
import wc_acm from '../assets/acmBoard/espy.jpg';
import web_acm from '../assets/acmBoard/neelasha.jpg';
import oc_acm from '../assets/acmBoard/sunjana.jpg';
import tres_acm from '../assets/acmBoard/carys.jpg';
import mc_acm from '../assets/acmBoard/lauren.jpg';
import il1_acm from '../assets/acmBoard/puneet.jpg';
import il2_acm from '../assets/acmBoard/ashwini.jpg';
import sec_acm from '../assets/acmBoard/mariam.jpg';
import hc_acm from '../assets/acmBoard/ahbi.jpg';

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
  { name: 'Chris Shobe', role: 'President', image: prez_acm },
  { name: 'Rayyan Hussain', role: 'Vice President', image: vp_acm },
  { name: 'Esperanza Aguilar', role: 'Workshop Coordinator', image: wc_acm },
  { name: 'Neelasha Sudarshan', role: 'Webmaster', image: web_acm },
  { name: 'Sunjana Banwait', role: 'Outreach Coordinator', image: oc_acm },
  { name: 'Carys Chiu', role: 'Treasurer', image: tres_acm },
  { name: 'Lauren Kimura', role: 'Marketing Coordinator', image: mc_acm },
  { name: 'Puneet Gella', role: 'Industry Liaison', image: il1_acm },
  { name: 'Ashwini Anantharaman', role: 'Industry Liaison', image: il2_acm },
  { name: 'Mariam Shihab', role: 'Secretary', image: sec_acm },
  { name: 'Abhinav Ala', role: 'Hackathon Coordinator', image: hc_acm },
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

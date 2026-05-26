import React from 'react';
import './Board.css';
import prez_acmw from '../assets/acmwBoard/arya.jpg'; //President
import vp_acmw from '../assets/acmwBoard/sara.jpg'; //Vice President
import pr_acmw from '../assets/acmwBoard/leslie.jpeg'; //Director of Media and PR
import hc_acmw from '../assets/acmwBoard/kaavya.jpg'; //hackathon coordinator
import tc_acmw from '../assets/acmwBoard/tanvi.jpg'; //technical events coordinator
import web_acmw from '../assets/acmwBoard/paulina.jpg'; // web master
import soc_acmw from '../assets/acmwBoard/daniela.jpg'; // social events coordinator
import con_acmw from '../assets/acmwBoard/faith.jpeg'; //conference and career strategist
import sec_acmw from '../assets/acmwBoard/shrim.jpeg'; //secretary
import tres_acmw from '../assets/acmwBoard/priyanjal.png'; // treasurer
import il1_acmw from '../assets/acmwBoard/anvita.png'; //IL 1
import il2_acmw from '../assets/acmwBoard/Priyanka_Burra.jpg'; //IL 2
import image20 from '../assets/meettheboardbanner.png';
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
  { name: 'Arya Deshpande', role: 'President', image: prez_acmw },
  { name: 'Sara Donnelley', role: 'Vice President', image: vp_acmw },
  { name: 'Shrimayi Sinkar babu Bharathy', role: 'Secretary', image: sec_acmw },
  { name: 'Priyanjal Poswal', role: 'Treasurer', image: tres_acmw },
  { name: 'Paulina Landry', role: 'Web-Master', image: web_acmw },
  { name: 'Leslie Mejia', role: 'Director of Media and PR', image: pr_acmw },
  { name: 'Tanvi Gandhi', role: 'Technical Events Coordinator', image: tc_acmw },
  { name: 'Daniela Casillas', role: 'Social Events Coordinator', image: soc_acmw },
  { name: 'Faith Ogunfunmi', role: 'Conference/Career Strategist', image: con_acmw },
  { name: 'Kaavya Jethwa', role: 'Hack-a-thon Coordinator', image: hc_acmw },
  { name: 'Anvita Buddhavaram', role: 'Industry Liaison', image: il1_acmw },
  { name: 'Priyanka Burra', role: 'Industry Liaison', image: il2_acmw },
];

// Placeholder section: add your imports above (e.g. import imageXX from '../assets/Name.jpg') and replace null with the variable
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/220';
const boardMembersSecondary = [
  { name: 'Chris Shobe', role: 'anPresident', image: prez_acm },
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

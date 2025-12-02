import React from 'react';
import './Board.css';
import image6 from '../assets/Maddie_Follosco.jpeg'; //President
import image7 from '../assets/Arya_Deshpande.jpg'; //Vice President
import image8 from '../assets/Gina_Chiu.jpg'; //PR and Media
import image9 from '../assets/Sanjna_Sood.png'; //hackathon coordinator
import image10 from '../assets/Sara_Donnelly.jpg'; //co-director of events
import image11 from '../assets/Anna_Aldrin.png'; //co director of events
import image12 from '../assets/Kaavya_Jethwa.jpg'; // web master
import image13 from '../assets/Daniela_Casillas.jpg'; // cybersisters event director
import image14 from '../assets/Tanvi_Gandhi.jpg'; //college and career advisor
import image15 from '../assets/Priyanka_Ganguly.JPG'; //secretary
import image16 from '../assets/Catherine_Hung.jpeg'; // treasurer
import image18 from '../assets/Paulina_Landry.JPEG'; //IL 1
import image19 from '../assets/Emaan_Zaidi.JPG'; //IL 2
import image20 from '../assets/meettheboardbanner.png';


const boardMembers = [
  { name: 'Maddie Follosco', role: 'President', image: image6 },
  { name: 'Arya Deshpande', role: 'Vice President', image: image7 },
  { name: 'Gina Chiu', role: 'Director of Media and PR', image: image8 },
  { name: 'Priyanka Ganguly', role: 'Secretary', image: image15 },
  { name: 'Kaavya Jethwa', role: 'Web-Master', image: image12 },
  { name: 'Anna Aldrin', role: 'Co-Director of Events', image: image11 },
  { name: 'Sara Donnelly', role: 'Co-Director of Events', image: image10 },
  { name: 'Catherine Hung', role: 'Treasurer', image: image16 },
  { name: 'Tanvi Gandhi', role: 'Career and Conference Advisor', image: image14 },
  { name: 'Sanjna Sood', role: 'Hack-a-thon Coordinator', image: image9 },
  { name: 'Emaan Zaidi', role: 'Industry Liaison', image: image19 },
  { name: 'Daniela Casillas', role: 'Industry Liaison', image: image13 },
  { name: 'Paulina Landry', role: 'Industry Liaison', image: image18 }
];

const Board = () => {
  return (
    <div className="board-page">
      <div className="banner">
        <img src={image20} alt="Board banner" className="banner-image" />
        <div className="banner-title">
          <h1 className="board-title">2024-2025</h1>
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
    </div>
  );
};

export default Board;

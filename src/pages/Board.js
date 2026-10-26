import React from 'react';
import './Board.css';
import BoardPopup from './boardPopup';
import prez_acmw from '../assets/acmwBoard/arya.jpg'; //President
import vp_acmw from '../assets/acmwBoard/sara.jpg'; //Vice President
import pr_acmw from '../assets/acmwBoard/leslie.jpeg'; //Director of Media and PR
import hc_acmw from '../assets/acmwBoard/kaavya.png'; //hackathon coordinator
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
import vp_acm from '../assets/acmBoard/espy.jpg';
import wc_acm from '../assets/acmBoard/lauren.jpg';
import web_acm from '../assets/acmBoard/neelasha.jpg';
import oc_acm from '../assets/acmBoard/sunjana.jpg';
import tres_acm from '../assets/acmBoard/carys.jpg';
import il1_acm from '../assets/acmBoard/puneet.jpg';
import il2_acm from '../assets/acmBoard/ashwini.jpg';
import hc_acm from '../assets/acmBoard/ahbi.jpg';

const boardMembers = [
  {
    name: 'Arya Deshpande',
    role: 'President',
    image: prez_acmw,
    bio: [
      "Hello! I'm a senior Computer Science and Engineering major from the Bay Area.",
      "I'm interested in building AI/ML and software systems that solve real-world problems, especially in the fintech space.",
    ],
  },
  {
    name: 'Sara Donnelley',
    role: 'Vice President',
    image: vp_acmw,
    bio: [
      'My dad works in IT, and he got me into programming games when I was little. I took a programming class in high school and loved it, so I decided to pursue it as a career.',
      'I am looking to go into either Quantum Computing or AI.',
    ],
  },
  {
    name: 'Shrimayi Sinkar babu Bharathy',
    role: 'Secretary',
    image: sec_acmw,
    bio: [
      'I love exploring how coding can solve meaningful mathematical problems and improve our everyday lives. I\'ve been interested in this field ever since I saw how technology made speech improvement more accessible to children.',
      "I'm pursuing a double major in Math and CS to explore developing highly accessible technology at this intersection!",
    ],
  },
  {
    name: 'Priyanjal Poswal',
    role: 'Treasurer',
    image: tres_acmw,
    bio: [], // no response yet
  },
  {
    name: 'Paulina Landry',
    role: 'Webmaster',
    image: web_acmw,
    bio: [
      "I've always loved video games, which initially sparked my interest in technology and how things work behind the scenes. During the pandemic, I also realized how important technology is in our everyday lives and how it helps people stay connected.",
      "I enjoy designing websites and problem-solving, especially when I can combine creativity with technical skills to build something useful. I love that CS allows me to bring ideas to life through technology, and I'm excited to keep exploring what I can create :D",
    ],
  },
  {
    name: 'Leslie Mejia',
    role: 'Director of Media and PR',
    image: pr_acmw,
    bio: [
      "I wanted to go into the tech world because I've always loved building and being creative, and I aspire to use these innovations for the common good.",
    ],
  },
  {
    name: 'Tanvi Gandhi',
    role: 'Technical Events Coordinator',
    image: tc_acmw,
    bio: [
      'I enjoy CS because it challenges me to think analytically and critically while solving problems in creative ways.',
      "I'm passionate about quant, and I love exploring how technology can be used to solve real-world problems.",
    ],
  },
  {
    name: 'Daniela Casillas',
    role: 'Social Events Coordinator',
    image: soc_acmw,
    bio: [
      "I'm a Computer Science student currently interested in cybersecurity and backend development, especially how technology can be used to protect people online.",
      'I became interested in this field because I want to help prevent future scams and cyber threats on social media, including hacking, impersonation, and other forms of online deception that have become common along with the rise of AI.',
    ],
  },
  {
    name: 'Faith Ogunfunmi',
    role: 'Conference/Career Strategist',
    image: con_acmw,
    bio: [
      'Joining the Girls Who Code club in middle school sparked my interest in coding. Being able to build my own projects from scratch and solve problems was very interesting to me and drove me to pursue computer science.',
      'I also really like how computer science has a wide range of fields within it, such as software engineering, cybersecurity, AI, and computer networks.',
    ],
  },
  {
    name: 'Kaavya Jethwa',
    role: 'Hackathon Coordinator',
    image: hc_acmw,
    bio: [
      "Hey, I'm Kaavya! I'm a junior CS major from the Bay Area, primarily interested in machine learning and low-level systems.",
      "I first started coding in high school and have stuck with it because I find it both useful and interesting. It's a versatile tool that can be applied to almost any problem. Outside of academics, I enjoy watching movies, reading nonfiction, and hanging out with friends.",
    ],
  },
  {
    name: 'Anvita Buddhavaram',
    role: 'Industry Liaison',
    image: il1_acmw,
    bio: [
      "I've always been fascinated by the puzzle-solving nature of computer science, which naturally drew me toward the elegance of algorithms and the thrill of tweaking them for optimal efficiency.",
      'Beyond pure problem-solving, I love working with databases, specifically transforming raw datasets and diving into the data to uncover hidden patterns and insights. Building systems that make sense of complex information is what excites me most about this field.',
    ],
  },
  {
    name: 'Priyanka Burra',
    role: 'Industry Liaison',
    image: il2_acmw,
    bio: [
      "Computer engineering has always been an interest of mine since I was younger, and I've been part of numerous clubs and organizations throughout middle school and high school that encourage young girls and nonbinary individuals to pursue careers in this field.",
      'I have witnessed the gradual increase of women in computer science related fields throughout my education, and I hope to continue this effort at SCU and beyond by being a part of ACM-W!',
    ],
  },
];

// Placeholder section: add your imports above (e.g. import imageXX from '../assets/Name.jpg') and replace null with the variable
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/220';
const boardMembersSecondary = [
  {
    name: 'Chris Shobe',
    role: 'President',
    image: prez_acm,
    bio: [
      "Hey there, I'm Chris! I'm a Senior Computer Science and Engineering student at Santa Clara University, minoring in Marketing. I've been passionate about coding since I was 8, and over the summer worked at Capital One in cybersecurity.",
      "I'm driven by building technology that solves real-world problems, with a focus on security, entrepreneurship, and user-centered design. Outside of tech, I love getting creative, whether that's making art or playing the clarinet.",
      "I'm always curious and enjoy learning about anything and everything, so if there's something you're excited about, I'd love to hear about it!",
    ],
  },
  {
    name: 'Esperanza Aguilar',
    role: 'Vice President',
    image: vp_acm,
    bio: [
      "Hey! I'm Espy, a Sophomore majoring in Computer Science and Engineering from San Jose, CA. I used to do a lot of coding for fun as a kid, so I practically grew up on websites like code.org and Khan Academy.",
      "I'm super passionate about taking interdisciplinary approaches to my work, and other than CS I enjoy exploring education, engineering, storytelling, and human-centered design. In particular, I took a summer internship at the American Foundation for the Blind, and I really love seeing new perspectives on how people interact with technology and how to make the web a better place for everyone.",
      "If you see me out and about, don't be afraid to say hi!",
    ],
  },
  {
    name: 'Carys Chiu',
    role: 'Treasurer',
    image: tres_acm,
    bio: [
      "Hey, I'm Carys! I'm a Junior majoring in Computer Science and Engineering from the Bay Area, so I've been surrounded by tech all my life growing up. Computer science has so much potential and creativity involved, so I've been happy to have been wielding it ever since I took my first serious computing course in high school.",
      'I enjoy drawing, playing guitar, learning languages, and having too much free time. If you catch me around campus, feel free to say hi!',
    ],
  },
  {
    name: 'Lauren Kimura',
    role: 'Workshop Coordinator',
    image: wc_acm,
    bio: [
      "Hi, I'm Lauren, a sophomore majoring in Computer Science and Engineering. I wanted to join ACM because I loved the active involvement this club had at SCU, including their Hack For Humanity, which is how I originally heard of the club.",
      'My current role in ACM is Workshop Coordinator, so I plan and organize our weekly technical workshops every Tuesday, covering topics like APIs, Databases + SQL, System Design, Test Driven Development, Machine Learning, React.js/React Native, Firebase, mobile app dev, and Game dev with Unity.',
      "So happy to be a part of this team, and I hope I can make change within not only the ACM community, but SCU in general.",
    ],
  },
  {
    name: 'Abhinav Ala',
    role: 'Hackathon Coordinator',
    image: hc_acm,
    bio: [
      "Hello everyone! My name is Abhi, and I'm a Junior Computer Science Engineering student from Dallas, TX. My passion for computer science is a result of having a deep interest in creating solutions to my problems and developing cool projects.",
      'I enjoy learning about computer vision and new cutting-edge tech stacks, and I want to learn more about machine learning and artificial intelligence and be able to build cool things from the ground up.',
      'Outside of school, you can find me playing guitar, watching hours of videos about cars, or avoiding studying for classes. Meeting and talking with new people is one of my favorite activities, so please do not hesitate to say hey if you see me around.',
    ],
  },
  {
    name: 'Sunjana Banwait',
    role: 'Outreach Coordinator',
    image: oc_acm,
    bio: [
      "Helloo, I'm Sunjana! I'm a Sophomore CS and Engineering student at SCU, from Morgan Hill, CA. I've always been drawn to STEM, and I love computer science since there is ALWAYS something new to learn. I'm still exploring my interests in CS, but I've really enjoyed working on projects that push my full-stack skills.",
      "I'm also involved with outreach and teaching STEM to younger students, with the goal of making these spaces feel less intimidating.",
      'In my free time, I love being outdoors, going on road trips, playing volleyball, and all things music. I love learning from people around me, so always feel free to say hi!',
    ],
  },
  {
    name: 'Puneet Gella',
    role: 'Industry Liaison',
    image: il1_acm,
    bio: [
      "Hey everyone! My name is Puneet, and I'm a Finance major with a minor in Business Analytics. Even though my background is in business, I joined ACM because I've always had a deep passion for technology, especially when it comes to leveraging data and tech to drive financial projects.",
      "As ACM's Industry Liaison, I lead our sponsor outreach and communication for hackathons. Essentially, I identify companies that align with our hackathon themes and build relationships with them. My goal is to create mutually beneficial partnerships, ensuring our sponsors get the visibility they're looking for while securing the support ACM needs to host amazing events.",
    ],
  },
  {
    name: 'Ashwini Anantharaman',
    role: 'Industry Liaison',
    image: il2_acm,
    bio: [
      "Hey! I'm Ashwini Anantharaman, and I'm an incoming Sophomore majoring in Computer Science and Engineering.",
    ],
  },
  {
    name: 'Neelasha Sudarshan',
    role: 'Webmaster',
    image: web_acm,
    bio: [
      "Hello, I'm Neelasha! I'm a Sophomore studying Computer Science and Engineering. I'm really interested in AI safety and security research, which is what my current research is focused on. Apart from that, I'm also interested in web development and cybersecurity.",
      'In my free time, I love learning new languages, playing the guitar, and hanging out with friends! Feel free to stop me anytime and say hi!',
    ],
  },
];

const Board = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);
  return (
    <div className="board-page">
      <div className="banner">
        <img src={image20} alt="Board banner" className="banner-image" />
        <div className="banner-title">
          <h1 className="board-title">2026-2027</h1>
        </div>
      </div>

      <div className="members-container">
        {boardMembers.map((member, index) => (
          <div key={index} className="member-card"
            onClick={() => setSelectedMember(member)}
            style={{ cursor: 'pointer' }}
          >
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
            <div key={index} className="member-card"
              onClick={() => setSelectedMember(member)}
              style={{ cursor: 'pointer' }}
            >
            
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
      <BoardPopup member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default Board;

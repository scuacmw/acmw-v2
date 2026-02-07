import React from 'react';
import './Events.css';

// Replace with your Google Calendar subscription link (e.g. iCal or "Add to Google Calendar" URL)
const ADD_TO_GCAL_LINK = 'https://calendar.google.com/calendar/u/1?cid=YWNtdy5zY3VnaXJsc0BnbWFpbC5jb20';

const Events = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      paddingTop: '100px'  
    }}>
      <h1 className="title">Check Out Our Events!</h1>
      <a
        href={ADD_TO_GCAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="add-to-gcal-btn"
      >
        Add our events to your Google Calendar
      </a>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=YWNtdy5zY3VnaXJsc0BnbWFpbC5jb20&color=%230083c6"
          style={{ 
            border: 'none',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }} 
          width="800" 
          height="600" 
          frameBorder="0"
          title="ACM-W Events Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default Events;

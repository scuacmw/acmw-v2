import React, {useEffect} from 'react';
import './boardPopup.css';

const BoardPopup = ({ member, onClose }) => {
    //close on escape + lock the backdrop
    useEffect(() => {
        const onKeyDown = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    //check to see if worked 
    if(!member) return null;

    return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-window"
        role="dialog"
        aria-modal="true"
        aria-label={member.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-titlebar">
          <button className="popup-dot popup-dot-close" onClick={onClose} aria-label="Close" />
          <span className="popup-dot" />
          <span className="popup-dot" />
        </div>

        <div className="popup-body">
          <img src={member.image} alt={member.name} className="popup-image" />
          <h2 className="popup-name">{member.name}</h2>
          <p className="popup-role">{member.role}</p>

          <div className="popup-bio">
            {(member.bio || []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardPopup;


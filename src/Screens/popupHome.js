import React from 'react';

const Popup = ({ isOpen, handleClosePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>This is some popup content.</p>
        <button onClick={handleClosePopup}>Close Popup</button>
      </div>
    </div>
  );
};

export default Popup;

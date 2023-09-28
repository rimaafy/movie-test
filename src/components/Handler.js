// membuat handler untuk pop up
// import komponen
import React from "react";
import Modal from "react-modal";
import "./handler.css"; 

const Handler = ({ isOpen, onRequestClose, movieTitle, moviePoster, movieYear }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Movie Modal"
      className="custom-modal"
      overlayClassName="custom-modal-overlay" 
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true} 
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{movieTitle}</h2>
          <button onClick={onRequestClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img src={moviePoster} alt={movieTitle} className="movie-poster" />
          <p>Year: {movieYear}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Handler;

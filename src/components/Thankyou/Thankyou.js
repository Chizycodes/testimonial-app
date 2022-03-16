import React from "react";
import "./Thankyou.css"
import Image from '../../assets/thanks.png';
import Modal from "react-bootstrap/Modal";

const Thankyou = ({ modal, handleClose }) => {
  return (
    <Modal show={modal === "modal-two"}>
      <Modal.Body>
        <div className="text-center p-5 thankyou">
          <img src={Image} alt="complete" className="img-fluid" />

          <h2>
            Thank you for <br />
            sharing your story!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={handleClose}
            className="orange-btn"
            style={{ width: "70%" }}
          >
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Thankyou;

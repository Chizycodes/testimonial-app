import React from "react";
import Image from '../../assets/thanks.png';

const Thankyou = ({ modal, handleClose }) => {
  return (
    <Modal show={modal === "modal-two"}>
      <Modal.Body>
        <div className="text-center p-5">
          <img src={image} alt="complete" className="img-fluid" />

          <h2 className="font-weight-bold mt-3">
            Thank you for <br />
            sharing your story!
          </h2>
          <p
            style={{ color: "#4A4A4A", fontSize: "17px", marginBottom: "3rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={handleClose} className="orange-btn">
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Thankyou;

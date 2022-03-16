import React, { useState } from "react";
import "./ShareForm.css";
import Modal from "react-bootstrap/Modal";
import { Form, Col } from "react-bootstrap";
import AttachIcon from "../../assets/attach-icon.png";
import times from "../../assets/times-icon.png";
import Thankyou from "../Thankyou/Thankyou";

const ShareForm = ({ showThankyou, handleClose, modal }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    let images = [];
    for (var i = 0; i < e.target.files.length; i++) {
      images[i] = e.target.files.item(i);
    }
    images = images.filter((file) => file.name.match(/\.(jpg|jpeg|png|gif)$/));
    if (images.length === 0) {
      reader.onloadend = () => {
        setImage(file);
      };
    } else {
      reader.onloadend = () => {
        setImage(file);
      };
    }

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Thankyou handleClose={handleClose} modal={modal} />
      <Modal show={modal === "modal-one"} onHide={handleClose}>
        <Modal.Body>
          <h3 className="share-h3 text-center mb-4">
            Share your amazing story!
          </h3>
          <Form>
            <Form.Group controlId="formBasicEmail" className="upload-form">
              <Form.Label>Upload your Picture</Form.Label> <br></br>
              <label
                className="upload-input"
                htmlFor="file"
                style={{ cursor: "pointer" }}
              >
                {image ? (
                  <div className="flex-container space-between filename">
                    <span className="flex-item">{image.name}</span>
                    <img className="flex-item" src={times} alt="cancel" />
                  </div>
                ) : (
                  <div className="flex-container space-between filename">
                    <span className="flex-item">Choose Image</span>
                    <img src={AttachIcon} alt="Upload" className="img-fluid" />
                  </div>
                )}
              </label>
              <input
                style={{ display: "none" }}
                type={"file"}
                id="file"
                className="form-file"
                name="file"
                placeholder=""
                required
                onChange={(e) => handleImageChange(e)}
              />
            </Form.Group>

            <Form className="row frm">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" required />
              </Form.Group>
            </Form>

            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="frm"
            >
              <Form.Label>Share your story</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="frm">
              <Form.Label>
                What did you interact with Vasiti as?&nbsp;&nbsp;&nbsp;
              </Form.Label>
              <Form.Check
                inline
                type="radio"
                for="Customer"
                label="Customer"
                defaultChecked="Customer"
              />
              <Form.Check inline type="radio" for="Vendor" label="Vendor" />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlTextarea2"
              className="frm"
            >
              <Form.Label>City or Higher Institution (for Students)</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <button
                onClick={showThankyou}
                type="submit"
                className="orange-btn"
              >
                Share your story!
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShareForm;

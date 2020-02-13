import React from "react";

//Dependencies
import { Modal, Button } from "react-bootstrap";
import { ReactSVG } from "react-svg";

//Styles
import '../styles/Popup.css'

const Popup = props => {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal show={props.show && true} onHide={handleClose} animation={false} centered size="sm">
      <Modal.Header>
        <Modal.Title className={`text-${props.variant}`}>{props.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {props.image && <ReactSVG src={props.image} />}
        <p>{props.body}</p>
      </Modal.Body>
      {props.button && (
        <Modal.Footer>
          <Button variant={props.variant ? props.variant : "primary"} onClick={handleClose}>
            {props.button}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default Popup;

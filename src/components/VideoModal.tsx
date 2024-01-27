import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import React, { FC } from "react";
import '../CSS/Video.css';

type piece = {
  name: string;
  composer: string;
  era: string;
  youtubeLink: string;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pieceToPlay?: piece;
}

const VideoModal: FC<ModalProps> = ({ isOpen, onRequestClose, pieceToPlay }) => {
  return (
    <Modal
      show={isOpen}
      onHide={onRequestClose}
      size="xl"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>{pieceToPlay?.name}</Modal.Title>
      </Modal.Header>
      {pieceToPlay?.youtubeLink != "NA" &&
        <Modal.Body className="video-container">
          <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
          <iframe
            src={pieceToPlay?.youtubeLink}
            allowFullScreen />
        </Modal.Body>}
      {pieceToPlay?.youtubeLink == "NA" &&
        <Modal.Body className="video-container">
          <p>Video coming soon...</p>
        </Modal.Body>}
      <Modal.Footer>
        <Button onClick={onRequestClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VideoModal;
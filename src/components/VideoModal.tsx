import Button from "react-bootstrap/Button"
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
      <Modal.Body className="video-container">
        <img src="https://placehold.co/160x90" width="100%"/>
        <iframe
          src={pieceToPlay?.youtubeLink}
          allowFullScreen />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onRequestClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VideoModal;
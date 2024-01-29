import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import React, { FC } from "react";
import YouTubeEmbed from "./YouTubeEmbed"

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
  let videoLink: string = "";
  if (pieceToPlay !== undefined) {
    videoLink = pieceToPlay.youtubeLink;
  }

  return (
    <Modal
      show={isOpen}
      onHide={onRequestClose}
      size="xl"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>{pieceToPlay?.name}</Modal.Title>
      </Modal.Header>
      {pieceToPlay?.youtubeLink !== "NA" &&
        <Modal.Body>
          <YouTubeEmbed videoLink={videoLink} />
        </Modal.Body>}
      {pieceToPlay?.youtubeLink === "NA" &&
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
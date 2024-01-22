import React, { FC } from "react";
import ReactModal from "react-modal";

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
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video player modal">
      <h1>{pieceToPlay?.name}</h1>
      <div className="responsive-embed">
        <iframe
          src={pieceToPlay?.youtubeLink}
          allowFullScreen />

      </div>
      <button onClick={onRequestClose}>Close</button>
    </ReactModal>
  );
};
export default VideoModal;
import React, { FC } from "react";
import ReactModal from "react-modal";
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
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video player modal">
      <div className="modal-header">
        <h2>{pieceToPlay?.name}</h2>
        <button type="button" className="btn-close" aria-label="Close" onClick={onRequestClose} />
      </div>
      <div className="modal-body">
        <div className="video-container">
          <iframe
            src={pieceToPlay?.youtubeLink}
            allowFullScreen />
        </div>
      </div>
    </ReactModal>
  );
};
export default VideoModal;
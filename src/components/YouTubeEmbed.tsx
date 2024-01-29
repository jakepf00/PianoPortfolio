import Image from "react-bootstrap/Image";
import React from "react";
import "../CSS/Video.css";

type YouTubeEmbedProps = {
    videoLink: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoLink }) => {
    return (
        <div className="video-container">
            <Image src="https://placehold.co/160x90" width="100%" style={{ visibility: "hidden" }} />
            <iframe
                src={videoLink}
                allowFullScreen
                title={videoLink} />
        </div>
    );
};
export default YouTubeEmbed;
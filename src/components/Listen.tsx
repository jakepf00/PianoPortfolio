import React, { FC } from "react";

const Listen: FC<{}> = () => {
    return (
        <section id="listen">
            <h1>Featured Videos</h1>
            <div className="container">
                <div className="row">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                        className="embed-responsive-item"
                        src="https://youtube.com/embed/VGSB2iKT9Ws?si=KvkS1TpXaaQDrV1w"
                        allowFullScreen />
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                        src="https://youtube.com/embed/VGSB2iKT9Ws?si=KvkS1TpXaaQDrV1w"
                        allowFullScreen />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Listen;
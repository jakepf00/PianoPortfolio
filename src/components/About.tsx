import React, { FC } from "react";
import MainPicture from '../Assets/Images/MainPicture.jpg'

const About: FC<{}> = () => {
    return (
        <section id="about">
            <img src={MainPicture} alt="Main picture" className="w-100" />
            <div className="container">
                <h1>Jacob Pfeifer Piano</h1>
                <p>Jacob Pfeifer is a pianist who excels in performance of Romantic and Contemporary piano music. Jacob has found success in competition, collaborative performances, and ensemble playing. He has also shown commitment to academics, where he continues to refine his playing and increase his understanding of the piano repertoire.</p>
                <p>Throughout his musical journey, Jacob has excelled in a multitude of competitions. He has received recognition in the Music Teachers National Association Young Artist Competition, the South Dakota State University Concerto-Aria Competition, and the Minnesota Music Teachers Association Piano Contest. These accolades not only underscore his technical brilliance but also highlight his ability to convey deep emotions through music.</p>
                <p>However, Jacob's musical talents extend beyond the confines of solo piano performance. He is a versatile collaborative pianist, adept at collaborating with vocalists and instrumentalists from various genres and backgrounds; he has accompanied competition winners in brass, woodwind, and string categories. In addition to accompanying solo performers, Jacob has also been involved in many ensembles. Most notably, Jacob was the principle pianist for the SDSU Wind Symphony, the university’s premier wind ensemble. Other ensemble experience includes performing with the SDSU Civic Orchestra and playing in the pit orchestra for South Dakota State University’s production of The Hunchback of Notre Dame.</p>
                <p>Jacob's academic pursuits have also been noteworthy. He recently completed his undergraduate studies with distinction, achieving dual degrees in computer science and piano performance. Mark Stevens served as his mentor and guide during this transformative phase of his musical development. A defining moment of his undergraduate journey was his senior recital at South Dakota State University, where he captivated the audience with renditions of works by Ginastera, Beethoven, Takemitsu, and Liszt. During his time at SDSU, Jacob also performed in masterclasses for distinguished pianists including Kenny Broberg, Nariaki Sugiura, and Richard Fountain.</p>
                <p>Building upon his undergraduate success, Jacob has embarked on a new chapter in his musical career. He is currently pursuing a Master's degree in piano performance at the University of Nebraska-Lincoln. Under the tutelage of Paul Barnes, Jacob is working to refine his artistry and deepen his understanding of the piano repertoire. This pursuit represents a significant step in his continued growth as a pianist and underscores his commitment to developing his skills as a classical musician.</p>
                <p>Jacob Pfeifer is a pianist of extraordinary talent and promise. His dedication to his craft, coupled with his diverse accomplishments in competitions, collaborative endeavors, and academic pursuits, marks him as a rising star in the world of classical piano. Jacob's journey promises to be one of inspiration and musical excellence.</p>
                <br />
            </div>
        </section>
    );
};
export default About;
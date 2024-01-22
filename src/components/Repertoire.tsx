import Papa, { ParseResult } from "papaparse"
import React, { FC, useEffect, useState } from "react";
import RepListCSV from '../Assets/Files/RepertoireList.csv'
import Table from 'react-bootstrap/Table';
import VideoModal from './VideoModal'


type piece = {
    name: string;
    composer: string;
    era: string;
    youtubeLink: string;
}
type repList = {
    pieces: piece[];
}

const Repertoire: FC<{}> = () => {
    const [repertoire, setRepData] = React.useState<repList | null>(null);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selectedPiece, setSelectedPiece] = useState<piece | undefined>(undefined);

    const openModal = (selectedPiece: piece) => {
        setSelectedPiece(selectedPiece);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setSelectedPiece(undefined);
        setModalIsOpen(false);
    };

    const loadCSV = function () {
        fetch(RepListCSV)
            .then(response => response.text())
            .then(responseText => {
                let results: ParseResult<string[]> = Papa.parse(responseText);
                let returnData: repList = { pieces: [] }
                results.data.map((d) => {
                    let newPiece: piece = {} as piece
                    newPiece.composer = d[0]
                    newPiece.name = d[1]
                    newPiece.era = d[2]
                    newPiece.youtubeLink = d[3];
                    returnData.pieces.push(newPiece);
                });
                setRepData(returnData)
            })
    };

    let ignore = false;
    useEffect(() => {
        if (!ignore) loadCSV()
        return () => { ignore = true; }
    }, []);

    return (
        <section id="repertoire">
            <div className="container">
                <h1>Rep list</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Composer</th>
                            <th>Piece</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repertoire?.pieces.map((piece, index) => (
                            <tr key={index}>
                                <td>{piece.composer}</td>
                                <td><button onClick={() => openModal(piece)}>{piece.name}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <VideoModal isOpen={modalIsOpen} onRequestClose={closeModal} pieceToPlay={selectedPiece} />
            </div>
        </section>
    );
};
export default Repertoire;
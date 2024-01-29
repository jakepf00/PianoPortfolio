import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Papa from "papaparse";
import React from "react";
import RepListCSV from "../Assets/Files/RepertoireList.csv";
import Table from "react-bootstrap/Table";
import VideoModal from "./VideoModal";

type piece = {
    name: string;
    composer: string;
    era: string;
    youtubeLink: string;
}
type repList = {
    pieces: piece[];
}

const Repertoire: React.FC<{}> = () => {
    const [repertoire, setRepData] = React.useState<repList | null>(null);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selectedPiece, setSelectedPiece] = React.useState<piece | undefined>(undefined);

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
                let results: Papa.ParseResult<string[]> = Papa.parse(responseText);
                let returnData: repList = { pieces: [] };
                results.data.forEach((d) => {
                    let newPiece: piece = {} as piece;
                    newPiece.composer = d[0];
                    newPiece.name = d[1];
                    newPiece.era = d[2];
                    newPiece.youtubeLink = d[3];
                    returnData.pieces.push(newPiece);
                });
                setRepData(returnData);
            });
    };

    let csvLoaded = false;
    React.useEffect(() => {
        if (!csvLoaded) loadCSV();
        return () => { csvLoaded = true; };
    }, []);

    return (
        <section id="repertoire">
            <Container>
                <h1>Repertoire List</h1>
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
                                <td style={{verticalAlign:"middle"}}>{piece.composer}</td>
                                <td><Button variant="link" onClick={() => openModal(piece)}>{piece.name}</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <VideoModal isOpen={modalIsOpen} onRequestClose={closeModal} pieceToPlay={selectedPiece} />
            </Container>
        </section>
    );
};
export default Repertoire;
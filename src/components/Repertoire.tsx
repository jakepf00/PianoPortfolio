import React, { FC, useEffect, useState } from "react";
import RepListCSV from '../Assets/Files/RepertoireList.csv'

const Repertoire: FC<{}> = () => {
    const [text, setText] = useState<any | null>(null);

    const loadCSV = function () {
        fetch(RepListCSV)
            .then(response => response.text())
            .then(responseText => {
                setText(responseText);
            })
    };

    useEffect(() => {
        let ignore = false;
        if (!ignore) loadCSV()
        return () => { ignore = true; }
    }, []);

    return (
        <section id="repertoire">
            <h1>Rep list</h1>
            <h2>Rep:</h2>
            <pre>{text}</pre>
        </section>
    );
};
export default Repertoire;
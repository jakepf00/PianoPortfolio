import React, { FC, useState } from "react";
import RepListCSV from '../Assets/Files/RepertoireList.csv'

const Repertoire: FC<{}> = () => {
    const [ text, setText ] = useState<any | null>(null);

    const load = function(){
        fetch(RepListCSV)
            .then( response => response.text() )
            .then( responseText => {
                setText( responseText );
            })
    };

    return (
        <section id="repertoire">
            <h1>Rep list</h1>
            <button onClick={ load }>load</button>
            <h2>Rep:</h2>
            <pre>{ text }</pre>
        </section>
    );
};
export default Repertoire;
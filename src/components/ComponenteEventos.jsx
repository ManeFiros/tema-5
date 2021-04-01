import React, { useState } from 'react'

function ComponenteEventos (){
    const [texto, setTexto] = useState('');

    //OnKeyPress
    const manejarPulsacionesTeclado = (event) =>{
        setTexto(texto+event.key);
    }

    //onKeyDown
    const manejarDown = (event) =>{
        if(event.keyCode==8) 
            setTexto(texto.substr(0,texto.length-1));
    }
    return (
        <div>
            <input onKeyPress={manejarPulsacionesTeclado} onKeyDown={manejarDown} />
            <br/>
            <label>Label: {texto}</label>
        </div>
    );
}

export default ComponenteEventos;
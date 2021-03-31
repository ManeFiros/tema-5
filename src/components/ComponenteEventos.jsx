import React, { useState } from 'react'

function ComponenteEventos (){
    const [texto, setTexto] = useState('');

    //OnKeyPress
    const manejarPulsacionesTeclado = (event) =>{
        setTexto(texto+event.charCode);
    }

    //onKeyDown
    const manejarDown = (event) =>{
        setTexto(texto+String.fromCharCode(8)+event.charCode);
    }
}

export default ComponenteEventos;
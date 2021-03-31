import React, { Component, useState } from 'react'

function ComponenteEventos (){
    const [texto, setTexto] = useState('');

    //OnKeyPress
    const manejarPulsacionesTeclado = (event) =>{
        setTexto(texto+event.key);
    }

    //onKeyDown
    const manejarDown = (event) =>{
        //setTexto(texto+String.fromCharCode(8)+event.charCode);
        if(event.keyCode==8) 
            setTexto(texto.substr(0,texto.length-1));
        //console.log(texto);
        //console.log(String.fromCharCode(8));
        //console.log(event.key);
    }
    return (
        <div>
            <input onKeyPress={manejarPulsacionesTeclado} 
                    onKeyDown={manejarDown} />
            <br/>
            <label>Label: {texto}</label>
        </div>
    );
    /*return(
        <div>
            <input OnKeyPress="manejarPulsacionesTeclado" onKeyDown="manejarDown" />
        </div>
    );*/

}

export default ComponenteEventos;
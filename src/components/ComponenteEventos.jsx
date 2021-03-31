import React, { Component } from 'react'

function ComponenteEventos (){
    const [texto, setTexto] = useState('');

    const manejarPulsacionesTeclado = (event) =>{
        setTexto(texto+event.charCode);
    }
}

export default ComponenteEventos;
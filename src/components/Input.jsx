import React, { Component } from 'react'
import ComponenteEventos from './ComponenteEventos'

class Input extends Component{
    render() {
        return (
        <div>
            <input onKeyPress={ComponenteEventos.manejarPulsacionesTeclado} 
                    onKeyDown={ComponenteEventos.onKeyDown} />
            <label>{ComponenteEventos.texto}</label>
        </div>
        );
    }
}

export default Input;
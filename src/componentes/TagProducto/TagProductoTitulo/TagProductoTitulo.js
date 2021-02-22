import React, { Component } from 'react';
import "./TagProductoTitulo.css";
export default class TagProductoTitulo extends Component {
    

    render() {
        return (
            <div className="tagTituloObjeto">
                <h1 className="tagTituloObjeto">{this.props.nombreObjeto}</h1>
            </div>
        )
    }
}

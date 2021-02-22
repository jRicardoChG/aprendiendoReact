import React, { Component } from 'react';
import "./TagImagen.css";
export default class TagImagen extends Component {

    fuente = this.props.urlImagen!=null?this.props.urlImagen:"imagennoencontrada.png";

    render() {
        return (
            <div id="tagImagen">
                <img id = "imagenObjeto" src={this.fuente} alt = "Imagen del producto actual"></img>
            </div>
        )
    }
}

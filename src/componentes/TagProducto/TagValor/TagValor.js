import React, { Component } from 'react';
import "./TagValor.css";
export default class TagValor extends Component {
    
    render() {
        return (
            <div className = "tagValor" >
                <h1 className = "tagValor">{this.props.valorObjeto==null?"No hay valor definido":this.props.valorObjeto}</h1>
            </div>
        )
    }
}

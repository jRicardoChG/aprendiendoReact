import React, { Component } from 'react';
import TagDescripcion from './TagDescripcion/TagDescripcion';
import TagImagen from './TagImagen/TagImagen';
import TagProductoTitulo from './TagProductoTitulo/TagProductoTitulo';
import TagValor from './TagValor/TagValor';
import "./TagProducto.css";

export default class TagProducto extends Component {

    datos = {
        nombreValor:"Comentarios",
        valorObjeto: "10000",
        nombreObjeto: "Anillos de Oro",
        id:1,
        contenido: {
            imagen : "joya.jpg",
            listaContenido:[],
            valortexto:"hola mundo esta e sla descripcion d eun estado de comentarios"
        }
    }


    render() {
        return (
            <div className = "tagProducto">
                <TagImagen urlImagen= {this.datos.contenido.imagen}></TagImagen>
                <TagValor valorObjeto = {this.datos.valorObjeto}></TagValor>
                <TagProductoTitulo nombreObjeto = {this.datos.nombreObjeto}></TagProductoTitulo>
                <TagDescripcion datos = {this.datos} id = {this.datos.id}></TagDescripcion>
                <TagDescripcion id = {this.datos.id+1}></TagDescripcion>
            </div>
        )
    }
}

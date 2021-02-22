import React, { Component } from 'react';
import './TagDescripcion.css';
/**
 * Objecto con posibilidad de desplegar un leer mas atraves del boton que se presenta como flecha al lado de elemento
 */
export default class TagDescripcion extends Component {
    
    
    state = {
        fuenteImagen : "./imagenflechaAbajoreducida.png"
    }
    
    constructor(props){
        super(props);
        this.state = {
            fuenteImagen : "./imagenflechaAbajoreducida.png"
        };
    }

    cambiarImagenFlecha = (estadoFlecha) =>{
        if(estadoFlecha)
            this.setState({fuenteImagen :"./imagenflechaAbajoreducida.png"});            
        else
            this.setState({fuenteImagen :"./ImagenflechaArribaReducida.png"});            
    }
    
    /**Este metodo cambia la imagen segun si la descripcion detallada esta activa o no*/ 
    mostarDescripcion = (e) =>{
        e.preventDefault();
        var descripcion = document.getElementById("idTDAContenido"+this.props.id);
        var tagPapa = document.getElementById("idTDAContenido"+this.props.id);
        var hijos = descripcion.querySelectorAll(".local");
        var estiloDescripcion = window.getComputedStyle(descripcion);
        
        if(estiloDescripcion.getPropertyValue("height").split("px")[0]>0)
        {
            descripcion.addEventListener("transitionend",this.cambiarImagenFlecha(true));
            /**true quiero flecha abajo, flase flecha arriba*/ 
            /**la descripcion era visible asi uqe la voy a hacer no visible*/
            descripcion.style.height = "0px";
            hijos.forEach((x) => x.style.height = "0px");
            console.log("la descripcion es visible, la quito")
        }
        else
        {
            /**true quiero flecha abajo, flase flecha arriba*/ 
            descripcion.addEventListener("transitionend",this.cambiarImagenFlecha(false));
            descripcion.style.height = "100%";
            hijos.forEach((x) => x.style.height = "100%");
            console.log("la descripcion no es visible, la pongo");
        }
    }

    render() {
        return (
            <div className = {"TagDescripcion" + this.props.id + " local TagDescripcion"}>
                <div className = {"TDATitulo" + this.props.id + " local TDATitulo"}>
                    <div className = {"TDASValor" + this.props.id + " local TDASValor"}>
                        <p className = {"TDASValor" + this.props.id + " local TDASValor"}>{this.props.datos!=null?this.props.datos.nombreValor:"Descripción"}</p>
                    </div>
                    <div className = {"TDASFlecha" + this.props.id + " local imagenFlecha"} onClick = {this.mostarDescripcion}>
                        <img id = {"imagenFlecha" + this.props.id } className = "imagenFlecha local" src={this.state.fuenteImagen}></img>
                    </div>
                </div> 
                <div className = {"TDAContenido"  + this.props.id +  " local TDAContenido"} id = {"idTDAContenido" + this.props.id}>
                    <p className = {"TDAContenidoTexto"+ this.props.id +" local TDAContenidoTexto"} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        )
    }
}

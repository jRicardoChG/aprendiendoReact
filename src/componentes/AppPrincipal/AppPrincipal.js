import React from 'react';
import TagProducto from '../TagProducto/TagProducto.js';

/**
 * La clase principal de mi aplicacion tendra todos los demas componentes
 */
export default class AppPrincipal extends React.Component {

    state = {
        mostrar:true
    }

    funcion1(dato){
        return "esta funcion sirve para modifcar el estado del componente" + dato;
    }         

    render(){
        if(this.state.mostrar)
            return <TagProducto/>
        else
            return <h1>No tienes permisos de visualización</h1>
    }

}
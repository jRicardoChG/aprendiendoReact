
export default class Madre {

    /**
     * Este metodo tiene por objetivo concatenar varios objectos en uno solo
     */
    static concatenarObjetos(...argumentos){
        let salida = {};
        var dato;
        for(let i=0;i<argumentos.length;i++)
        {
            salida = {...salida,...argumentos[i]};
            console.log(salida);
        }
        return salida;
    }

}

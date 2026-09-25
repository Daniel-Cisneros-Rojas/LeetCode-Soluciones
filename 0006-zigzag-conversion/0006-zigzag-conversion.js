/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    //caso unico, es mas practico regresar la cadena
    if(numRows==1){
        return s;
    }

    //inicializo las filas como arreglos para al final juntarlas
    let rows=[];
    for(let i=0;i<numRows;i++){
       rows.push("");
    }
    
    let bajando=true;
    let contador=1;
    //simulacion de subir y bajar en zigzag empujando la letra a la fila correcta
    for(let i=0;i<s.length;i++){

        rows[contador-1]=rows[contador-1]+s[i];
       if(bajando){
          contador++;
       }else{
          contador--;
       }

       if(contador>=numRows){
          bajando=false;
       }else if(contador==1){
          bajando=true;
       }
    }
    let resultado="";
    //union de filas
    for(let i=0;i<rows.length;i++){
      resultado=resultado+rows[i];
    }
    return resultado;
};
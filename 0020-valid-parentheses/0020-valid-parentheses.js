/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let abrir="({[";
    let cerrar=")}]";

    let pila=[];
    let valida=true;
    let i=0;
    while(valida&&(i<s.length)) //comprobar toda la cadena
    {
       let posicion=abrir.indexOf(s[i]); 
       if(posicion!=-1)                  
       {
          pila.push(cerrar[posicion]);  //si es parentesis de apertura guardamos el de cerrar para comparar mas facil despues
       }else if(cerrar.includes(s[i]))
       {
          let ultimo=pila.pop(); //obtenemos el ultimo parentesis que debe ser el primero en cerrar
          if(ultimo!=s[i]) 
          {
            valida=false;
            return false; //si no concuerdan se termina
          }
       }
       i++;
    }
    if (pila.length>0){ return false;} //caso de que aun existan elementos sin cerrar
    return valida;
};
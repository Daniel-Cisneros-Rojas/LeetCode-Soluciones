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
    while(valida&&(i<s.length))
    {
       console.log(s[i]);
       let posicion=abrir.indexOf(s[i]);
       if(posicion!=-1)
       {
          pila.push(cerrar[posicion]);
          console.log("\n abrir" + cerrar[posicion]);
       }else if(cerrar.includes(s[i]))
       {
          console.log("\n cerrar" + s[i]);
          let ultimo=pila.pop();
          if(ultimo==s[i])
          {
            console.log("concuerdan "+ s[i] +" "+ ultimo)
          }else{
            valida=false;
            return false;
          }
       }
       i++;
    }
    if (pila.length>0){ return false;}
    return valida;
};
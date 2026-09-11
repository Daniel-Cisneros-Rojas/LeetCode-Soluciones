/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let Symbolos=["M","D","C","L","X","V","I"];
    //2 numeros grandes al final para evitar salir de rango al final
    let valores=[1000,500,100,50,10,5,1,1000,1000];
    let resultado="";

    let i=1000;
    let j=0;

    while(num>0)
    {   
        // se separa el numero en cifras para facilitar su manipulacion 
       let cifra = parseInt(num/i)*i;
       i=i/10;
       num=num-cifra;
       console.log(cifra);
       
       let j=0;
       let k=0;
       
       while(cifra>0)
       {
         //combinaciones restandole los simbolos siguientes (segun las reglas solo se puede con los 2 siguientes)
          let combinacion1=valores[j]-valores[j+1];
          let combinacion2=valores[j]-valores[j+2];
          switch(true)
          { 
            //se verifica primero que no sea igual que el siguiente evitando combinaciones como LC=50 en lugar de el correcto L
            case (cifra==valores[j+1]):
            
            cifra=cifra-valores[j+1];
            resultado=resultado + (Symbolos[j+1]);
            break;

            case (combinacion1==cifra):
        
            cifra=cifra-combinacion1;
            resultado=resultado + (Symbolos[j+1]);
            resultado=resultado + (Symbolos[j]);
            break;

            case (combinacion2==cifra):
           
            cifra=cifra-combinacion2;
            resultado=resultado + (Symbolos[j+2]);
            resultado=resultado + (Symbolos[j]);
            break;
            
            //no es necesario un contador a 3 por que siempre se puede representar de otra manera antes de sumar 4 numeros iguales
            case (cifra>=valores[j]):
            cifra=cifra-valores[j];
            resultado=resultado + (Symbolos[j]);
            break;

            case (cifra<valores[j]):
            //se continua con el siguiente valor
            j++;
            break;

          }
       }
      
    }
       
       
    return resultado;
};
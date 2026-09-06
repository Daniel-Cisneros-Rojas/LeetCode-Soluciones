/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let caracter_actual=0;
    let positivo=true;
    let numeros=[];
    while(s[caracter_actual]==" "){
        caracter_actual++;
    }
    if(s[caracter_actual]=="-"){
        positivo=false;
        caracter_actual++;

    }else if(s[caracter_actual]=="+"){
        positivo=true;
        caracter_actual++;

    }

    
    while(s[caracter_actual]=="0"){
        caracter_actual++;
    }
    
    for(let i=caracter_actual;i<s.length;i++){
          
          if(s.charCodeAt(i)>57||s.charCodeAt(i)<48){
            break;
          }else{
            numeros.push(s.charCodeAt(i) - 48);
          } 
    }
    
    let resultado=0;
    console.log(numeros);
    console.log(2**31);
    for(let i=0;i<numeros.length;i++){
      resultado=resultado+numeros[numeros.length-1-i]*(10**i);
    }
    if(resultado>((2**31)-1)){
        resultado= (2**31);
        resultado= positivo? resultado-1:resultado;
    }
    return positivo? resultado: resultado*-1;
    
    
};
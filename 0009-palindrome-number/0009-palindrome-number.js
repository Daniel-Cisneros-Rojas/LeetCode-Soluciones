/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let numero=x;
    let digitos=[];
    if(numero==0){
        return true;
    }
    while(numero>0){
        let valor=numero%10;
        console.log(valor);
        numero=(numero-valor)/10;
        digitos.push(valor);
    }
    if(digitos.length==0){
        return false;
    }
    let inicio=0;
    let final=digitos.length-1;
    let resultado=true;
    while(inicio<=final){
        console.log(digitos[inicio]);
        console.log(digitos[final]);
        if(digitos[inicio]==digitos[final]){
          inicio++;
          final--;
        }else{
            return false;
        }
        
    }

    return resultado;
};
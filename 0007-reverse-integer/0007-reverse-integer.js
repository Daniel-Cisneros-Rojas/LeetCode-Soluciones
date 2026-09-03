/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let positivo=true;
    let valor=x;
    if(x<0){
       positivo=false;
       valor=valor*-1;
       
    }

    let i=10;
    let digitos=[];
    while(valor>0){
       let num=valor%i;
       valor=valor-num;
       digitos.push(num*(10/i));
       i=i*10;
       
    }
    i=i/100;
    
    let resultado=0;
    for(let j=0;j<digitos.length;j++){    
       resultado=resultado+(i*digitos[j]);
       i=i/10; 
    }
    if(resultado>2147483647){
            return 0;
        } 
    if(!positivo){
         
        resultado=resultado*-1;
            
    }
    
    return resultado;
};
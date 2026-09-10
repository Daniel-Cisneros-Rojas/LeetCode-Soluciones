/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let Symbolos=["M","D","C","L","X","V","I"];
    let valores=[1000,500,100,50,10,5,1,1000,1000];
    let resultado="";
    //verificar primero que no se pueda como resta con los dos siguiente snumeros y luego restarlo al total

    let i=1000;
    let j=0;

    while(num>0)
    {   
       let cifra = parseInt(num/i)*i;
       i=i/10;
       num=num-cifra;
       console.log(cifra);
       
       let j=0;
       let k=0;
       
       while(cifra>0)
       {
          let combinacion1=valores[j]-valores[j+1];
          let combinacion2=valores[j]-valores[j+2];
          console.log("valor usado ", valores[j]);
          switch(true)
          {
            case (cifra==valores[j+1]):
            console.log("caso 0");
            console.log("cifra", cifra," - ", valores[j+1]);
            cifra=cifra-valores[j+1];
            resultado=resultado + (Symbolos[j+1]);
            break;

            case (combinacion1==cifra):
            console.log("caso 1");
            console.log("cifra", cifra," - ", combinacion1);
            cifra=cifra-combinacion1;
            resultado=resultado + (Symbolos[j+1]);
            resultado=resultado + (Symbolos[j]);
            break;

            case (combinacion2==cifra):
            console.log("caso 2");
            console.log("cifra", cifra," - ", combinacion1);
            cifra=cifra-combinacion2;
            resultado=resultado + (Symbolos[j+2]);
            resultado=resultado + (Symbolos[j]);
            break;

            case (cifra>=valores[j]):
            console.log("caso 3");
            console.log("cifra", cifra," - ", valores[j]);
            cifra=cifra-valores[j];
            resultado=resultado + (Symbolos[j]);
            break;

            case (cifra<valores[j]):
            console.log("caso 4");
            console.log("cifra siguiente");
            j++;
            break;

          }
       }
      
    }
       
       
    return resultado;
};
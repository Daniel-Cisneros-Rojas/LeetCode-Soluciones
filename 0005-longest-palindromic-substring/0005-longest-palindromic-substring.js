/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let resultado=[];
    for(let i=0;i<s.length;i++){
        for(let j=s.length-1;j>i;j--){

            let inicio=i;
            let fin=j;
            let valida=true;
            while(valida&&inicio<fin){
              if(s[inicio]==s[fin]){
                inicio++;
                fin--;
              }else{
                valida=false;
              }
            }
            
            if(valida&&(j-i)>=resultado.length){
              resultado=s.substring(i,j+1);
              break;
            }
            
        }
    }

    return resultado.length>0? resultado: s[0];
};
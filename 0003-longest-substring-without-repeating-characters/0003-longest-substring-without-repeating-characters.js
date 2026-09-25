/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let subcadena=[];
    let subcadena_mas_larga=[];
    for(let j=0;j<s.length;j++){
        subcadena=[];
        for(let i=j;i<s.length;i++){
            let esta=subcadena.indexOf(s[i]);
            if(esta==-1){
                subcadena.push(s[i]);
            }else{
                break;
            }
           //verificar si la nueva es mayor a la existente
            }
            if(subcadena.length>subcadena_mas_larga.length){
                subcadena_mas_larga=subcadena;
        }
    }

     return subcadena_mas_larga.length;
    
};
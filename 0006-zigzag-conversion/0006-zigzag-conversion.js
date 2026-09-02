/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if(numRows==1){
        return s;
    }
    let rows=[];
    for(let i=0;i<numRows;i++){
       rows.push("");
    }
    
    let bajando=true;
    let contador=1;
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
    for(let i=0;i<rows.length;i++){
      resultado=resultado+rows[i];
    }
    console.log(rows);
    return resultado;
};
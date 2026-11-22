/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

    let buscandoA=true;
    for(let i=0;i<s.length;i++)
    {
      console.log(s[i]);
      if(s[i]=="a")
      {
        if(!buscandoA){
           return false;
        }
      }else{
        buscandoA=false;
      }
    }

    return true;
};
class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {
        $longitud=count($strs);
    
        $iguales=true;
        $resultado="";
        $posicion=0;

        //mientras sigan siendo iguales se continua
        while($iguales)
        {
          //obtenemos la letra para comparar
          $letra=substr($strs[0],$posicion,1);
          echo "\n letra $letra";
          if($letra==""){
            $iguales=false;
          }
          for($i=1;$i<$longitud;$i++)
          {
             
             if($letra!=substr($strs[$i],$posicion,1))
             {
                //si son diferentes con otra cadena se termina y dejan de ser iguales
                $iguales=false;
                break;
             }
          }
          if($iguales)
          {
            //si fueron iguales se agrega al resultado la letra y avanza la pocision
            $posicion++;
            $resultado=$resultado . $letra;
          }
        }
        
        return $resultado;
    }
}
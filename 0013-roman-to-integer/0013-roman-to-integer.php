class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $symbolos="IVXLCDM";
        $valores=[1,5,10,50,100,500,1000];
        $resultado=0;
        $longitud=strlen($s);

        for($i=0;$i<$longitud;$i++){

            //obtenemos el symbolo
            $symbolo_actual=substr($s,$i,1);
            $symbolo_siguiente=substr($s,($i+1),1);
            
            //se obtienen sus valores
            $valor_actual=strpos($symbolos,$symbolo_actual);
            $valor_siguiente=strpos($symbolos,$symbolo_siguiente);
            
            //si el numero siguiente es mayor significa que se resta el actual
            $resultado=($valor_actual>=$valor_siguiente)? $resultado+$valores[$valor_actual]: $resultado-$valores[$valor_actual];
        }
         

         return $resultado;

       
    }
}
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        
        $puntero=1;
        for($i=1;$i<count($nums);$i++){
            //comparamos con el elemento anterior, si es unico lo guardamos
            if($nums[$i-1]!=$nums[$i]){
                $nums[$puntero]=$nums[$i];
                $puntero++;
            }
        }
        //el ejercicio solo revisa el arreglo hasta la cantidad de $puntero, no importa que el arreglo tenga elementos repetidos despues por eso no se usa splice
        return $puntero;
    }
    
}
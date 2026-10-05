class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        echo "\n inicio \n";
        $puntero=1;
        for($i=1;$i<count($nums);$i++){
            echo "\n $nums[$i]";
            if($nums[$i-1]!=$nums[$i]){
                $nums[$puntero]=$nums[$i];
                $puntero++;
            }
        }
        var_dump($nums);
        echo "\n $puntero";
        return $puntero;
    }
    //var_dump($nums);
}
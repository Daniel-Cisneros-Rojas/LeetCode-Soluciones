/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let tam=nums1.length+nums2.length;
    let mitad_indice=0;
    let par;
    if(tam%2==0){
       mitad_indice=((tam/2));
       par=true;
    }else{
        mitad_indice=(parseInt(tam/2));
        par=false;
    }

    let c1=0;
    let c2=0;
    let contador=0;
    let arreglo_ordenado=[];

    while(c1<nums1.length&&c2<nums2.length&&contador<=mitad_indice){
         if(nums1[c1]<nums2[c2]){
            arreglo_ordenado.push(nums1[c1]);
            c1++;
            contador++;
         }else{
            arreglo_ordenado.push(nums2[c2]);
            c2++;
            contador++;
         }
    }

    while(c1<nums1.length&&contador<=mitad_indice){
        arreglo_ordenado.push(nums1[c1]);
        c1++;
        contador++;
    }

    while(c2<nums2.length&&contador<=mitad_indice){
        arreglo_ordenado.push(nums2[c2]);
        c2++;
        contador++;
    }
    
    if(par){
         let sum=arreglo_ordenado[mitad_indice]+arreglo_ordenado[mitad_indice-1];
         return sum==0 ? 0: sum/2;
    }else{
        return arreglo_ordenado[mitad_indice];
    }
    
};
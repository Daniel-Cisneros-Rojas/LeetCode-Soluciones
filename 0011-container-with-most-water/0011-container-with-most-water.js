/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let i = 0;
    let j = height.length - 1;
    let resultado = 0;

    while (i < j) {
        resultado = Math.max(resultado, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) i++;
        else j--;
    }

    return resultado;
};
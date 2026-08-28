
function productExceptSelf(arr){
    let result = [];
    let rightSum = [];
    for( let i =0; i < arr.length; i++){
        let left = i;
        let right = i
        while(right < arr.length){
            rightSum[i] = (rightSum[i]|| 1) * (arr[right+1] ?? 1)
            right ++
        }

        while(left >= 0){
            result[i] = (result[i] || 1) * (arr[left-1] ?? 1);
            left--  
        }

        result[i] = result[i] * rightSum[i];
        
    }
    return result
}
// console.log(productExceptSelf([1, 2, 3, 4]))// [24, 12, 8, 6]

function productExceptSelf2Pass(arr){
    let result = new Array(arr.length);
    let leftProduct = 1;
    for(let i =0; i< arr.lenght; i++){
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }
    let rightProduct =1;
    for(let i = arr.length-1; i >= 0; i--){
        result[i] = rightProduct
        rightProduct *= arr[i]
    }
    return result
}
console.log(productExceptSelf2Pass([1, 2, 3, 4]))// [24, 12, 8, 6]

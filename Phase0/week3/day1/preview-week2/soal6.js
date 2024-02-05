function tentukanDeretGeometri(arr){
    let diff = arr[1] / arr[0];

    for (let i = 1; i < arr.length-1; i++) {
        if(arr[i] * diff != arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));
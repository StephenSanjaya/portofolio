// function tentukanDeretGeometri(arr){
//     let diff = arr[1] / arr[0];

//     for (let i = 1; i < arr.length-1; i++) {
//         console.log(arr[i]*diff + " = " + arr[i+1]);
//         if(arr[i] * diff != arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
// console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
// console.log(tentukanDeretGeometri([2, 4, 6, 8]));
// console.log(tentukanDeretGeometri([2, 6, 18, 54]));
// console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));

// ----------------- Array: Mengelompokkan angka -----------------

// function mengelompokkanAngka(arr){
//     let res = [[], [], []];

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 == 0){
//             res[2].push(arr[i]);
//         }else if(arr[i] % 2 == 1){
//             res[1].push(arr[i]);
//         }else{
//             res[0].push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(mengelompokkanAngka([2, 4, 6]));
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
// console.log(mengelompokkanAngka([]));

// ----------------- Array : Sitting Arangement -----------------

// function sittingArrangement(person, column) {
//     let res = [];
//     let sitArr = [];
//     let j = 0;
//     let k = 0;
//     let l = 0;

//     if(column < 1){
//         return "Invalid number"
//     }

//     for (let i = 0; i < person.length; i+=column){
//         for (let j = 0; j < column; j++) {
//             if(person[k] == undefined){
//                 sitArr.push("Kursi kosong");
//             }else{
//                 sitArr.push(person[k]);
//             }
//             k++;
//         }
//         res.push(sitArr);
//         sitArr = [];
//     }
//     return res;
// }
// console.log(sittingArrangement(['A', 'B', 'C'], 0));
// console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2));
// console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3));
// console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));

//  ------- Array : Interesting Ladder Array Multidimensi ------- 
// function ladder(word) {
//     let single = [];
//     let res = [];
//     let temp = word.length;

//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < temp; j++) {
//             single.push(word[j]);   
//         }
//         res.push(single);
//         single = [];
//         temp--;
//     }
//     return res;
// }

// console.log(ladder("developer"));
// console.log(ladder("arnold"));

// --------- Array : Target Terdekat ---------

function targetTerdekat(arr){
    let left = 0;
    let right = 0;
    let flag = 0;

    //count left
    for (let i = 0; i < arr.length; i++) {
        if(arr[0] == 'o'){
            break;
        }
        if(arr[0] == ' '){ // x x o 
            continue;
        }
        if(arr[i] == 'x'){
            for (let j = i; j < arr.length; j++) {
                if(arr[j+1] == ' '){
                    left++;
                    continue;
                }else if(arr[j+1] == 'o'){
                    left++;
                    flag = 1;
                    break;
                }else{
                    left = 0;
                    break;
                }
            }
        }
        if(flag == 1){
            break;
        }
    };

    flag = 0;
    //count right
    for (let i = arr.length-1; i > 0; i--) {
        if(arr[arr.length-1] == 'o'){
            break;
        }
        if(arr[arr.length-1] == ' '){ // x x o x x
            continue;
        }
        if(arr[i] == 'x'){
            for (let j = i; j >= 0; j--) {
                // console.log(arr[j]);
                if(arr[j-1] == ' '){
                    right++;
                    continue;
                }else if(arr[j-1] == 'o'){
                    right++;
                    flag = 1;
                    break;
                }else{
                    right = 0;
                    break;
                }
            }
        }
        if(flag == 1){
            break;
        }
    }
    
    if(left == 0 && right == 0){
        return 0;
    }else if(left == 0){
        return right;
    }else{
        return left;
    }

}
console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x']));
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
console.log(targetTerdekat([' ', ' ', 'o', ' ']));
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));
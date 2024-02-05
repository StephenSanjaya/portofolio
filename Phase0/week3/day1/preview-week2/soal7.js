function pasanganTerbesar(num) {
    let str = num.toString();
    let currentBiggestNum = str[0] + str[1];
    let compareNum = "";

    for (let i = 1; i < str.length-1; i++) {
        compareNum = str[i] + str[i+1];
        if(parseInt(currentBiggestNum) < parseInt(compareNum)){
            currentBiggestNum = compareNum;
        }
    }

    return currentBiggestNum;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
//note: uncomment nomor 1 per 1

// ---------- Looping: I Love Coding ---------------
// 1. Melakukan Looping Menggunakan for

// let length = 20;
// console.log("Looping for pertama");
// for (let i = 1; i <= length; i++) {
//     console.log(i + " = I love coding");
// };

// console.log("\nLooping for kedua");
// for (let i = length; i >= 1; i--) {
//     console.log(i + " = I will become fullstack developer");
// };

// 2. While

// let i = 2;
// let length = 20;
// console.log("Looping for pertama");
// while (i <= length) {
//     console.log(i + " = I love coding");
//     i+=2;
// }

// i = 20;
// console.log("\nLooping for kedua");
// while (i >= 2) {
//     console.log(i + " = I will become fullstack developer");
//     i -= 2;
// }

// ---------- Looping: Odd Even Numbers ---------------
// 1. 
// console.log("OUTPUT:");
// console.log("========");
// for (let i = 1; i <= 100; i+=3) {
//     if(i % 2 == 1){
//         console.log(i + " = ganjil");
//     }else{
//         console.log(i + " = genap");
//     }
// }

// 2.
// console.log("OUTPUT:");
// console.log("========");
// for (let i = 50; i <= 200; i+=5) {
//     if(i % 3 == 0){
//         console.log(i + " = faktor 3");
//     }else{
//         console.log(i + " = tidak bisa dibagi 3");
//     }
// }

// 3. 
// console.log("OUTPUT:");
// console.log("========");
// for (let i = 100; i <= 200; i+=7) {
//     if(i % 8 == 0){
//         console.log(i);
//     }
// }

// ---------- Looping: Asteriks ---------------
// 1. Menyusun Barisan Bintang

// let rows1 = 5;
// for (let i = 0; i < rows1; i++) {
//     console.log("*");
// }

// 2. Menyusun Barisan Bintang Dengan Nested Looping

// let rows2 = 5;
// for (let i = 0; i < rows2; i++) {
//     for (let j = 0; j < rows2; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

// let rows3 = 5;

// for (let i = 0; i < rows3; i++) {
//     for (let j = 0; j < i+1; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

// 4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping

// let rows4 = 5;

// for (let i = 0; i < rows4; i++) {
//     for (let j = 0; j < rows4-i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }
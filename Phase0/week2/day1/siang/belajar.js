// let isTrue = true;
// let isFalse = false;

// if(isTrue){
//     console.log("true")
// } else {
//     console.log("false")
// }

// var nilai = prompt("Masukkan nilai: ");

// nilai = parseFloat(nilai);

// if(!isNaN(nilai)){
//     if(nilai >= 70){ // isNaN() -> not-a-number
//         document.write("lulus");
//     }else if(nilai < 70){
//         document.write("belum lulus");
//     }
// }else{
//     document.write("tidak valid");
// }


// --------------------------------- Latihan 1 ---------------------------------
// var pass = prompt("Masukkan password: ");

// const correctPassword = "password123";

// if(pass === correctPassword){
//     alert("OK");
// }else{
//     window.location.href = "http://google.com";
// }

// --------------------------------- Latihan 1 ---------------------------------

function calcGrade() {
    var userInput = prompt("insert number between 1 - 100");

    var userScore = parseInt(userInput);

    if(userScore >= 1 && userScore <= 100){
        if(userScore >= 80){
            alert("Grade A");
        }else if(userScore >= 60){
            alert("Grade B");
        }else if(userScore >= 40){
            alert("Grade C");
        }else{
            alert("Grade D");
        }
    }else{
        alert("can't calculate your grade");
    }
}

calcGrade();
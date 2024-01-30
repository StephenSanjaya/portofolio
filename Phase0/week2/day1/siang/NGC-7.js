// Conditional: bandingkan angka
let angka1 = 0;
let angka2 = 0;

function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        console.log(true);
    }else if (angka2 < angka1){
        console.log(false);
    }else{
        console.log(-1);
    }
}

// Conditional: Graduate
let nama = "";
let nilai = "";
let absen = "";

function graduate(nama, nilai, absen){
    if(nilai > 70 && absen < 5){
        console.log(nama + " lulus");
    }else{
        console.log(nama + " tidak lulus");
    }
}

// Conditional: Konversi menit
let detik = 0;
let menit = 0;
let temp = 0;

function konversiMenit(detik){
    menit = Math.floor(detik / 60);
    detik = detik % 60;
    if(detik < 10){
        console.log(menit + ":0" + detik)
    }else{
        console.log(menit + ":" + detik);
    }
}

// Conditional: Gacha
function gacha(){
    // const rand = Math.floor((Math.random() * 5) + 1); 
    const rand = Math.ceil((Math.random() * 5));
    console.log(rand)
    switch (rand) {
        case 1:
            document.getElementById("msg").innerHTML = "coba lagi ya";
            break;
        case 2:
            document.getElementById("msg").innerHTML = "selamat kamu mendapatkan kupon sebanyak 5";
            break;
        case 3:
            document.getElementById("msg").innerHTML = "selamat kamu mendapatkan kupon sebanyak 15";
            break;
        case 4:
            document.getElementById("msg").innerHTML = "selamat kamu mendapatkan kupon sebanyak 50";
            break;
        case 5:
            document.getElementById("msg").innerHTML = "WOW, kamu menang jackpot! Selamat!";
            break;
    }
}

// bandingkanAngka(2, 3);
// bandingkanAngka(3, 2);
// bandingkanAngka(3, 3);

// graduate("budi", 71, 5);
// graduate("budi", 70, 5);
// graduate("budi", 71, 4);
// graduate("budi", 75, 7);

konversiMenit(120);
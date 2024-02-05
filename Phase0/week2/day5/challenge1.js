// pseudocode

// INIT r 
// STORE "phi" with CONST
// STORE "r" with FLOAT
// STORE "LUAS" with FLOAT
// STORE "KELILING" with FLOAT

// CALCULATE "phi" times "r" times "r"
// CALCULATE "phi" times "2" times "r"

// SET "LUAS" value with calculation resource
// DISPLAY "LUAS"

// SET "KELILING" value with calculation resource
// DISPLAY "KELILING"

// ============================================================

// TULIS "Masukkan R lingkaran: " // step 1: buat form html agar user bsa input jari" lingkaran
// BACA R                         // step 2: buat file js untuk menampung input dari step pertama

// TULIS phi = 3.14               // step 3: file js, baut variable dengan const = 3.14

// step 4: file js, buat func untuk hitungLuasKeliling() -> nilai r diambil dari step 2
// HITUNG luas = phi * r * r     
// HITUNG KELILING = phi * 2 * r 

// step 5 : file js, menampilkan hasil luas dan keliling ke file html
// TULIS hasil = luas
// TULIS hasil = keliling

const phi = 3.14

function hitungLuasKeliling() {
    let r = parseFloat(document.getElementById("jarijari").value);
    let luas = phi * r * r;
    let kel = phi * 2 * r;

    document.getElementById("hasilLuas").textContent = luas.toFixed(2);
    document.getElementById("hasilKeliling").textContent = kel.toFixed(2);
}

// QUESTION 1

// step 1: buat form html untuk memasukkan angka-angka
// step 2: tampung angka tersebut pada file array di file js
// step 3: buat function findSmallestNumber() yang didapat dati array step 2
// step 4: tampilkan angka terkecil nya pada file html

function findSmallestNumber() { 
    let arr = [];

    arr.push(parseInt(document.getElementById("firstNumber").value));
    arr.push(parseInt(document.getElementById("secondNumber").value));
    arr.push(parseInt(document.getElementById("thirdNumber").value)); 
    let smallestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(smallestNumber > arr[i]){
            smallestNumber = arr[i];
        }
    }
    document.getElementById("result").textContent = smallestNumber;
}

// QUESTION 2

// step 1: buat form html untuk memasukkan angka-angka dan target angka
// step 2: tampung angka tersebut pada file array di file js
// step 3: buat function findIndexNumber() yang didapat dari target angka pada step 1
// step 4: tampilkan index nya pada file html

function findIndexNumber() {
    let str = document.getElementById("stringOfNumber").value;
    let target = document.getElementById("targetNumber").value;
    let idx = -1;

    const arr = str.split(",");

    for (let i = 0; i < arr.length; i++) {
        if(target == arr[i]){
            idx = i;
            break;
        }
    }
    console.log(idx);
    document.getElementById("index").textContent = idx;
    
}

// QUESTION 3

// step 1: buat form html untuk memasukkan harga awal dan ketogri produk
// step 2: tampung angka awal dan kategori produk pada html, di variable dalam file js
// step 3: buat function calculateDiscount() yg didapat pada step 2
// step 4: tampilkan harga setelah diskon pada file html

function calculateDiscount() {
    let opt = document.getElementById("kategori").value;
    let price = parseFloat(document.getElementById("basePrice").value);

    if (opt == "elektronik") {
        price = price * 0.90;
    }else if(opt === "pakaian"){
        price = price * 0.85;
    }

    document.getElementById("discountedPrice").textContent = price;
}
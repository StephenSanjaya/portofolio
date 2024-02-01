//Literal Object
let mobil = {
    merk : "Toyota",
    model : "Corolla",
    tahun : 2020,
    start : function () {
        console.log("mesin dinyalakan");
    }
};


// constructor function
function Orang(nama, umur){
    this.nama = nama;
    this.umur = umur;
}
let budi = new Orang("Budi", 25);

//akses object
// 1. dot notation
console.log(mobil.merk);

// 2. bracket notation
console.log(mobil["merk"]);

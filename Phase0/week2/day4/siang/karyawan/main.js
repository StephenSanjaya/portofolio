// define object karyawan

function Karyawan(nama, jabatan, gaji) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
}

Karyawan.prototype.tampilkanDetail = function () {
    return `${this.nama} - ${this.jabatan} - ${this.gaji}`;
    // return this.nama + " - " + this.jabatan + " - " + this.gaji;
}

let daftarKaryawan = [];

function tambahKaryawan(karyawan){
    daftarKaryawan.push(karyawan);
}

function tampilkanKaryawan(){
    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    daftarKaryawan.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}

function hapusKaryawan(nama){
    const index = daftarKaryawan.findIndex(k => k.nama === nama);
    if(index !== -1){
        daftarKaryawan.splice(index, 1);
    }
}

function hapusTerpilih() {
    const nama = document.getElementById('input-nama').value;
    hapusKaryawan(nama);
    tampilkanKaryawan();
}

function cariKaryawan(text){
    return daftarKaryawan.filter(k => k.nama.includes(text) || k.jabatan.includes(text));
}

function cariDanTampilkan() {
    const text = document.getElementById('input-cari').value;
    const hasil = cariKaryawan(text);

    const ulElement = document.getElementById("daftar-karyawan");
    ulElement.innerHTML = "";

    hasil.forEach(karyawan => {
        const liElement = document.createElement("li");
        liElement.textContent = karyawan.tampilkanDetail();
        ulElement.appendChild(liElement);
    });
}

document.getElementById("karyawan-form").addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById("input-nama").value;
    var jabatan = document.getElementById("input-jabatan").value;
    var gaji = document.getElementById("input-gaji").value;

    let karyawanBaru = new Karyawan(nama, jabatan, gaji);

    tambahKaryawan(karyawanBaru);
    tampilkanKaryawan();

    document.getElementById("input-nama").value = "";
    document.getElementById("input-jabatan").value = "";
    document.getElementById("input-gaji").value = "";
});

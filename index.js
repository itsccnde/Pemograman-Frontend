const name = "Syita Dwi Safitri"; //string
const major = "Informatika";
console.log(name, major);

const nama = "Syita Dwi Safitri";
const hasil = `nama saya: ${nama}`;
console.log(hasil);

const nilai = 85;
/**
 * Jika nilai > 90: A
 * Jika nilai > 80: B
 * Jika nilai > 70: C
 * Selain: D
 */

if (nilai > 90) {
    console.log("A") ;
} else if (nilai > 80) {
    console.log("B") ;
} else if (nilai > 70) {
    console.log("C") ;
} else {
    console.log("D") ;
}

/**
 * Tampilkan nilai 1 sampai 10
 */

for (let i = 1; i < 10; i++); {
    console.log(i);
}

/**
 * Membuat fungsi hitung umur
 * Logika : Tahun sekarang - Tahun lahir
 */

function hitungUmur(tahunLahir) {
    const umur = 2023 - tahunLahir;
    return umur;
}

const umurSafitri = hitungUmur(2002);
console.log(umurSafitri);

console.log(hitungUmur(2002));
console.log(hitungUmur(2001));

/**
 * Menyimpan banyak nilai hewan
 */

const animals = ["Kucing", "Kelinci", "Panda"];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

/**
 * Nama
 * Umur
 * Jenis Kelamin
 */
 const Safitri = {
    nama: "Safitri",
    umur: 20,
    jenisKelamin: "Perempuan",
 };

 console.log(Safitri);

 const addina = {
    nama: "addina",
    umur: 20,
    jenisKelamin: "Perempuan",
 };

 for (label in addina) {
    console.log(label);
    console.log(addina[label]);
 }
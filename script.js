/* 
   Materi JS Introduction: 
   Menggunakan document.getElementById untuk mengubah teks HTML dan gaya CSS[span_3](start_span)[span_3](end_span).
*/

function bukaLootBox() {
    // 1. Memilih elemen HTML berdasarkan ID
    var elemenTeks = document.getElementById("teks-loot");
    var tombol = document.getElementById("tombol-loot");
    
    // 2. Mengubah isi teks (innerHTML) seolah mendapatkan hadiah
    elemenTeks.innerHTML = "Selamat! Kamu mendapatkan: 1x Pedang Pixel Legendaris! (Item tersimpan di Inventory)";
    
    // 3. Mengubah gaya (CSS) agar teks terlihat seperti item langka (Warna Emas)
    elemenTeks.style.color = "#ffb74d"; // Warna oranye/emas
    elemenTeks.style.fontWeight = "bold";
    elemenTeks.style.padding = "10px";
    elemenTeks.style.border = "2px dashed #ffb74d";
    elemenTeks.style.backgroundColor = "#2a2a2a";

    // 4. Mengubah gaya tombol agar terlihat sudah terpakai
    tombol.innerHTML = "Sudah Diklaim";
    tombol.style.backgroundColor = "#555555"; // Berubah warna jadi abu-abu
    tombol.style.cursor = "not-allowed"; // Kursor dilarang klik
}

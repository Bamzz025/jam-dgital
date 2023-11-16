// Pilih elemen-elemen
const jamElement = document.getElementById("jam");
const menitElement = document.getElementById("menit");
const detikElement = document.getElementById("detik");

// Fungsi untuk memperbarui waktu
const updateJam = () => {
  const hari = new Date();
  const j = String(hari.getHours()).padStart(2, "0");
  const m = String(hari.getMinutes()).padStart(2, "0");
  const s = String(hari.getSeconds()).padStart(2, "0");

  jamElement.textContent = j;
  menitElement.textContent = m;
  detikElement.textContent = s;
};

// Perbarui waktu saat halaman dimuat dan secara berkala
window.onload = updateJam;
setInterval(updateJam, 1000);

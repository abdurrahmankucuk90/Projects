const container = document.querySelector(".container");

let saniye;
let dakika;
let saat;

const clockTimer = setInterval(() => {
  saat = new Date().getHours()
  saat = saat < 10 ? "0" + saat : saat
  dakika = new Date().getMinutes();
  dakika = dakika < 10 ? "0" + dakika : dakika
  saniye = new Date().getSeconds()
  saniye = saniye < 10 ? "0" + saniye : saniye
//   console.log(saat, ":", dakika, ":", saniye); 
  container.innerHTML = `<p class="clock">${saat}:${dakika}:${saniye}</p>`;
}, 1000);
// clockTimer()

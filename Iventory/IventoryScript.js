window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

//pop up
const modalImg = document.getElementById("modalImg");
const modalCarName = document.getElementById("modalCarName");
const modalYear = document.getElementById("modalYear");
const modalDesc = document.getElementById("modalDesc");
const carModal = document.getElementById("carModal");

let dataMobil = [];

fetch("mobil.json")
  .then(res => res.json())
  .then(data => {
    dataMobil = data.mobil;
    console.log("JSON LOADED:", dataMobil);

    document.querySelectorAll(".car-item").forEach(img => {
      img.addEventListener("click", () => {
        const id = img.dataset.id;
        console.log("ID DIKLIK:", id);

        const mobil = dataMobil.find(m => m.id_mobil === id);
        console.log("MOBIL KETEMU:", mobil);

        if (!mobil) return;

        modalImg.src = mobil.img;
        modalCarName.innerText = mobil.jenis_mobil;
        modalYear.innerText =
          "Production Year: " + mobil.tahun_keluaran;
        modalDesc.innerHTML =
          mobil.deskripsi_mobil.replace(/\n/g, "<br>");

        new bootstrap.Modal(carModal).show();
      });
    });
  })
  .catch(err => console.error(err));


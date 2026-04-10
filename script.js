/* =========================================
   1. Animasi Typing (Typed.js)
   ========================================= */
const typingElement = document.querySelector(".multiple-text");
if (typingElement) {
  new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Archer", "Movie Maker"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}

/* =========================================
   2. FUNGSI MODAL POP-UP (FIXED)
   ========================================= */
// Pastikan fungsi ini tersedia secara global agar bisa dipanggil onclick
window.openModal = function (title, description) {
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDescription");

  if (modal && modalTitle && modalDesc) {
    modalTitle.innerText = title;
    modalDesc.innerText = description;

    modal.style.display = "flex"; // Pastikan CSS modal punya display: flex saat aktif
    document.body.style.overflow = "hidden"; // Kunci scroll
    console.log("Modal Berhasil Dibuka: " + title); // Cek di console (F12)
  }
};

window.closeModal = function () {
  const modal = document.getElementById("infoModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Aktifkan scroll
  }
};

// Tutup jika klik area di luar kotak putih
window.addEventListener("click", (event) => {
  const modal = document.getElementById("infoModal");
  if (event.target == modal) {
    closeModal();
  }
});

/* =========================================
   3. Logic Hamburger Menu
   ========================================= */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  };

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.onclick = () => {
      menuIcon.classList.remove("fa-xmark");
      navbar.classList.remove("active");
    };
  });
}

/* =========================================
   4. Transisi Halaman & Smooth Scroll
   ========================================= */
window.addEventListener("DOMContentLoaded", () => {
  const transition_el = document.querySelector(".page-transition");
  if (transition_el) {
    setTimeout(() => {
      transition_el.classList.add("fade-in");
    }, 100);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetID = this.getAttribute("href");
    if (targetID === "#") return;
    const targetElement = document.querySelector(targetID);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

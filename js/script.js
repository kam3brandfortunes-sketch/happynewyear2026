// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Image gallery infinite scroll
const gallery = document.getElementById('gallery');
let loaded = 0;
const totalImages = 6; // ✅ total number of images in your folder
const perLoad = 6;      // load 6 images per batch

function loadImages() {
  for (let i = loaded + 1; i <= Math.min(loaded + perLoad, totalImages); i++) {
    const div = document.createElement('div');
    div.className = "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col";

    const img = document.createElement('img');
    img.src = `images/img${i}.jpeg`; // ✅ using .jpeg extension
    img.alt = `Happy New Year ${i}`;
    img.className = "w-full h-auto object-contain";

    const btnDiv = document.createElement('div');
    btnDiv.className = "p-4 text-center";

    const a = document.createElement('a');
    a.href = `images/img${i}.jpeg`;
    a.download = '';
    a.className = "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition";
    a.textContent = "Download";

    btnDiv.appendChild(a);
    div.appendChild(img);
    div.appendChild(btnDiv);

    gallery.appendChild(div);
  }
  loaded += perLoad;
}

// Initial load
loadImages();

// Infinite scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    if (loaded < totalImages) {
      loadImages();
    }
  }
});







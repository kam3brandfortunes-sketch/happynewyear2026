// --- Configuration ---
// Folder where your images are stored
const imageFolder = "images/";

// Number of images currently available
// (You can just update this number when you add more)
const totalImages = 6;

// Automatically generate file names like img1.jpg, img2.jpg, ...
const imageList = Array.from({ length: totalImages }, (_, i) => `${imageFolder}img${i + 1}.jpg`);

// DOM elements for the two halves
const leftHalf = document.getElementById("left-half");
const rightHalf = document.getElementById("right-half");

// Function to create an image card element
function createImageCard(src) {
  const card = document.createElement("div");
  card.className =
    "image-card bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300";

  card.innerHTML = `
    <img src="${src}" alt="Happy New Year" loading="lazy">
    <div class="p-4 text-center">
      <a href="${src}" download>Download</a>
    </div>
  `;
  return card;
}

// Function to render all images evenly split between left/right halves
function renderImages() {
  imageList.forEach((src, index) => {
    const card = createImageCard(src);

    // Split images evenly (alternate left/right)
    if (index % 2 === 0) {
      leftHalf.appendChild(card);
    } else {
      rightHalf.appendChild(card);
    }
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", renderImages);

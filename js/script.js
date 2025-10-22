// --- Configuration ---
const imageFolder = "images/";
const totalImages = 6; // increase this as you add more images

// Possible file extensions to try
const extensions = [".jpg", ".jpeg", ".png", ".webp"];

// DOM elements
const leftHalf = document.getElementById("left-half");
const rightHalf = document.getElementById("right-half");

// Helper: create image card
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

// Try loading each image in multiple formats
function tryLoadImage(baseName) {
  return new Promise((resolve) => {
    let found = false;
    extensions.forEach((ext) => {
      const img = new Image();
      img.src = `${imageFolder}${baseName}${ext}`;
      img.onload = () => {
        if (!found) {
          found = true;
          resolve(img.src);
        }
      };
      img.onerror = () => {
        // Do nothing if fails; move to next ext
      };
    });

    // If nothing found after 1 second → resolve null
    setTimeout(() => {
      if (!found) resolve(null);
    }, 1000);
  });
}

// Render all images
async function renderImages() {
  for (let i = 1; i <= totalImages; i++) {
    const src = await tryLoadImage(`img${i}`);
    if (src) {
      const card = createImageCard(src);
      if (i % 2 === 0) rightHalf.appendChild(card);
      else leftHalf.appendChild(card);
    }
  }
}

document.addEventListener("DOMContentLoaded", renderImages);

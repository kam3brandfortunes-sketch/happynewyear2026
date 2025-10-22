document.addEventListener("DOMContentLoaded", function () {
  const imageFolder = "images/";
  const totalImages = 6; // Update this if you add more
  const leftHalf = document.getElementById("left-half");
  const rightHalf = document.getElementById("right-half");

  for (let i = 1; i <= totalImages; i++) {
    const src = `${imageFolder}img${i}.jpeg`;

    const card = document.createElement("div");
    card.className = "image-card bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300";
    card.innerHTML = `
      <img src="${src}" alt="Happy New Year" loading="lazy">
      <div class="p-4 text-center">
        <a href="${src}" download>Download</a>
      </div>
    `;

    if (i % 2 === 0) rightHalf.appendChild(card);
    else leftHalf.appendChild(card);
  }
});






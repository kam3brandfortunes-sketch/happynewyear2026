// Example: Show alert when an image is downloaded
const downloadLinks = document.querySelectorAll('a[download]');

downloadLinks.forEach(link => {
  link.addEventListener('click', () => {
    alert('Your download has started! 🎉');
  });
});

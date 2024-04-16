const galleryContainer = document.getElementById('galleryContainer');
const images = galleryContainer.querySelectorAll('.responsive');

let currentPage = 0;
const itemsPerPage = 4;
const totalPages = Math.ceil(images.length / itemsPerPage);

function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, images.length);

  images.forEach((image, index) => {
    if (index >= startIndex && index < endIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function prevPage() {
  currentPage = Math.max(currentPage - 1, 0);
  showPage(currentPage);
}

function nextPage() {
  currentPage = Math.min(currentPage + 1, totalPages - 1);
  showPage(currentPage);
}

showPage(currentPage); // Initial display
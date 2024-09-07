document.addEventListener("DOMContentLoaded", function () {
    // Image slider with 10 seconds timer
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 10000
      });
    }
  
    // Select All functionality
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener('change', function () {
        const checkboxes = document.querySelectorAll('.request-checkbox');
        checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
      });
    }
  
    // Search functionality
    const searchInput = document.getElementById('searchRequests');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const requestCards = document.querySelectorAll('.card');
        requestCards.forEach(card => {
          const content = card.textContent.toLowerCase();
          card.style.display = content.includes(searchTerm) ? '' : 'none';
        });
      });
    }
  });
  
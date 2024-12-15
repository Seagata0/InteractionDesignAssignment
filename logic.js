// Sidebar Toggle Logic
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const overlay = document.getElementById("overlay");

// Function to show/hide sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  toggleBtn.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Hide sidebar when clicking on the overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  toggleBtn.classList.remove("show");
  overlay.classList.remove("show");
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

  // Show corner images when sidebar is active
  var cornerImages = document.querySelectorAll(".corner-image");
  cornerImages.forEach((image) => {
    image.style.opacity = sidebar.classList.contains("active") ? 1 : 0;
  });
}

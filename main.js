const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon text
  if (navLinks.classList.contains("active")) {
    toggleBtn.innerHTML = "✖"; // Close icon
  } else {
    toggleBtn.innerHTML = "☰"; // Menu icon
  }
});

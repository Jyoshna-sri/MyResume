// Scroll-to-top functionality
window.onscroll = function () {
  document.getElementById("topBtn").style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Contact form message
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});

// Store and apply user preference
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply user theme on load
function applyUserTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

// Trigger animation on button
function triggerAnimation() {
  const btn = document.getElementById("animateBtn");
  btn.classList.remove("animate"); // reset
  void btn.offsetWidth; // force reflow
  btn.classList.add("animate"); // trigger
}

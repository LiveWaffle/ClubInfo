function DarkMode() {
  document.body.classList.toggle("Dark")
  let isDarkMode = document.body.classList.contains("Dark");
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.getElementById("Light").innerHTML = "🌙"; 
  } else {
    document.getElementById("Light").innerHTML = "☀️"; 
  }
}
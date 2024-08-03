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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) =>observer.observe(el));
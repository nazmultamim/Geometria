//Get the button
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// // dark mod script 
// // Get the toggle switch and set its state based on localStorage
// const toggleSwitch = document.getElementById('toggleSwitch');
// const storedTheme = localStorage.getItem('pageTheme');
// if (storedTheme) {
//   toggleSwitch.checked = storedTheme === 'Dark';
// }

// // Function to handle theme change
// function dark() {
//   const isDark = toggleSwitch.checked;
//   if (isDark) {
//     console.log("Dark mode");
//     document.body.classList.add("dark");
//   } else {
//     console.log("Light mode");
//     document.body.classList.remove("dark");
//   }

//   // Store the theme in localStorage
//   localStorage.setItem('pageTheme', isDark ? 'Dark' : 'Light');
// }

// // Add a change event listener to the checkbox
// toggleSwitch.addEventListener('change', dark);

// const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';

// if (isDarkModeEnabled) {
//   toggleSwitch.checked = true;
//   toggleDarkMode();
// }

// // Initial setup
// dark();

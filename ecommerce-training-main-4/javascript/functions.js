function chooseFormation() {
  if (document.getElementById("formation-choice").style.display == "none") {
    document.getElementById("formation-choice").style.display = "block"
  } else {
    document.getElementById("formation-choice").style.display = "none"
  }
};
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.button-blue')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display = "block") {
          openDropdown.style.display = "none";
        }
      }
    }
};

function showHTML() {
  if (document.getElementById("HTML-section").style.display !== "none") {
    document.getElementById("HTML-section").style.display = "none"
  } else {
    document.getElementById("HTML-section").style.display = "block"
  }};

function showCSS() {  
  if (document.getElementById("CSS-section").style.display !== "none") {
    document.getElementById("CSS-section").style.display = "none"
  } else {
    document.getElementById("CSS-section").style.display = "block"
  }
};

function showJavaScript() {
  if (document.getElementById("JavaScript-section").style.display !== "none") {
    document.getElementById("JavaScript-section").style.display = "none"
  } else {
    document.getElementById("JavaScript-section").style.display = "block"
  }
}
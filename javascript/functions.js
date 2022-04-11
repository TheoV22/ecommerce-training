function chooseFormation() {
    document.getElementById("formation-choice").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.button-blue')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function showHTML() {
  document.getElementById("HTML-section").style.display = "block";
}

function showCSS() {
  document.getElementById("CSS-section").style.display = "block";
}

function showJavaScript() {
  document.getElementById("JavaScript-section").style.display = "block";
}
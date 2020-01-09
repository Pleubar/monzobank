function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navtop") {
      x.className += " responsive";
    } else {
      x.className = "navtop";
    }
  }
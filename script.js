function loaded() {
    document.getElementById("body1").style.backgroundColor = "rgb(122,122,122)";
}

function clicked() {
    document.getElementById("p1").innerHTML = "Here Is Some New Text";
}

function changed() {
      var replace = document.getElementById("val1").value;
      document.getElementById("p2").innerHTML = replace;
}

function focused() {
     document.getElementById("val1").style.backgroundColor = "rgb(090,165,090)";
}

function blured() {
    document.getElementById("val1").style.backgroundColor = "rgb(255,255,255)";
}
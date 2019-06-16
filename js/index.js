function toRed() {
  document.querySelector(".srlred").setAttribute("onclick", "toGray()");
  document.querySelector(".sr-circle").style.backgroundColor = "#c7372a";
  document.querySelector(".srlred p").setAttribute("style", "");
  document.querySelector(".srlred p").innerHTML = "Seriously, red?";
  document.querySelectorAll(".center-p p").forEach((e) => e.style.backgroundColor = "white");
  document.querySelectorAll(".center-p p").forEach((e) => e.style.color = "rgba(0, 0, 0, 0.8)");
  document.querySelector(".upper-left").style.backgroundColor = "#bc3428";
  document.querySelector(".upper-right").style.backgroundColor = "#c7372a";
  document.querySelector(".lower-left").style.backgroundColor = "#b13125";
  document.querySelector(".lower-right").style.backgroundColor = "#bc3428";
  document.querySelectorAll(".grid2x2 a").forEach((e) => e.style.color = "white");
  document.querySelectorAll(".grid2x2 img").forEach((e) => e.style.border = "5px solid white");
  document.querySelectorAll(".grid2x2 p b").forEach((e) => e.style.color = "white");
  document.querySelectorAll(".grid2x2 span").forEach((e) => e.style.color = "rgba(0, 0, 0, 0.8)");
}

function toGray() {
  document.querySelector(".srlred").setAttribute("onclick", "toRed()");
  document.querySelector(".sr-circle").style.backgroundColor = "rgba(60, 60, 60, 0.7)";
  document.querySelector(".srlred p").setAttribute("style", "color: rgba(60, 60, 60, 0.7);");
  document.querySelector(".srlred p").innerHTML = "Bring red back!";
  document.querySelectorAll(".center-p p").forEach((e) => e.style.backgroundColor = "#d33a2c");
  document.querySelectorAll(".center-p p").forEach((e) => e.style.color = "white");
  document.querySelector(".upper-left").style.backgroundColor = "rgba(230, 230, 230, 0.8)";
  document.querySelector(".upper-right").style.backgroundColor = "rgba(230, 230, 230, 0.7)";
  document.querySelector(".lower-left").style.backgroundColor = "rgba(230, 230, 230, 0.9)";
  document.querySelector(".lower-right").style.backgroundColor = "rgba(230, 230, 230, 0.8)";
  document.querySelectorAll(".grid2x2 a").forEach((e) => e.style.color = "rgba(0, 0, 0, 0.8)");
  document.querySelectorAll(".grid2x2 img").forEach((e) => e.style.border = "5px solid #d33a2c");
  document.querySelectorAll(".grid2x2 p b").forEach((e) => e.style.color = "#d33a2c");
  document.querySelectorAll(".grid2x2 span").forEach((e) => e.style.color = "#d33a2c");
}

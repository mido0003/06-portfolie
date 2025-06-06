// PANORAMA

document.querySelector("#pan1").classList.add("pan_animation");
document.querySelector("#pan1").classList.add("stop");

document.querySelector("#pan1").addEventListener("mouseover", startPanorama);
document.querySelector("#pan1").addEventListener("mouseout", startPanorama);

document.querySelector("#pan2").classList.add("pan_animation");
document.querySelector("#pan2").classList.add("stop");

document.querySelector("#pan2").addEventListener("mouseover", startPanorama);
document.querySelector("#pan2").addEventListener("mouseout", stopPanorama);

function startPanorama() {
  this.classList.remove("stop");
}
function stopPanorama() {
  this.classList.add("stop");
}

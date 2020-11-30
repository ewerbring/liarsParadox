let element1 = document.getElementById("pbox1");
let parent1 = document.querySelector("#pbox1");
let parent2 = document.querySelector("#pbox2");
let pointer1 = document.querySelector("#pointer1");
let pointer2 = document.querySelector("#pointer2");

element1.addEventListener("mousemove", function(e) {
  let unblurred = document.querySelector("#blurred2");

  let x = e.pageX - parent1.offsetLeft + 90;
  let y = e.pageY - parent1.offsetTop + 30;
  //   unblurred.style.clipPath = "circle(50px at " + x + "px " + y + "px)";
  unblurred.setAttribute(
    "style",
    "-webkit-mask-image: radial-gradient(circle 50px at " +
      x +
      "px " +
      y +
      "px, black 0px, black 50px, transparent 150px)"
  );


});
let element = document.getElementById("pbox2");

element.addEventListener("mousemove", function(e) {
  let unblurred = document.querySelector("#blurred1");

  let x = e.pageX - parent2.offsetLeft + 90;
  let y = e.pageY - parent2.offsetTop + 30;

  //   unblurred.style.clipPath = "circle(50px at " + x + "px " + y + "px)";

  unblurred.setAttribute(
    "style",
    "-webkit-mask-image: radial-gradient(circle 50px at " +
      x +
      "px " +
      y +
      "px, black 0px, black 20px, transparent 120px)"
  );

  console.log(x, y, unblurred.style);




});

element.addEventListener("mouseleave", function(e) {
  let unblurred = document.querySelector("#blurred1");

  let x = -300;
  let y = -300;

  //   unblurred.style.clipPath = "circle(50px at " + x + "px " + y + "px)";

  unblurred.setAttribute(
    "style",
    "-webkit-mask-image: radial-gradient(circle 50px at " +
      x +
      "px " +
      y +
      "px, black 0px, black 20px, transparent 120px)"
  );

  console.log(x, y, unblurred.style);
});
element1.addEventListener("mouseleave", function(e) {
  let unblurred = document.querySelector("#blurred2");

  let x = -300;
  let y = -300;

  //   unblurred.style.clipPath = "circle(50px at " + x + "px " + y + "px)";

  unblurred.setAttribute(
    "style",
    "-webkit-mask-image: radial-gradient(circle 50px at " +
      x +
      "px " +
      y +
      "px, black 0px, black 20px, transparent 120px)"
  );

  console.log(x, y, unblurred.style);
});

let maincontainer = document.querySelector("body");

maincontainer.addEventListener("mousemove", function(e) {
  document.querySelector("#xcoord").innerHTML = "X: " +e.pageX ;
  document.querySelector("#ycoord").innerHTML = " Y: " +e.pageY;
  let pointer = document.getElementById("chartdiv");
  let x = e.pageX;
  let y = e.pageY;
  maincontainer.style.cursor = "none";
  pointer.style.left = x - 75 + "px";
  pointer.style.top = y - 75 + "px";
});

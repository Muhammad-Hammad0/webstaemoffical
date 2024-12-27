const button = document.getElementById("mainButton");


const colors = [ "blue"];
let currentColorIndex = 0;

button.addEventListener("click", () => {

  button.style.backgroundColor = colors[currentColorIndex];

 
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// button.addEventListener("click", () => {
//     if (isColored) {

//       button.style.backgroundColor = "";
//       isColored = false;
//     } else {
 
//       button.style.backgroundColor = colors[currentColorIndex];
//       currentColorIndex = (currentColorIndex + 1) % colors.length;
//       isColored = true;
//     }
// });
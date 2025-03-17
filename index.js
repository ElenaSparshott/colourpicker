function a() {
fetch("https://www.thecolorapi.com/id?hex=0047AB&format=json")
    .then(response => response.json())
    .then(data => {
        console.log(data.hex.value)
    })
}

element.addEventListener("submit", function(a) {
  document.getElementById("colourscheme").backgroundColor = data.hex.value;
});
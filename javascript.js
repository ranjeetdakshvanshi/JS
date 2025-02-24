function updateGradient() {
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let direction = document.getElementById("direction").value;
    let gradientCSS = `linear-gradient(${direction}, ${color1}, ${color2})`;
    document.getElementById("gradient-body").style.background = gradientCSS;
    document.getElementById("gradient-box").style.background = gradientCSS;
    document.getElementById("gradient-css").value = `background: ${gradientCSS};`;
    document.getElementById("gradient-css").style.display = "block";
}

function copyGradient() {
let gradientText = document.getElementById("gradient-css");

if (navigator.clipboard) {
navigator.clipboard.writeText(gradientText.value)
    .then(() => alert("Gradient CSS copied to clipboard!"))
    .catch(err => console.error("Error copying text: ", err));
} else {
gradientText.select();
gradientText.setSelectionRange(0, 99999);
document.execCommand("copy");
alert("Gradient CSS copied to clipboard!");
}
}


updateGradient();

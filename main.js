var image = ["myach1.jpg", "myach2.jpg", "myach3.jpg", "myach4.jpg"]
var i = 0;

function nextslide() {
        document.getElementById("images").src = image[i];
        i++;
}

function preslide() {
        document.getElementById("images").src = image[i];
        i--;
}


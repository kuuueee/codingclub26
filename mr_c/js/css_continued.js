/*
    // Change multiple styles
    imageElement.style.border = "5px solid red";
    imageElement.style.borderRadius = "50%"; // Makes the image a circle
    imageElement.style.width = "200px";
    imageElement.style.height = "200px";
    imageElement.style.objectFit = "cover"; // Ensures the image covers the area
*/


function changeImgHeight(imgId) {
    var imageElement = document.getElementById(imgId);
    var newHeight = document.getElementById("heightDelta").value;
    imageElement.style.height = newHeight + "px";
}

function changeImgWidth(imgId) {
    var imageElement = document.getElementById(imgId);
    var newWidth = document.getElementById("widthDelta").value;
    imageElement.style.width = newWidth + "px";
}

function changeImgBorderRadius(imgId) {
    var imageElement = document.getElementById(imgId);
    var newBorderRadius = document.getElementById("borderRadiusDelta").value;
    imageElement.style.borderRadius = newBorderRadius + "%";
}

function changeImgBorder(imgId) {
    var imageElement = document.getElementById(imgId);
    var newBorderWidth = document.getElementById("borderWidth").value;
    var newBorderType = document.getElementById("borderType").value;
    var newBorderColor = document.getElementById("borderColor").value;
    imageElement.style.border = newBorderWidth + "px " + newBorderType + " " + newBorderColor;
}

function doSomething(imgId) {
    var imageElement = document.getElementById(imgId);
    imageElement.style.width = "100%";
    imageElement.style.height = "100%";
    imageElement.style.objectFit = "cover";
}
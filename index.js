//Learned how to set up a canvas from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
//dimensions
canvas.width = 1280
canvas.height = 720

//fills in canvas
c.fillRect(0, 0, canvas.width, canvas.height);

//Function to add images
function newImage(url, left, bottom){
    let object = document.createElement("img")
    object.src = url
    object.style.position = "fixed"
    object.style.left = left + "px"
    object.style.bottom = bottom + "px"
    document.body.append(object)
    return object
}


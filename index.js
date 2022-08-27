//Learned how to set up a canvas from Stackoverflow
let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720
//I used this stack over flow link for color "/questions/27736288/how-to-fill-the-whole-canvas-with-specific-color"
c.fillRect(0, 0, canvas.width, canvas.height);

//Background

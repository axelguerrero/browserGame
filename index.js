//Learned how to set up a canvas from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
//dimensions
canvas.width = 1280
canvas.height = 720

//fills in canvas
c.fillRect(0, 0, canvas.width, canvas.height);

//What we are going to be using sprites in order to get characters in the game, Sprites are essentially compilations of 2d images in order to get animations.
// OOP, using a class to group up data to program my character
// class  {
// constructor({position, velocity})
// }
 
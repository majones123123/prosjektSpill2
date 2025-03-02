const canvas = document.getElementById("myCanvas");

let platformElm = document.querySelector(".platform");

// function platformSize(HEIGHT, WIDTH) {};

// Høyde og bredde på skjermen
const HEIGHT = 500;
const WIDTH = 500;
const canvasElm = document.querySelector("canvas");
canvasElm.height = HEIGHT;
canvasElm.width = WIDTH;
const ctx = canvasElm.getContext("2d");


//Platform plassering
function renderplat() {
  ctx.fillStyle = "#45597E";
  ctx.fillRect(
    platforms[0].x,
    platforms[0].y,
     platforms[0].width,
    platforms[0].height
  );
  ctx.fillRect(
    platforms[1].x,
    platforms[1].y,
    platforms[1].width,
    platforms[1].height
  );
}

//Spilleren
let player = {
  x: 200,
  y: 200,
  x_v: 0,
  y_v: 0,
  jump: true,
  height: 20,
  width: 20,
};
let keys = {
  right: false,
  left: false,
  up: false,
};

//Lager variabler for gravitasjon og friksjon
let gravity = 0.35;
let friction = 0.7;


//Renderer spilleren
function renderplayer() {
  ctx.fillStyle = "#F08080";
  ctx.fillRect(player.x - 20, player.y - 20, player.width, player.height);
}

//Funksjon for å opprette kanvasen
function rendercanvas() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 500, 500);
}

var num = 2;
let platforms = [];
function createplat() {
  for (i = 0; i < num; i++) {
    platforms.push({
      x: 100 * i,
      y: 200 + 30 * i,
      width: 110,
      height: 15,
    });
  }
}
function loop() {
  renderplayer();
  renderplat();
}
createplat();
loop();

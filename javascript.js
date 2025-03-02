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

//Let platforms[] lar meg legge til tall i senere som tilater meg å lage flere plattformer, og gir meg muligheten til å plasere de randomly etter loops senere.
let platforms = [];

//En ganske simpel men lang funksjon som oppretter de fundimentale plattformene i spillet.

function createplat(numPlatforms) {
  platforms = [];

  for (let i = 0; i < numPlatforms; i++) {
    platforms.push({
      //Randomiserer x posisjonen til plattformene
      x: Math.random() * 380,
      y: 200 + i * 40,
      width: 110,
      height: 15,
    });
  }

  platforms.push({
    x: 0,
    y: 480,
    width: 500,
    height: 20,
  });
  platforms.push({
    x: 0,
    y: 100,
    width: 200,
    height: 20,
  });
  platforms.push({
    x: 300,
    y: 100,
    width: 200,
    height: 20,
  });
}

//Rendrer plattformene

function renderplat() {
  ctx.fillStyle = "yellow";
  for (let i = 0; i < platforms.length; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
}

//Nøkkeltaster for spilleren
function keydown(e) {
  if (e.keyCode == 37) {
    keys.left = true;
  }
  if (e.keyCode == 38) {
    if (!player.jump) {
      player.y_v = -10;
    }
  }
  if (e.keyCode == 39) {
    keys.right = true;
  }
}

function keyup(e) {
  if (e.keyCode == 37) {
    keys.left = false;
  }
  if (e.keyCode == 38 && player.y_v < -2) {
    player.y_v = -3;
  }
  if (e.keyCode == 39) {
    keys.right = false;
  }
}

//Viktigste loopen i spillet
function loop() {
  if (!player.jump) {
    player.x_v *= friction;
  } else {
    player.y_v += gravity;
  }

  player.jump = true;

  if (keys.left) {
    player.x_v = -2.5;
  }
  if (keys.right) {
    player.x_v = 2.5;
  }

  player.y += player.y_v;
  player.x += player.x_v;

  let i = -1;
  for (let j = 0; j < platforms.length; j++) {
    if (
      platforms[j].x < player.x &&
      player.x < platforms[j].x + platforms[j].width &&
      platforms[j].y < player.y &&
      player.y < platforms[j].y + platforms[j].height
    ) {
      i = j;
    }
  }

  if (i > -1) {
    player.jump = false;
    player.y = platforms[i].y;
  }

  rendercanvas();
  renderplayer();
  renderplat();
}

//Legger til de to øverste platformene og bakken
createplat();

//Andre loop som lager 10 platformer
function loop2() {
  createplat(10);
}


let platformElm = document.querySelector(".platform");

// function platformSize(HEIGHT, WIDTH) {};

const HEIGHT = 1000;
const WIDTH = 1000;
const canvas = document.querySelector("canvas");
canvas.height = HEIGHT;
canvas.width = WIDTH;

const ctx = canvas.getContext("2d");

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

function renderplayer() {
  ctx.fillStyle = "#F08080";
  ctx.fillRect(player.x - 20, player.y - 20, player.width, player.height);
}

var p;
var playerwidth = 20;
var playerheight = 41;
var startingx = 50;
var ground = 550;
var gravity = 1;
var jumpspeed = 20;

var o;
var obstacleheight = 20;
var obstaclelength = 160;
var obstaclespeed = 8;

var gameOver = true;

function setup() {
    createCanvas(600, 600);
    p = new Player();
    o = new Obstacle();
}

function draw() {
    background(51);
    if (!gameOver) {
        p.update();
        o.update();
        checkGame();
    }
    else {
        textSize(32);
        text('Click "Space" to begin!', 100, 50, 400, 100);
    }
    p.show();
    o.show();
}

function keyPressed() {
    if (keyCode == 32) {
        if (gameOver) {
            restartGame();
        }
        p.jump();
    }
}

function restartGame() {
    gameOver = false;
    p = new Player();
    o = new Obstacle();
}

function checkGame() {
    if (p.x + playerwidth > o.x && p.x < o.x + obstaclelength && p.y > o.y - obstacleheight 
        && p.y - playerheight < o.y) {
        gameOver = true;
    }
}
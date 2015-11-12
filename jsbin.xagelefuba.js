var player;
var enemy;

function setup() {
  createCanvas(300, 500);
player = createSprite(150, 470);
  var playerImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAALVBMVEX////09PT/iBLk5OS0WQD/fgD/+b3+n0DyeAC5ubnZ2dns4az47bn/yix4eHgmnPUUAAABfklEQVRIie3T3ZKDMAgFYDUxNfHn/R+3wCEEozu1t7vLRetM8w1wTIfhv35xRa7vzi9U61NGx+Z527YV9ZHJeQZc86L1s6JfkoJZi8fTZvfn00SV8KXGBrygGCecrAJIG9p8XuyoaTIg2iZcMGFD8fV6pUQfYBUwr/PZeD3hT1U2YE1w1eluiDRzK5HW+bwhElEgjJxIk8tcDZ0NUoWeYJItJe0uJpYwokzJUiZsJYsgj65ETRqgCz0hBDVCjqMpQkl3cpnbaEICiUFMMIQE934jmCxNXBsgXcltVE28DKZIM3fXSNdhEsa7okZ4s+3GqmHSTO0V0AjvyO44JpPIzEgGLrvYMrAE8DLNdIQNL2T7MIkx853Jho4TIdORGEvJuM6GLDo8IINdx2JgxHeS9fXlIoJddgdwxFDtVttIasnAiZw76YRIbW+gI914KPn3lUJ3PNyJ6058DQoD/g8yuAqPBJzqHvSdHgGf3mNQUWjoMwDKdv4RqCp/c/5P1BvIghq9uHVg+gAAAABJRU5ErkJggg==");
  player.addImage(playerImage);
  
  enemy = createSprite(150, 350, 8, 64 );

}

function draw() {
  background(500, 500, 500);
  
  if (keyDown(LEFT_ARROW)) {
   player.position.x= player.position.x - 1;
  }
  if (keyDown(RIGHT_ARROW)) {
   player.position.x= player.position.x + 1;
  }
  
  enemy.position.y = enemy .position.y += 18;
  
  if (enemy.position.y > 500) {
    enemy.position.y = 0;
    enemy.position.x = random(300);
   } 
  
  if (player.overlap(enemy)) { 
    alert("Game Over");
  }
  
  drawSprites();
}
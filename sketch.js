const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// Vamos rapidamente criar um namespace para nosso Matter.Constraint para ser
// chamado de restrição.
const Constraint = Matter.Constraint;

// Um namespace nada mais é do que o nome usado para identificar e se referir
//a objetos.

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
   backgroundImg = loadImage("background.png");

  // Mostre a imagem adicionada dentro da função preload.
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  // Crie os corpos esféricos usando um círculo.
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  // Descubra os parâmetros que precisam vir dentro do construtor Slingshot().
  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

  // .Exiba a imagem dentro da função draw()
  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}

// Usaremos uma função chamada mouseDragged (arrastar o mouse) para isso.
// Para implementar mouseDragged dentro de matter.js, podemos usar a função setPosition().
function mouseDragged(){

//   O parâmetro será o corpo que precisa ser movido e sua posição será baseada no
// movimento do mouse de x e y.
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

// Agora queremos apenas separar a fruta da restrição quando soltarmos o mouse.
// Semelhante a mouseDragged(), temos mouseReleased().

function mouseReleased(){
  slingShot.fly();

}

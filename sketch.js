var menu, game, painel, enemy, enemyGroup;
var player
var gameState = 0;
var title, playButton, input;
var button1, button2, button3, button4;
var enemys = [];

function preload(){
     bg = loadImage("../assets/bg_provisorio.jpg")
}

function setup(){
     createCanvas(400,600)

     //criação do menu
     title = createElement("h1", "Clash of Clans - Remake");
     playButton = createButton("play");
     input = createInput("").attribute("placeholder", "Digite Seu Nome");

     //botões do painel
     button1 = createButton("PC1");
     button2 = createButton("PC2");
     button3 = createButton("PC3");
     button4 = createButton("PC4");

     enemyGroup = new Group();

}

function draw(){
     background(0)

     if(gameState === 0 ){
          menu();
          
     }

     if(gameState === 1 ){
          play();

          title.hide();
          playButton.hide();
          input.hide();

          //machine();
          
          
     }

     if(gameState === 2 ){
          end();
     }

     

}

function menu(){
     playButton.class("playButton");
     title.class("title");
     input.class("menuInput");

     playButton.position(width/2 -30, height/2 - 70);
     title.position(width/2 -170, height/2 - 250);
     input.position(width/2 -90, height/2 - 100);

     button1.hide();
     button2.hide();
     button3.hide();
     button4.hide();

     playButton.mouseClicked(()=>{
          gameState = 1;
     })
}

function play(){
     //coloque aqui o que vai rolar no gameplay
     image(this.bg, 0,0,width, height+50)

     painel();

     drawSprites();
}

function end(){
      //coloque aqui tudo sobre o fim de jogo
     
}

function painel(){

     button1.position(100,530);
     button2.position(175,530);
     button3.position(250,530);
     button4.position(325,530);
     button1.show();
     button2.show();
     button3.show();
     button4.show();
     fill("blue")
     rect(0,500,410,150)


     button1.mouseClicked(()=>{
          enemy = createSprite(100,500,25,25);
          enemy.shapeColor = "deeppink";
          enemys.push(enemy)
          
         
     })
}

// function machine(){
//      for (let index = 0; index < enemys.length; index++) {
//          showEnemy(enemys[index]);
//           console.log(enemys[index])
//      }
// }

// function showEnemy(character){
    
//      if(character){
//           character.y -=5
//      }
// }
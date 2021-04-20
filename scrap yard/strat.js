function GameObject(name, image) {
    this.name = name;
    this.img = image; // this can be used to hold image filename
    this.x = 0; // initialised at 0 ***
    this.y = 0; // initialised at 0 ***
}
// Setup image
var image = new Image();
image.src = "./images/blue1.png";

// Default Player
var player = new GameObject("Player", "blue1.png");

//canvas-----------------------------------------------------------------------------------------------------
// get a handle to the canvas context
var canvas = document.getElementById("the_canvas");
// get 2D context for this canvas
var context = canvas.getContext("2d");

//the varible that has the blue army and red army health tolal----------------------------------------------------------
//blue is the attacker red is the defender
var blue_health = 100;
var red_health = 100;

// the varible that is the weapon chosen-------------------------------------------------------------------------------
 var blue_weapon = "";
 var red_weapon = "Sword";

// the rock papaer scissors stratagy if statments----------------------------------------------------------------------------------
//the if statments that run the rock, paper, scissors rules but with removal of health
//mechanic

function gameRules(){
//Sword chosen-------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Sword" && red_weapon =="Axe"){blue_health = blue_health - 15; red_health = red_health - 35;}
    
//the if for when the attacker is going against its equeal
if( blue_weapon == "Sword" && red_weapon =="Sword"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Sword" && red_weapon =="Spear"){blue_health = blue_health - 35; red_health = red_health - 15;}


//Axe chosen---------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Axe" && red_weapon =="Sword"){blue_health = blue_health - 15; red_health = red_health - 35;}

//the if for when the attacker is going against its equeal
if( blue_weapon == "Axe" && red_weapon =="Axe"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Axe" && red_weapon =="Spear"){blue_health = blue_health - 35; red_health = red_health - 15;}


//Spear chosen--------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Spear" && red_weapon =="Axe"){blue_health = blue_health - 15; red_health = red_health - 35;}

//the if for when the attacker is going against its equeal
if( blue_weapon == "Spear" && red_weapon =="Spear"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Spear" && red_weapon =="Sword"){blue_health = blue_health - 35; red_health = red_health - 15;}

console.log(blue_health, red_health)
}
var newPosX = x;
var newPosY = y;

//the update of the game----------------------------------------------------------------------------------------
function update(){
  
    

  //the boundary
    if(player.x < 0){
        player.x += ;
        console.log("left")
    }
    if(player.x > 1000){
        player.x -= 0;
        console.log("right")
    }
    if(player.y < 0){
        player.y += 0;
        console.log("top")
    }
    if(player.y > 275){
        player.y -= 0;
        console.log("bottom")
    }
    player.x += 1;
}

//-----------------------------------------------------------------------------------------------------

//the function that assigns the chosen weapon to as players weapon--------------------------------------------
//button clicks
function buttonOnClickSword()
{
 blue_weapon = "Sword";
 update();
}

function buttonOnClickAxe()
{
 blue_weapon = "Axe";
 update();
}

function buttonOnClickSpear()
{
 blue_weapon = "Spear";
 update();
}

//the draw and frames---------------------------------------------------------------------------------

// Total Frames
var frames = 4;

// Current Frame
var currentFrame = 0;

// Initial time set
var initial = new Date().getTime();
var current; // current time

function animate() {
    current = new Date().getTime(); // update current
    if (current - initial >= 150) { // check is greater that 500 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
       
    } 
}

// Draw GameObjects to Console
// Modify to Draw to Screen
function draw() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(image, (image.width / 4) * currentFrame, 0, 30, 30,  100-player.x, 300-player.y, 30, 30);

    animate(); 
    }

//gameloop--------------------------------------------------------------------------------------------------------------
function gameloop() {
    update();
    draw();

    window.requestAnimationFrame(gameloop);
}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);
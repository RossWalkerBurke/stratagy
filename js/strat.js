//
function GameObject(name, image, health) {
    this.name = name;
    this.img = image; // this can be used to hold image filename
    this.health = health;
    this.x = 0; // initialised at 0 ***
    this.y = 0; // initialised at 0 ***
}
    // Sprite
    var image = new Image();
    image.src = "./images/blue1.png"; // Frames 1 to 6

    var image2 = new Image();
    image2.src = "./images/red1.png"; // Frames 1 to 6
// Default Player minion
var player = new GameObject("blue", "blue1.png");

// Gameobjects is a collection of the Actors within the game
// this is an Array
var gameobjects = [player, new GameObject("redNPC", "red1.png")];
//canvas-----------------------------------------------------------------------------------------------------

// get a handle to the canvas context
var canvas = document.getElementById("the_canvas");
// get 2D context for this canvas
var context = canvas.getContext("2d");
const width = canvas.width = 1000;
const height = canvas.height = 500;

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

//the update of the game----------------------------------------------------------------------------------------
function update(){


}

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

        context.drawImage(image,(image.width / 4) * currentFrame, 0, 30 , 30, 300, 350, 60, 60);
        context.drawImage(image2,(image2.width / 4) * currentFrame, 0, 30, 30, 600, 350, 60, 60);
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
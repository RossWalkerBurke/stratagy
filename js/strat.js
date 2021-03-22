//canvas

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
function update(){
    console.log()
    
//Sword chosen-------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Sword" && red_weapon =="Axe"){blue_health = blue_health - 15; red_health = red_health - 35;}

//the if for when the attacker is going against its equeal
if( blue_weapon == "Sword" && red_weapon =="Sword"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Sword" && red_weapon =="Spear"){blue_health = blue_health - 35; red_health = red_health - 15;}


//Axe chosen---------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Axe" && red_weapon =="Spear"){blue_health = blue_health - 15; red_health = red_health - 35;}

//the if for when the attacker is going against its equeal
if( blue_weapon == "Axe" && red_weapon =="Axe"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Axe" && red_weapon =="Sword"){blue_health = blue_health - 35; red_health = red_health - 15;}


//Spear chosen--------------------------------------------------------------------------------------------------------------
//the if for when the attacker goes against what it is stong against
if( blue_weapon == "Spear" && red_weapon =="Axe"){blue_health = blue_health - 15; red_health = red_health - 35;}

//the if for when the attacker is going against its equeal
if( blue_weapon == "Spear" && red_weapon =="Sword"){blue_health = blue_health - 20; red_health = red_health - 20;}

//the if for when the attacker goes against its weakness
if( blue_weapon == "Spear" && red_weapon =="Spear"){blue_health = blue_health - 35; red_health = red_health - 15;}

console.log(blue_health, red_health)
}

//the function that assigns the chosen weapon to as players weapon--------------------------------------------

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

//Win, Lose, Tie Conditions--------------------------------------------------------------

// when the blue wins and red loses
if( blue_health > 0 && red_health <= 0){
    clear.canvas;
    "Blue is victorious";
 }

//when the blue loses and red wins
if( blue_health <= 0 && red_health < 0){
    clear.canvas;
    "Red is victorious";
 }

 //when  tie
 if( blue_health <= 0 && red_health <= 0){
    clear.canvas;
    "Your stratgies at war were to evenly matched, leaving no victor";
 }
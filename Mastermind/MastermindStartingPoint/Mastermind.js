let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select");
//The background of each select tag should reflect the color option that the user chooses
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}
//change the background color of the select tag to match its value
function changeColor() {
    let color = this.value;
    this.style.setProperty("background-color", color);
    this.style.setProperty("color", "white");
    if(color === "yellow") {
        this.style.setProperty("color", "black");
    }
}
let submitButton = document.getElementById("submit");
//reset the game
let body=document.getElementById("gameBoard");
resetGame();
function resetGame() {
    //pick a random code when resetting the game
    pickRandomCode();
    var cd=document.getElementsByClassName("mmRow");
    var gb=document.getElementById("gameBoard");
    for(var m=cd.length-1;m>=0;m--){
        gb.removeChild(cd[m]);
    }
    

    // You'll need to activate the submit button
    // You'll want to clear any rows from a previous game if they exist
}
//a function here that will pick a random 4-color code and
//store it as an array in the variable named secretCode.
function pickRandomCode() {
    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(6 * Math.random())]);
    }
    window.alert(secretCode);
}
//You'll need to create an event listener on the submit button for when
//the user makes a guess.
submitButton.addEventListener("click",submit,false);
secretCodematchx=[0,0,0,0];
secretCodematchy=[0,0,0,0]
//Every time the user makes a guess, you need to append a new row in the board.
//I suggest that you make a row look something like this:
function submit(){
    var dv1=document.createElement("div");
    var dv2=document.createElement("div");
    var dv3=document.createElement("div");
    dv1.appendChild(dv2);
    dv1.appendChild(dv3);
    dv1.className="mmRow";
    dv2.className="guess";
    dv3.className="feedback";
    secretCodematchx=[0,0,0,0];
    secretCodematchy=[0,0,0,0];
    for(let select of selects){
        var dv=document.createElement("div");
        dv.className=select.value + " indicator";
        dv2.appendChild(dv);
    }
    for(var i=0;i<4;i++){
        var dv=document.createElement("div");
        dv.className="indicator ";
        if(secretCode[i]==selects[i].value){

            dv.className+="black";
            dv3.appendChild(dv);
            secretCodematchx[i]=1;
            secretCodematchy[i]=1
        }   
    }  
    for(var i=0;i<4;i++){
        var dv=document.createElement("div");
        dv.className="indicator ";
        for(var j=0;j<4;j++){
            if(secretCode[j]==selects[i].value && i!=j && secretCodematchx[i]==0 && secretCodematchy[j]==0){
                dv.className+="white";
                dv3.appendChild(dv);
                secretCodematchx[i]=1;
                secretCodematchy[j]=1;
                
            }
        }
    }
    body.appendChild(dv1);
}
/*

    <div class="mmRow">
        <div class="guess">
            <div class="color indicator"></div>
            <div class="color indicator"></div>
            <div class="color indicator"></div>
            <div class="color indicator"></div>
        </div>
        <div class="feedback">
            <div class="color indicator"></div>
            <div class="color indicator"></div>
        </div>
    </div>
*/

/* The color class name would be the color that you want the indicator to be
such as "red", "blue", "black", "white", etc. The CSS is already set up
so that the indicator divs will look like circles*/
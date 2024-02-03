var randomNumber = Math.random();
randomNumber = Math.floor((randomNumber*6)+1);
if(randomNumber==1){
    document.querySelector("img").setAttribute("src","dice1.png");
}
if(randomNumber==2){
    document.querySelector("img").setAttribute("src","dice2.png");
}
if(randomNumber==3){
    document.querySelector("img").setAttribute("src","dice3.png");
}
if(randomNumber==4){
    document.querySelector("img").setAttribute("src","dice4.png");
}
if(randomNumber==5){
    document.querySelector("img").setAttribute("src","dice5.png");
}if(randomNumber==6){
    document.querySelector("img").setAttribute("src","dice6.png");
}

var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
if(randomNumber1==1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
}
if(randomNumber1==2){
    document.querySelector(".img2").setAttribute("src","dice2.png");
}
if(randomNumber1==3){
    document.querySelector(".img2").setAttribute("src","dice3.png");
}
if(randomNumber1==4){
    document.querySelector(".img2").setAttribute("src","dice4.png");
}
if(randomNumber1==5){
    document.querySelector(".img2").setAttribute("src","dice5.png");
}if(randomNumber1==6){
    document.querySelector(".img2").setAttribute("src","dice6.png");
}
 
if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 winner";
}
if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 winner";
}
if(randomNumber1==randomNumber){
    document.querySelector("h1").innerHTML = "draw";
}

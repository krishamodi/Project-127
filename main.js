song1="";
song2="";

function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,500);
}

function song_name(){
song1.play();
}
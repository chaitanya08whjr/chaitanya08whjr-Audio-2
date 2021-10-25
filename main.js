song = "";
song1 = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song = loadSound("Harry Potter theme song.mp3");
    song1 = loadSound("Peter Pan.mp3");
    console.log('song loaded');
}

function draw(){
    image(video, 0, 0, 600, 500)
}
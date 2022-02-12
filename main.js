rwx="";
lwx="";
rwy="";
lwy="";
function setup() {
    canvas=createCanvas(500,400);
    canvas.position(400,240);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.poseNet(video,modelLoaded);   
    classifier.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,canvas.width,canvas.height);
}

function preload() {
    Believer=loadSound("Believer.mp3");
    Born_for_this=loadSound("BornForThis.mp3");
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if(results.length>0){
        rwx=results[0][0].poses.rightWrist.x;
        rwy=results[0][0].poses.rightWrist.y;
        lwx=results[0][0].poses.leftWrist.x;
    lwy=results[0][0].poses.leftWrist.y;
    }
}
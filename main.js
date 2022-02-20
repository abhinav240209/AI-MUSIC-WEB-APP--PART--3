rwx="";
lwx="";
rwy="";
lwy="";
lws="";
song_status=true;
function setup() {
    canvas=createCanvas(500,400);
    canvas.position(400,240);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.poseNet(video,modelLoaded);   
    classifier.on('pose',gotPoses);
}

function draw() {
    fill("red");
    stroke("black");
    image(video,0,0,canvas.width,canvas.height);
    if(Believer.isPlaying()){
        song_status=true;
    }
    else{
        song_status=false;
    }

    if(lws>0.2){
        circle(lwx-80,lwy-50,50);
        Born_for_this.stop();
    }

    if(song_status==false){
        Believer.play();

    }
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
        console.log(results);
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
        lwx=results[0].pose.leftWrist.x;
    lwy=results[0].pose.leftWrist.y;
    lws=results[0].pose.leftWrist.confidence;
    }
}
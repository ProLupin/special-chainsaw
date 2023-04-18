function preload(){

}
function setup(){
    canvas=createCanvas(400,350);
    canvas.position(520,170);
    video=createCapture(VIDEO);
    video.size(400,350);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("Posenet is initialised.");
}
function draw(){
    image(video,0,0,400,350)
}
function takeSnapshot(){
    save("mustachefilter.png");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
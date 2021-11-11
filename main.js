
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(550,135);
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet.poseNet(video,modelLoaded);
    posenet.on("pose",getposes)
}


function getposes(result){
    if (result.length>0){
console.log(result);



leftwristX=result[0].pose.leftWrist.x;
rightwristX=result[0].pose.rightWrist.x;
console.log(noseX,noseY,rightwristX,leftwristX);
difference=floor(leftwristX - rightwristX);
    }
}

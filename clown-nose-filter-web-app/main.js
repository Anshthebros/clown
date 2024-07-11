nosex=0;
nosey=0;
leyex=0;
leyey=0;
reyex=0;
reyey=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png"); 
eyes=loadImage("https://i.postimg.cc/MKhPbgjS/b808bcb401b6738c1901a93fc24cf52a.png");
}
function setup(){
canvas=createCanvas(450,350);
canvas.center();
video=createCapture(VIDEO);
video.size(450,350);
video.hide();
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is loaded')
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x - 14;
        nosey=results[0].pose.nose.y - 10;
        reyex=results[0].pose.rightEye.x - 7;
        reyey=results[0].pose.rightEye.y - 5;
        leyex=results[0].pose.leftEye.x - 7;
        leyey=results[0].pose.leftEye.y - 5;        
        console.log("nose.X = ",results[0].pose.nose.x);
        console.log("nose.Y = ",results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,450,350);
image(clown_nose, nosex, nosey, 25, 25);
image(eyes, reyex, reyey, 15, 10);
image(eyes, leyex, leyey, 15, 10);
//fill(255,0,0);
//stroke(0, 0, 0);
//circle(nosex, nosey, 20);
}
function take_snapshot(){
    save('stuff.png')
}
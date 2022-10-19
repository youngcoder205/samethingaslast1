nosex = 0;
nosey = 0;
difference = 0;
leftwristx = 0;
rightwristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 500);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    document.getElementById("square_side").innerHTML = "The width and the height of the square is " + difference + "px"
    background('#969A97');
    fill("green")
    stroke("red")
  textSize(difference)
  text("Aarav", nosex, nosey)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
     console.log(results);
     nosex = results[0].pose.nose.x
     nosey = results[0].pose.nose.y
     leftwristx = results[0].pose.leftWrist.x
     rightwristx = results[0].pose.rightWrist.x
     difference = floor(leftwristx - rightwristx)
    }

    
}
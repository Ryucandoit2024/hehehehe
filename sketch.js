var pictureList; //this variable is used in preload() and in draw() so we create it outside of those sections.
let catImg;

function preload() {
  pictureList = [];
  
  var imgCount = 7; //total number of images
  //use a for loop to load all 7 images into the array
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage((i + 1) + ".png");
    catImg = loadImage('cat.png');
  }
}


function setup() {
  createCanvas(600, 600);
  noLoop(); 
}

function draw() {
  background(255);
  let r = random(255);
  let g = random(255);
  let b = random(255);
  tint(r, g, b);
  image(catImg, 0, 0, width, height);
}


function draw() {
  background(219,190,187); 

  var n = 60;

  for (var i = 0; i < n; i++) { //squares

    var r = int(random(200, 250));
    var g = int(random(160, 195));
    var b = int(random(170, 190));

    fill(r, g, b);
    noStroke();

    //random position values:
    var x = int(random(0, 400));
    var y = int(random(0, 400));


    rect(x, y, (random(10, 300)), (random(10,3000))); 
  }


  var n = 45; //images

  for (var i = 0; i < n; i++) {
    
    var r = int(random(0, 7)); 
    var randomImage = pictureList[r] 
    
    var x = int(random(-100, 300));
    var y = int(random(-100, 300));
     
    image(randomImage, x, y, randomImage.width, randomImage.height);
    rotate(HALF_PI / 11.25)
  }

  
  
  //save("final-1.jpg"); //uncomment to save images; never use without the noLoop() in setup()

  // let r = random(255);
  // let g = random(255);
  // let b = random(255);
  // tint(r, g, b);
  
     {
    
    let r = random(255);
    let g = random(255);
    let b = random(255);
    tint(r, g, b);
    image(catImg, 0, 0, width, height);
  }
  
}

function mouseClicked() {
  redraw();
}
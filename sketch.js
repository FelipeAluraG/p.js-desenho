function setup() {
    createCanvas(1000, 1414);
   background("rgb(103,184,59)");
  }
  
  function draw() {
    
   stroke("rgb(241,255,0)");
   fill("rgb(241,255,0)");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) { 
      rect(mouseX,  mouseY, 20, 35);
    }
  }
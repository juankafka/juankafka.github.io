let font
let noiseSlider, sizeSlider, colorSlider;
let tracking = 0
let colorPicker
let sliderIndex = 2

var input

function preload() {
  font = loadFont('NotoSerifDisplay-ExtraLightItalic.ttf')
//  font = loadFont('NotoJuans-Thin.otf')
}

function rotateAngle() {
  return radians(dotRSlider.value())
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // noStroke()
  frameRate = 30
  
  sliderX = 50
  sliderY = 25
  sliderW = "145px"
  
  input = createInput('Type!');
  input.position(sliderX, sliderY*sliderIndex+1);
  sliderIndex=sliderIndex+1
  
  // X
  xPosSlider = createSlider(0, windowWidth, windowWidth/5, 1);
  xPosSlider.position(sliderX, sliderY*sliderIndex+1);
  xPosSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Y
  yPosSlider = createSlider(0, windowHeight, windowHeight/1.7, 1);
  yPosSlider.position(sliderX, sliderY*sliderIndex+1);
  yPosSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Noise
  noiseSlider = createSlider(-50, 50, 1, 1);
  noiseSlider.position(sliderX, sliderY*sliderIndex+1);
  noiseSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Dot Width Size
  dotWSlider = createSlider(-150, 150, 35, 1);
  dotWSlider.position(sliderX, sliderY*sliderIndex+1);
  dotWSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Dot Height Size
  dotHSlider = createSlider(-150, 150, 5, 1);
  dotHSlider.position(sliderX, sliderY*sliderIndex+1);
  dotHSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Dot Rotation Size
  dotRSlider = createSlider(0, 360, 148, 1);
  dotRSlider.position(sliderX, sliderY*sliderIndex+1);
  dotRSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Font Size
  fontSizeSlider = createSlider(8, 1000, 200, 1);
  fontSizeSlider.position(sliderX, sliderY*sliderIndex+1);
  fontSizeSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Stroke Thickness
  strokeThicknessSlider = createSlider(0, 10, 1, .01);
  strokeThicknessSlider.position(sliderX, sliderY*sliderIndex+1);
  strokeThicknessSlider.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Stroke Color
  strokeColorPicker = createColorPicker('#0033FF');
  strokeColorPicker.position(sliderX, sliderY*sliderIndex+1);
  strokeColorPicker.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Dot Color
  dotColorPicker = createColorPicker('#E4D101');
  dotColorPicker.position(sliderX, sliderY*sliderIndex+10);
  dotColorPicker.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // Background Color
  colorPicker = createColorPicker('#FF7A70');
  colorPicker.position(sliderX, sliderY*sliderIndex+20);
  colorPicker.style('width', sliderW);
  sliderIndex=sliderIndex+1
  
  // // Gif Button
  // buttonSave = createButton('GIF');
  // buttonSave.mousePressed(saveGIF); 
  // buttonSave.style('width', sliderW);
  // buttonSave.position(sliderX, sliderY*sliderIndex+30);
  
  
}


function draw() {
  
  background(colorPicker.color(), windowHeight, windowHeight);
  
  const xPos = xPosSlider.value();
  const yPos = yPosSlider.value();
  const noise = noiseSlider.value();
  const dotW = dotWSlider.value();
  const dotH = dotHSlider.value();
  const dotR = dotRSlider.value();
  const fontSize = fontSizeSlider.value();
  const name = input.value();
  const strokeThickness = strokeThicknessSlider.value();
  
  labelX = 1.5
  sliderIndexY = sliderY/10+1.1
  background(colorPicker.color());
  
  strokeWeight()
  stroke(strokeColorPicker.color())
  fill(colorPicker.color()*.01)
  textSize(14)
  textStyle(BOLD)
  text('x', xPosSlider.x * labelX + xPosSlider.width, sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('y', yPosSlider.x * labelX + yPosSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('Noise', noiseSlider.x * labelX + noiseSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('Dot Width Size', dotWSlider.x * labelX + dotWSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('Dot Height Size', dotHSlider.x * labelX + dotHSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('Dot Rotation', dotRSlider.x * labelX + dotRSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  text('Font Size', fontSizeSlider.x * labelX + fontSizeSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1
  
  
    text('Stroke Thickness', strokeThicknessSlider.x * labelX + strokeThicknessSlider.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1.2
  
    text('Stroke Color', colorPicker.x * labelX + colorPicker.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1.3
  
    text('Dot Color', colorPicker.x * labelX + colorPicker.width,  sliderY*sliderIndexY);
  sliderIndexY=sliderIndexY+1.4
  
    text('Background Color', colorPicker.x * labelX + colorPicker.width,  sliderY*sliderIndexY);
  
  points = font.textToPoints(input.value(), xPosSlider.value(), yPosSlider.value(), fontSizeSlider.value())
      
  for (let pt of points) {
    push ()
      translate(pt.x + random(noiseSlider.value()), pt.y + random(noiseSlider.value()))
      rotate(rotateAngle())
      strokeWeight(strokeThicknessSlider.value())
      stroke(0, fill(dotColorPicker.color()))
      stroke(color(strokeColorPicker.color()));
      ellipse(0, 0, dotWSlider.value(), dotHSlider.value());
    pop()
    
    //   const getCharacterBoundaries = (name) => {
    //     return text.split(name).reduce((arr, char) => {
    //       const prevBoundary = arr[arr.length - 1] || 0

    //       // Convert the single character into points and count the length.
    //       const test = font.textToPoints(char, 0, 0, fontSize, {
    //         sampleFactor,
    //         simplifyThreshold: 0
    //       })

    //       // Offset the length by the previous character boundary.
    //       arr.push(prevBoundary + trackingSlider.value())
    //       return arr
    //     }, [])
    //   }

    // push ()
    //   translate(width/2, height/2)
    //   rotate(rotateAngle())
    //   ellipse(
    //     pt.x + random(noiseSlider.value()), 
    //     pt.y + random(noiseSlider.value()),
    //     dotWSlider.value(),
    //     dotHSlider.value()
    //     )
    // pop()
    
    // translate(pt.x + random(noiseSlider.value()), pt.y+random(noiseSlider.value()));
    // rotate(rotateAngle())
    // ellipse(0,0,dotWSlider.value(),dotHSlider.value())
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function saveGIF(){
  createLoop({duration:3, gif:true, canvas:canvas,render:true,  download:false})
}

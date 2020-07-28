let font
let word = "hello"
let width = 1000
let height = 500
let noiseSlider, sizeSlider, colorSlider;
let sliderY = 25
let tracking = 0

function preload() {
  font = loadFont('NotoSerifDisplay-ExtraLightItalic.ttf')
  font = loadFont('NotoJuans-Thin.otf')
}

function rotateAngle() {
  return radians(dotRSlider.value())
}

function setup() {
  createCanvas(width, height)  
  noStroke()
  
  input = createInput('hello');
  input.position(20, sliderY);
  
  // create sliders
  xPosSlider = createSlider(0, width, width/3, 1);
  xPosSlider.position(20, sliderY*2);
  yPosSlider = createSlider(0, height, height/1.6, 1);
  yPosSlider.position(20, sliderY*3);
  noiseSlider = createSlider(0, 50, 1, 1);
  noiseSlider.position(20, sliderY*4);
  dotWSlider = createSlider(4, 150, 4, 1);
  dotWSlider.position(20, sliderY*5);
  dotHSlider = createSlider(4, 150, 4, 1);
  dotHSlider.position(20, sliderY*6);
  dotRSlider = createSlider(0, 360, 0, 1);
  dotRSlider.position(20, sliderY*7);
  fontSizeSlider = createSlider(8, 1000, 200, 1);
  fontSizeSlider.position(20, sliderY*8);
  rSlider = createSlider(0, 255, 255);
  rSlider.position(20, sliderY*9);
  gSlider = createSlider(0, 255, 204);
  gSlider.position(20, sliderY*10);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, sliderY*11);
  trackingSlider = createSlider(0, 1000, 0, 1);
  trackingSlider.position(20, sliderY*12);
}

function draw() {
  background(0)
  const xPos = xPosSlider.value();
  const yPos = yPosSlider.value();
  const noise = noiseSlider.value();
  const dotW = dotWSlider.value();
  const dotH = dotHSlider.value();
  const dotR = dotRSlider.value();
  const fontSize = fontSizeSlider.value();
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  const name = input.value();
  const tracking = trackingSlider.value();
  background(r, g, b);
  text('x', xPosSlider.x * 2 + xPosSlider.width, sliderY*2.4);
  text('y', yPosSlider.x * 2 + yPosSlider.width,  sliderY*3.4);
  text('Noise', noiseSlider.x * 2 + noiseSlider.width,  sliderY*4.4);
  text('Dot Width Size', dotWSlider.x * 2 + dotWSlider.width,  sliderY*5.4);
  text('Dot Height Size', dotHSlider.x * 2 + dotHSlider.width,  sliderY*6.4);
  text('Dot Rotation', dotRSlider.x * 2 + dotRSlider.width,  sliderY*7.4);
  text('Font Size', fontSizeSlider.x * 2 + fontSizeSlider.width,  sliderY*8.4);
  text('Red', rSlider.x * 2 + rSlider.width,  sliderY*9.4);
  text('Green', gSlider.x * 2 + gSlider.width,  sliderY*10.4);
  text('Blue', bSlider.x * 2 + bSlider.width,  sliderY*11.4);
  text('Tracking', trackingSlider.x * 2 + trackingSlider.width,  sliderY*12.4);

  points = font.textToPoints(input.value(), xPosSlider.value(), yPosSlider.value(), fontSizeSlider.value())
      
  for (let pt of points) {
    push ()
      translate(pt.x + random(noiseSlider.value()), pt.y + random(noiseSlider.value()))
      rotate(rotateAngle())
      stroke(.01, fill(r, g, b));
      // pt.color = color(255,255,255)
      ellipse(
        0, 
        0,
        dotWSlider.value(),
        dotHSlider.value()
        )
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


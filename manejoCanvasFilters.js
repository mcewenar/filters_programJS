let imgcanvas;
let fileinput;
let redimg;
let grayimg;
//var blurimg;
let rainbowimg;
let image = null;
function upload() {
  
  /* var fileinput =     document.getElementById("textinp");
  var filename = fileinput.value;
  alert("You choose"+ filename); */
  fileinput =  document.getElementById("finput");
  image = new SimpleImage(fileinput);
  redimg = new SimpleImage(fileinput);
  rainbowimg = new SimpleImage(fileinput);
  grayimg = new SimpleImage(fileinput);
  //blurimg = new SimpleImage(fileinput);
  
  imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}
function imageIsLoaded() {
  if(image == null || ! image.complete()) {
    alert("Image is not loaded");
  }
  else {
    return true;
  }
}
function filterGray() {
  for(let pixel of grayimg.values()) {
    let avg= (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function makegray() {
  if(imageIsLoaded(grayimg)) {
    filterGray();
    grayimg.drawTo(imgcanvas);
  }
}
function filterRed() {
    for (let pixel of redimg.values()) {
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(avg < 128) {
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue ((2*avg)-255);
    }
  }
}
function makered() {
  if(imageIsLoaded(redimg))
    {
      filterRed();
      redimg.drawTo(imgcanvas);
    }
  
}
function filterRainbow() {
  for (let pixel of rainbowimg.values()) {
    let x = pixel.getX();
    let y = pixel.getY();
    let w = rainbowimg.getWidth();
    let h = rainbowimg.getHeight();
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (y <= h/7) {
      if ( avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0); 
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    
    else if (y > h/7 && y <= (h*2)/7) {
      if (avg <128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0); 
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    else if (y > (h*2)/7 && y <= (h*3)/7)
      {
        if (avg<128) {
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
           
        }
      }
    
    else if (y > (h*3)/7 && y <= (h*4)/7) {
      if (avg<128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        
      }
      else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    else if (y > (h*4)/7 && y <= (h*5)/7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);   
      }
      else{
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue (255);       
      }
    }
    else if (y > (h*5)/7 && y <= (h*6)/7) {
      if (avg < 128) {
      pixel.setRed(0.8*avg);
      pixel.setGreen(0);
      pixel.setBlue(2*avg); 
      }
      else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    else if (y > (h*6)/7 && y <= (h*7)/7) {
      if (avg < 128) {
        pixel.setRed(1.6 *avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else{   
        pixel.setRed(0.4*avg + 153);
        pixel.setGreen(0);
        pixel.setBlue(0.4*avg + 153);   
      }
    }
  }
}
 
  function dorainbow() {
    if(imageIsLoaded(rainbowimg)) {
      filterRainbow();
      rainbowimg.drawTo(imgcanvas);
    }
  }  
/*function FilterBlur () {
  
}*/
function doclear() {
 upload();
  return;
}
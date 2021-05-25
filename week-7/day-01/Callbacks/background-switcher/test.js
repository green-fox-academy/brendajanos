
var i = 0;
var images = []; 
var time = 5000; 

images[0] = "url(https://loremflickr.com/cache/resized/4043_4574536007_8ebd0b1282_1280_800_g.jpg)";
images[1] = "url(https://i.ytimg.com/vi/n1wUYGvCOkA/maxresdefault.jpg)";
images[3] = "url(https://st2.depositphotos.com/1475713/8814/i/950/depositphotos_88140056-stock-photo-cute-and-funny-bunny.jpg)";

function changeImage() {
  var el = document.getElementById('body');
  el.style.backgroundImage = images[i];
  if (i < images.length - 1) {
      i++;
  } else {
      i = 0;
  }
  setTimeout('changeImage()', time);
}

window.onload = changeImage;
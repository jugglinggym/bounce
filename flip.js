var my_toggle = false;

function flip() {
  var images = document.getElementsByClassName('my_image');

  my_toggle = !my_toggle;

  for (var i = 0; i < images.length; i++) {
    if (my_toggle) {
      images[i].style.transform = "rotateY(180deg)";
    } else {
      images[i].style.transform = ""; // back to default 
    }

  }
}

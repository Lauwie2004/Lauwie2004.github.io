var clicked = 0;
var c = 60;
var btn = getElementById("click-button");

function click_counter() {
  clicked += 1;
  document.getElementById("clicks").innerHTML = clicked;
  if (clicked == 1) {
    setInterval(myClock, 1000);
  };
};

function myClock() {
  if (c > 0) {
    c = c - 1;
    a = clicked / (60 - c);
    document.getElementById("timer").innerHTML = c;
    document.getElementById("average_click").innerHTML = a;
  } else {
    clearInterval(myClock);
    var meanvalueofclick = clicked / 60;
    if(!alert("You have " + meanvalueofclick + " clicks per second!")){window.location.reload();}
    btn.parentNode.removeChild(btn);
  };
};

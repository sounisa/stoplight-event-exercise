var btnStop = document.getElementById("stopButton")
var btnSlow = document.getElementById("slowButton")
var btnGo = document.getElementById("goButton")

var lgtStop = document.getElementById("stopLight")
var lgtSlow = document.getElementById("slowLight")
var lgtGo = document.getElementById("goLight")



btnStop.addEventListener('click',function(e){
  lgtStop.classList.toggle('stop');
});



btnSlow.addEventListener('click',function(){
  lgtSlow.classList.toggle('slow');
});

btnGo.addEventListener('click',function(){
  lgtGo.classList.toggle('go');
});

btnStop.addEventListener('mouseenter',function(e){
  console.log(e.target = "You are touching my Stop Button")
});

btnStop.addEventListener('mouseleave',function(e){
  console.log(e.target = "You have stopped touching my Stop Button")
});

btnSlow.addEventListener('mouseenter',function(e){
  console.log(e.target = "You are touching my Slow Button")
});

btnSlow.addEventListener('mouseleave',function(e){
  console.log(e.target = "You have stopped touching my Slow Button")
});

btnGo.addEventListener('mouseenter',function(e){
  console.log(e.target = "You are touching my Go Button")
});

btnGo.addEventListener('mouseleave',function(e){
  console.log(e.target = "You have stopped touching my Go Button")
});


document.body.addEventListener('click', function(e) {
  if(e.target.matches('#stopButton')) {
    if(lgtStop.classList.contains('stop')) {
      console.log(`${e.target.textContent} bulb on`);
    } else {
      console.log(`${e.target.textContent} bulb off`);
    }
  }
if(e.target.matches('#slowButton')) {
  if(lgtSlow.classList.contains('slow')) {
    console.log(`${e.target.textContent} bulb on`);
  } else {
    console.log(`${e.target.textContent} bulb off`);
  }
}

if(e.target.matches('#goButton')) {
  if(lgtGo.classList.contains('go')) {
    console.log(`${e.target.textContent} bulb on`);
  } else {
    console.log(`${e.target.textContent} bulb off`);
  }
}
})

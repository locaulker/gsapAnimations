$(function() {
  
  startTween();

});

function startTween() {
  TweenLite.to($("#toolBox"), 1, { x: 290, y: 225 });
}
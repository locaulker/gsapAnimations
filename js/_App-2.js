$(function() {
  startTween();
});

function startTween() {
  TweenLite.to($("#toolBox"), 1, { x: 290, y: 225, scale: 1.5, onComplete: returnToNormal });
  TweenLite.to($(".asapReg"), 1, { color: "#ff0000", fontSize: "+=75", onComplete: returnTextToNormal });
}

function returnToNormal() {
  TweenLite.to($("#toolBox"), 1, { x: 0, y: 0, scale: 1 });
}

function returnTextToNormal() {
  TweenLite.to($(".asapReg"), 1, { color: "#fff", fontSize: '-=75' });
}
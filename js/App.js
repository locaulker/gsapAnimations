$(function(){
  init();
});


function init(){
	const toolTL = new TimelineMax();
	const duration = .5;

	toolTL.to('#toolBox', duration, {y: -100, ease: Linear.easeInOut});
	toolTL.to('#weightLifter', duration, {y: -100, ease: Bounce.easeInOut});
	toolTL.to('#crazy', duration, {y: -100, ease: Elastic.easeInOut});
	toolTL.to('#leaf', duration, {y: -100, ease: Back.easeInOut});

	// $("#start").on("click", () => {toolTL.play();});
	// $("#stop").on("click", () => {toolTL.stop();});
	// $("#pause").on("click", () => {toolTL.pause();});
	// $("#reverse").on("click", () => {toolTL.reverse();});
}
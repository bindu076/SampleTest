// take 5 images
// display first image and hide the remaining.
// after few seconds first slide should be disabled and second slide should take the first slide place
//remove first and display second
// second on should be hidden and third slide is shown
// third is hidden  nd fourth should be hidden
// fourth shud be hidden dn five shud be shown
// five shud be hidden again first slide should be shown

var noSlideImages = 5
var x = 1;
var figureSlide = document.getElementsByClassName("fig");
for(var i = 1;i < noSlideImages;i++){
		figureSlide[i].style.display = "none";
	}	
function hideSlide(d){
	if(d < noSlideImages && figureSlide[d].style.display == "none"){
		figureSlide[d-1].style.display = "none";
		figureSlide[d].style.display = "block";
	}else{
		figureSlide[d-1].style.display = "none";
		figureSlide[0].style.display = "block";
		x =0;
	}			
x++;
}	
setInterval(function(){
	hideSlide(x);
},2000);
	







  
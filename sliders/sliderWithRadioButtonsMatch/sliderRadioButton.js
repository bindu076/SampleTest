// five radio buttons
// put 5 sliderImages for sliding 
// as the image change the radio button shud be highlighted that matches the index of image.


var noSlideImages = 5
var initialSlide = 1;
var figureSlide = document.getElementsByClassName("fig");
var radioButton = document.getElementsByClassName("inputClass");
radioButton[0].checked = true;
	for(var i = 1;i < noSlideImages;i++){
			figureSlide[i].style.display = "none";
		}	
	function hideSlide(toggleSlide){
		if(toggleSlide < noSlideImages && figureSlide[toggleSlide].style.display == "none"){
			figureSlide[toggleSlide-1].style.display = "none";
			radioButton[toggleSlide-1].checked = false;
			figureSlide[toggleSlide].style.display = "block";
			radioButton[toggleSlide].checked = true;
		}else{
			figureSlide[toggleSlide-1].style.display = "none";
			radioButton[toggleSlide-1].checked = false;
			figureSlide[0].style.display = "block";
			radioButton[0].checked = true;
			initialSlide =0;
		}			
	initialSlide++;
	}	
	setInterval(function(){
		hideSlide(initialSlide);
	},2000);
	
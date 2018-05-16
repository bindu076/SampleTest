 function ajaxCall() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     num1();
    }
    else{
    	console.log("failed to make an ajax call");
    }
  };
  xhttp.open("POST", "dataForPage.json" ,true);
  xhttp.send();
} 
var stringObject = [
				  "Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  "North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"
				  ];
				  
function alphabeticSearch(){

		var searchThisElement = document.getElementById("inputField").value;
		function sortArray(array){
			if(array.search(searchThisElement) == 0){
				return array;	
			}
		}
		var filter = stringObject.filter(sortArray);
		if(filter.length == 0){
				document.getElementById("createPara").innerHTML = "Match Not Found";
			}
			else{
				document.getElementById("createPara").innerHTML = "";
			}
		for(var i = 0;i < filter.length;i++){
			var para = document.createElement("p");
			var childNode = document.createTextNode(filter[i]);
				para.appendChild(childNode);
				para.setAttribute("class","optionId")
				document.getElementById("createPara").appendChild(para);
		}
			document.getElementById("createPara").addEventListener("click",searchMatch,true);
			
		function searchMatch(){
			for(var j = 0;j < filter.length;j++){
				if(event.target == document.getElementsByClassName("optionId")[j]){
					document.getElementById("inputField").value = event.target.innerHTML;
					
				break;
				}
			}
			document.getElementById("createPara").innerHTML = "";
		}
		
	}
	
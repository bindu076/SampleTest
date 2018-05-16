var lengthPerPage = 3;
var x =0;
var noOfRows = 3;
var obj = [
	{name:"john",last:"Mark",Id:"1"},	
	{name:"ron",last:"Mark",Id:"2"},	
	{name:"kithy",last:"Mark",Id:"3"},	
	{name:"kittu",last:"Mark",Id:"4"},	
	{name:"tom",last:"Mark",Id:"5"},	
	{name:"paul",last:"Mark",Id:"6"},	
	{name:"siri",last:"Mark",Id:"7"},	
	{name:"nimi",last:"Mark",Id:"8"},	
	{name:"sagar",last:"Mark",Id:"9"},	
	{name:"siri",last:"Mark",Id:"10"},
	{name:"nimi",last:"Mark",Id:"11"},
	{name:"siri",last:"Mark",Id:"12"},
	{name:"siri",last:"Mark",Id:"13"},
	{name:"sony",last:"Mark",Id:"14"},
	{name:"rohan",last:"Mark",Id:"15"},
	
]
var length = Math.round(obj.length/noOfRows);
function num1(){
	var body = document.getElementById("createTable");
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
	 for(var i = 0;i < lengthPerPage; i++){	
		var row = document.createElement("tr");
		for (var j = 0; j < 3; j++) {
		  var cell = document.createElement("td");
		  if(j == 0){
			  var cellText = document.createTextNode(obj[i].name);
			  cell.setAttribute("class","tableName");
		  }
		  else if(j == 1){
			  var cellText = document.createTextNode(obj[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else{
			  var cellText = document.createTextNode(obj[i].Id); 
			  cell.setAttribute("class","tableId");
		  }
		  cell.appendChild(cellText);
		  row.appendChild(cell);
		}
		tblBody.appendChild(row);
		x++;
		
	  }
	  lengthPerPage += 3;
	  tbl.appendChild(tblBody);
	body.appendChild(tbl);
	tbl.setAttribute("class", "table table-striped");
	
	 } 

num1();

function nextClick(){
	if(lengthPerPage - noOfRows < obj.length){
	var k = 0;
	for(var i = x;i < lengthPerPage; i++){	
	document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
	document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
	document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
	k++;
	x++;
	}
	lengthPerPage += 3;
	}
}


function previousClick(){
	if(x !== 0 && x > noOfRows){
	var m = x;
	var k = 0;
	for(var i = m - (noOfRows*2);i < m - noOfRows; i++){	
	document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
	document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
	document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
	k++;
	x--;
	}
	lengthPerPage -= noOfRows;
	}
	
}



// store the input value and table values.
// compare input value with table value.
// hide all the rows except the one with the matched element.
	

// function filterTableContent(){
	// var inputDataCheck = document.getElementById("inputData").value;
	// var firstNameData = [];
	// for(var i = 0;i<obj.length;i++){
	 // firstNameData.push(document.getElementsByClassName("tableName")[i].innerHTML);
	// }
	// // function data(n){
		// // if(inputDataCheck == n ){
			// // return n;
		// // } 
	// // }
	// // y = firstNameData.filter(data);
	// var valuei =firstNameData.indexOf(inputDataCheck);
	// for(var i = 0;i<obj.length;i++){
		// if(i == valuei || firstNameData[i] == inputDataCheck){
			// document.getElementsByTagName("tr")[i].style.display = "block;"
		// }else{
			// document.getElementsByTagName("tr")[i].style.display = "none";
		// }
	// }
	
// }
	
function filterTableContent(nclick,pclick){
	var inputDataCheck = document.getElementById("inputData").value;
	var firstNameData = [];
	for(var j = 0;j< length;j++){
	for(var i = 0;i<3;i++){
		firstNameData.push(document.getElementsByClassName("tableName")[i].innerHTML);
	}
	nclick();
	}
	var valueOfi =firstNameData.indexOf(inputDataCheck);
	for(var j = 0;j< length;j++){
	for(var i = 0;i<3;i++){
		if(firstNameData[valueOfi] == document.getElementsByClassName("tableName")[i].innerHTML || document.getElementsByClassName("tableName")[i].innerHTML == inputDataCheck){
			nclick();
			document.getElementsByTagName("tr")[i].style.display = "table-row"
		}
		else{
			document.getElementsByTagName("tr")[i].style.display = "none";
			
		}
	}
	 pclick();
	}
}

//last table elements ki next ledhu so prev call ipothundi.
//next call iyi prev call avthe thats fine but ikada next ledhu so direct previous ante neku ah element ravtlee
//rendu callbacks remove chesthe nek ah particular element ela call avthadi mari.neku oka table ah access untadi.x value set cheskoni call




// function load(){
	// var xhr = new XMLHttpRequest();
	// xhr.onreadystatechange = function(){
		// if(readyState == 4 && status == 200){
			// return addData();
		// }
	// }
	// xhr.open("GET",data.json,true);
	// xhr.send();
// }

// var rowLength = document.getElementById("tableBody").rows.length;
// console.log(rowLength);
// var dataPerPage = rowLength;
// var j =0;
// var x = dataPerPage + rowLength;

// var obj = [
	// {name:"john",last:"Mark",Id:"1"},	
	// {name:"ron",last:"Mark",Id:"2"},	
	// {name:"kithy",last:"Mark",Id:"3"},	
	// {name:"kittu",last:"Mark",Id:"4"},	
	// {name:"tom",last:"Mark",Id:"5"},	
	// {name:"paul",last:"Mark",Id:"6"},	
	// {name:"sonam",last:"Mark",Id:"7"},	
	// {name:"sail",last:"Mark",Id:"8"},	
	// {name:"sagar",last:"Mark",Id:"9"},	
	// {name:"rahul",last:"Mark",Id:"10"},
	// {name:"Nimi",last:"Mark",Id:"11"},
	// {name:"siri",last:"Mark",Id:"12"},
	// {name:"siri",last:"Mark",Id:"13"},
	// {name:"siri",last:"Mark",Id:"14"},
	// {name:"siri",last:"Mark",Id:"15"},
	// {name:"siri",last:"Mark",Id:"16"},
// ]

// function addData(){
	// for(var i = 0;i <dataPerPage; i++){
	// document.getElementsByClassName("tableName")[i].innerHTML = obj[i].name;
	// document.getElementsByClassName("tableLast")[i].innerHTML = obj[i].last;
	// document.getElementsByClassName("tableId")[i].innerHTML = obj[i].Id;
// }	
// }
// addData();

// function nextClick(){
	// if(x <= obj.length){
	// var k = 0;
	// for(var i = j+rowLength;i < x; i++){	
	// document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
	// document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
	// document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
	// k++;
	// j++;
	// }
	// x += rowLength;
	// }
// }

// function previousClick(){
	// if(j !== 0){
	// var m = j;
	// var k = 0;
	// for(var i = m-rowLength;i < m; i++){	
	// document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
	// document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
	// document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
	// k++;
	// j--;
	// }
	// }	
// }

var lengthPerPage = 3;
var noOfRows = 3;
var x =0;
var obj = [
	{name:"john",last:"Mark",Id:"1"},	
	{name:"ron",last:"Mark",Id:"2"},	
	{name:"kithy",last:"Mark",Id:"3"},	
	{name:"kittu",last:"Mark",Id:"4"},	
	{name:"tom",last:"Mark",Id:"5"},	
	{name:"paul",last:"Mark",Id:"6"},	
	{name:"sonam",last:"Mark",Id:"7"},	
	{name:"sail",last:"Mark",Id:"8"},	
	{name:"sagar",last:"Mark",Id:"9"},	
	{name:"rahul",last:"Mark",Id:"10"},
	{name:"Nimi",last:"Mark",Id:"11"},
	{name:"siri",last:"Mark",Id:"12"},
	{name:"siri",last:"Mark",Id:"13"},
	
]

function num1(){
	var body = document.getElementById("addTable");
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
	lengthPerPage += noOfRows;
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	tbl.setAttribute("class", "table table-striped");
	
	 } 


function nextClick(){
	if(x < obj.length){
	var k = 0;
	for(var i = x;i < lengthPerPage; i++){	
		if(x < obj.length){
		document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
		document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
		document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
		}else{
		document.getElementsByClassName("tableName")[k].innerHTML = "";
		document.getElementsByClassName("tableLast")[k].innerHTML = "";
		document.getElementsByClassName("tableId")[k].innerHTML = "";	
		}
		k++;
		x++;
	}
	}
	lengthPerPage += noOfRows;
}
function previousClick(){
	if(x !== 0 && x > noOfRows){
	var m = x;
	var k = 0;
	for(var i = m - (noOfRows *2);i < m - noOfRows; i++){	
		document.getElementsByClassName("tableName")[k].innerHTML = obj[i].name;
		document.getElementsByClassName("tableLast")[k].innerHTML = obj[i].last;
		document.getElementsByClassName("tableId")[k].innerHTML = obj[i].Id;
	k++;
	x--;
	}
	lengthPerPage -= noOfRows;
	}
	
}





var lengthPerPage = 3;
var noOfRows = 3;
var x =0;
var values = [];
function validate(){
	var first = document.getElementById("exampleInputFirstName").value;
var last = document.getElementById("exampleInputLastName").value;
var emailId = document.getElementById("exampleInputEmail1").value; 
var pwd1 = document.getElementById("exampleInputPassword1").value;
var pwd2 = document.getElementById("exampleInputPassword2").value;
var num = document.getElementById("exampleInputNumber").value;
	
	event.preventDefault();	
	
		if(!/^[a-zA-Z]+$/.test(first,last)){
			document.getElementById("firstNameHelp").innerHTML = "Enter a valid Name";
			document.getElementById("firstNameHelp").style.color = "red";
			document.getElementById("lastNameHelp").innerHTML = "Enter a valid Name";
			document.getElementById("lastNameHelp").style.color = "red";	
			}
			else{
			document.getElementById("firstNameHelp").innerHTML = "Enter your name";
			document.getElementById("firstNameHelp").style.color = "black";	
			document.getElementById("lastNameHelp").innerHTML = "Enter your name";
			document.getElementById("lastNameHelp").style.color = "black";	
			}
			if(!/\w@\w/.test(emailId)){
			document.getElementById("emailHelp").innerHTML = "Enter a valid emailID";
			document.getElementById("emailHelp").style.color = "red";	
			}
		
			else{
			document.getElementById("emailHelp").innerHTML = "We'll never share your email with anyone else.";
			document.getElementById("emailHelp").style.color = "black";	
			}
			if(!/[a-z\d$@$!%*#?&]{8,}$/.test(pwd1)){
			document.getElementById("passwordHelp").style.color = "red";
			}
			else{
			document.getElementById("passwordHelp").style.color = "black";	
			}
		
			if(pwd2 == pwd1){
			document.getElementById("passwordHelp2").innerHTML = "Password Match";
			}else{
			document.getElementById("passwordHelp2").innerHTML = "Password should contain at least one letter,a number and any one of these special characters [$@$!%*#?&]";
			document.getElementById("passwordHelp2").style.color = "black";
			}
			if(!/^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/.test(num)){
			document.getElementById("numberHelp").innerHTML = "Enter a valid number";
			}
			else{
			document.getElementById("numberHelp").innerHTML = "Enter phone number";
			}
		
			if(first !== "" && last !== "" && emailId !== "" && pwd1 !== ""&& pwd2 !== "" && num !== ""){
			document.getElementById("exampleCheck1").checked = true;
			storeData();
			}else{
			alert("Please fill all the fields");
			}


			function storeData(){
	
				var formObject = function(name,lastName,email){
				this.name = name,
				this.lastName = lastName,
				this.email = email
				}
				var object = new formObject(first,last,emailId);
				values.push(object);
				
				if(values.length > 0){
				function num1(){
				var body = document.getElementById("addTable");
				var tbl = document.createElement("table");
				var tblBody = document.createElement("tbody");
				 for(var i = 0;i < values.length; i++){	
					var row = document.createElement("tr");
					for (var j = 0; j < 3; j++) {
					  var cell = document.createElement("td");
					  if(j == 0){
						  var cellText = document.createTextNode(values[i].name);
						  cell.setAttribute("class","tableName");
							}
							else if(j == 1){
						  var cellText = document.createTextNode(values[i].lastName); 
						  cell.setAttribute("class","tableLast");
							}
							else{
						  var cellText = document.createTextNode(values[i].email); 
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
					num1();
				}
			}
}
	
	



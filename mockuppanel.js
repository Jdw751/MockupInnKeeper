//tester functions

// var x = document.getElementById("submitBtn");
// x.addEventListener("click", tester);


function tester() {

    alert("test");
}



// slide out panel functions
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// add to list functions



let categoryList = [];
let descriptionList = [];

// document.getElementById("category").innerHTML = categoryList;
document.getElementById("descript").innerHTML = descriptionList;

display = document.getElementById("category");

let displayedList = ""


function addToList(categoryID,descriptionID) {

	let category = categoryID.toString();
 	categoryList.push(category);

 	let description = descriptionID.toString();
 	descriptionList.push(description);

 	alert(descriptionList);
 	
 }



function displayMyList(){


	let displayedList = "";
	let listCount = descriptionList.length;


	for(let i = 0; i < listCount; i++){

		displayedList += "<div class='container-fluid'>"+ "<div class='row'>"+"<div class='col-sm-4'>"+categoryList[i] + "</div> " +"<div class='container-fluid'>"+ "<div class='row'>"+"<div class='col-sm-4'>"+descriptionList[i] + "</div> " + "<div class='container-fluid'>"+ "<div class='row'>"+"<div class='col-sm-4'>"+Active + "</div> "+ "</div> " + "</div> "+ "<br> ";


	}
	 document.getElementById("requestList").innerHTML = displayedList;


}


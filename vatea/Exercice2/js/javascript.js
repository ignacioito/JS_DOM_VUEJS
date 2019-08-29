let color = "";

function bt1IsClicked() {
	getColor();
	changeColor();
}

function getColor() {
	let temp = document.getElementById("dropdown");
	color = temp.options[temp.selectedIndex].value;
	//affiche a la console
	console.log(color);
	//
}

function changeColor() {
	document.getElementById("section1").style.backgroundColor = color;
}

//------------------------------------------------------------------

let myField = "";

function bt2IsClicked() {
	if (!checkIfEmpty()) {
		stringToVar();
		if(!checkIfExists()) {
			addLang();
		}
	}
}

function checkIfEmpty() {
	let isEmpty = true;
	if (document.getElementById("field").value == "") {
		//affiche a la console
		console.log("checkIfEmpty\(\) : ");
		console.log(isEmpty);
		//
		alert("Veuillez ne pas laisser le champ vide");
		return isEmpty;
	}
	isEmpty = false
	//affiche a la console
	console.log("checkIfEmpty\(\) : ");
	console.log(isEmpty);
	//
	return isEmpty;
}

function stringToVar() {
	myField = document.getElementById("field").value;
	//affiche a la console
	console.log("stringToVar\(\) : ");
	console.log(myField);
	//
}

function checkIfExists() {
	let uList = document.getElementById("liste");
	let itemsArr = uList.getElementsByTagName("li");
	let exists = false;
	//affiche a la console
	console.log("checkIfExists\(\), liste ul : ")
	console.log(uList);
	console.log("checkIfExists\(\), élements li : ")
	console.log(itemsArr);
	//
	for (let i = 0; i < itemsArr.length; i++) {
		if (myField.toUpperCase() == itemsArr[i].textContent.toUpperCase()) {
			exists = true;
			//affiche a la console
			console.log("checkIfExists\(\), exists : ");
			console.log(exists);
			//
			alert("Veuillez insérer un langage de programmation n\'existant pas déjà dans la liste \(non sensible à la casse\)");
			return exists;
		}
	}
	console.log("checkIfExists\(\), exists : ");
	console.log(exists);
	return exists;
}

function addLang() {
	let langToAdd = document.createElement("li");
	langToAdd.textContent = myField;
	document.getElementById("liste").appendChild(langToAdd);
	document.getElementById("field").value = "";
	//affiche a la console
	console.log("addLang\(\) : ");
	console.log(langToAdd);
	//
}
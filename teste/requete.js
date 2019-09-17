function callAllFunction(){
	console.clear();

	var text = inputToVar(text);

	var arr = varToArray(text);

	arr = removeBlanks(arr);

	validateLength(arr);

	arr = treatmentArr(arr);

	text = arrayToString(arr);



	varToOutput(text);

}


function inputToVar(unTexte){
	unTexte = document.getElementById("input").value;
	//console
	console.log("inputToVar\(text\) : ");
	console.log(unTexte);
	//
	return unTexte;

	//document.getElementById("resp").innerHTML = text;
	

}

function varToArray(unTexte){
	var myArr = unTexte.split(" ");

	//console
	console.log("varToArray\(text\) : ");
	console.log(myArr);
	//
	return myArr;

}

function removeBlanks(arr){
	var copyArr = [ ...arr ];
	arr = [];

	console.log(copyArr);
	for (let i in copyArr) {
		if (copyArr[i] != "") {
			arr.push(copyArr[i]);

		}

	}
	//console
	console.log("removeBlanks \(arr\) : ");
	console.log(arr);
	//
	return arr;
}

function validateLength(arr){
	var isValidated;
	

	var arrLength = arr.length;


	if (arrLength >= 3 && arrLength <= 10) {
		isValidated = true;
		//console
		console.log("validateLength\(text\) : ");
		console.log(arrLength);
		//
		return isValidated;

	} else {
		console.log(arrLength);
		alert("Il y faut que la phrase entrée n'est pas vide et a un minimum de 3 mots et un maximum de 10 mots");
		isValidated = false;
		return isValidated;
	}

}

function treatmentArr(unArr){
	console.log("treatmentArr: ")
	console.log(unArr);

	var containsLetter;
	var containsPunc;
	var arrayNoPunc = [];


	//chaque élément du tableau
	for (var i = 0; i < unArr.length; i++) {
		containsLetter = false;
		containsPunc = false;
		//chaque lettre de l'élément
		for (var j = 0; j < unArr[i].length; j++) {
			if (unArr[i].charAt(j) != "!" && unArr[i].charAt(j) != "?" && unArr[i].charAt(j) != "," && unArr[i].charAt(j) != ";" && unArr[i].charAt(j) != ".") {
				containsLetter = true;
			}
			if (unArr[i].charAt(j) == "!" || unArr[i].charAt(j) == "?" || unArr[i].charAt(j) == "," || unArr[i].charAt(j) == ";" || unArr[i].charAt(j) == ".") {
				containsPunc = true;
			}
		}
		if (containsLetter && containsPunc) {
			arrayNoPunc.push(unArr[i]);
		}
		if (containsLetter && !containsPunc) {
			arrayNoPunc.push(unArr[i]);
		}

	}
	console.log(arrayNoPunc);
	arrayNoPunc.reverse();
	console.log(arrayNoPunc);
	return arrayNoPunc;
}

function arrayToString(arr){
	console.log("arrayToString\(arr\) : ");
	console.log(arr.join(" "));
	return arr.join(" ");//makes the array to a string using space between
}

function varToOutput(text){
	document.getElementById("output").value = text;
}

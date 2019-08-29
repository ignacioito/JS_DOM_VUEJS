let myField = "";
let myArr = [];

function transform() {
	//nettoyer la console
	console.clear();
	//
	fieldToVar();
	strToArr();
	if (isValid()) {
		removePunc();
		reverseArr();
		arrToStr();
		varToField();
	}
}

function fieldToVar() {
	myField = document.getElementById("field").value;
	//afficher a la console
	console.log("fieldToVar\(\) :");
	console.log(myField);
	//
}

function strToArr() {
	myArr = myField.split(" ");
	//afficher a la console
	console.log("strToArr\(\) :");
	console.log(myArr);
	//
}

function isValid() {
  if (myArr.length >= 3 && myArr.length <= 10) {
  	//afficher a la console
  	console.log("isValid\(\) :");
  	console.log(true);
  	//
    return true;
  } else {
  	//afficher a la console
    console.log("isValid\(\) :");
    console.log(false);
    //
    alert("Votre phrase doit contenir entre 3 et 10 mots \(inclusifs\). Attention les espaces blancs aux extremites comptent comme des mots");

    return false;
  }
}

function removePunc() {
	let arrNoPunc = [];
	for (let i in myArr) {
		if (myArr[i] != '?' && myArr[i] != '!' && myArr[i] != '.' && myArr[i] != ';' && myArr[i] != ',') {
	    arrNoPunc.push(myArr[i]);
	    }
	}
	myArr = arrNoPunc;
	//afficher a la console
	console.log("removePunc\(\) :");
	console.log(myArr);
	//
}


function reverseArr() {
 	myArr = myArr.reverse();
  	//afficher a la console
	console.log("reverseArr\(\) :");
	console.log(myArr);
	//
}

function arrToStr() {
  	myField = myArr.join(" ");
  	//afficher a la console
	console.log("arrToStr\(\) :");
	console.log(myField);
	//
}

function varToField() {
	console.log(myField);
	document.getElementById("result").value = myField;
}


// function removeBlank(arr) {
//   for (let i in arr) {
//     if (arr[i] == "") {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }

//console.clear();



// console.log("fonction strToArr\(myField\) : ");
// myArr = strToArr(myField);
// console.log(myArr);

// myArr = removeBlank(myArr);
// console.log(myArr);

// console.log("fonction isValid\(myArr\) : ");
// console.log(isValid(myArr));

// console.log("fonction reverseArr\(myArr\) : ");
// console.log(reverseArr(myArr));

// console.log("fonction removePunc\(myArr\) : ");
// myArr = removePunc(myArr);
// console.log(myArr);

// console.log("fonction arrToStr\(myArr\) : ");
// myField = arrToStr(myArr);
// console.log(myField);


// function regex (str) {
//     return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "");
// }
// var testStr = 'test @./| ) this';
// console.log('before: ' + testStr);
// console.log('after: ' + regex(testStr));

// var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation !";
// var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// var finalString = punctuationless.replace(/\s{2,}/g," ");
// console.log(punctuationless);
// console.log(finalString);
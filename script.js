let result = JSON.parse(localStorage.getItem("result")); //nacitanie vysledku z LocalStorage
document.getElementById("result").value = result; //priradenie hodnoty vysledku do elementu result

let number1 = document.getElementById("number1"); //premenna cislo 1 z inputu number1
let number2 = document.getElementById("number2"); //premenna cislo 1 z inputu number1

let mathValue; //premenna matemtickej operacie (+, -, *, :) nacitane zo selectu
mathValue = JSON.parse(localStorage.getItem("mathSymbol")); //nacitanie operacie  z LocalStorage

/**IF sa vykona ak nie je v local Starage ulozena ziadna hodnota pre mat. operaciu */
if (mathValue == undefined) {
  mathValue = "0";
}

document.querySelector("#operations").value = mathValue; // do selectoru na nacita hodnota matemtickej operacie (+, -, *, :)

/**Pole pre ulozenie celych poslednych operacii (napr 1+1 = 2) */
let listOperations = [];

/**Pocitadlo funcie pre vypis poslednych 5 operacii na obrazovku */
let counter = 0;

let list = document.getElementById("lastCalculations");

/* premenne MEMORY */
let m1 = document.getElementById("M1");
let m2 = document.getElementById("M2");
let m3 = document.getElementById("M3");
let m4 = document.getElementById("M4");
let m5 = document.getElementById("M5");

/**Pomocna premenna pre MEMORY tlacidla, ktora s pouziva na overenie ci bolo tlacidlo stlacene */
let counterMemory1 = 0;
let counterMemory2 = 0;
let counterMemory3 = 0;
let counterMemory4 = 0;
let counterMemory5 = 0;

/**Nacitanie MEMORY tlacidiel z LocalStorage */
let memory = JSON.parse(localStorage.getItem("memoryButtons"));
/**Ak nie su v LS ulozene data zobrazia sa na tlacidlach pamate M1,.... + siva farba */
if (memory == null) {
  memory = [
    { M1: "M1", color: "#EFEFEF" },
    { M2: "M2", color: "#EFEFEF" },
    { M3: "M3", color: "#EFEFEF" },
    { M4: "M4", color: "#EFEFEF" },
    { M5: "M5", color: "#EFEFEF" },
  ];
}

/**Nacitanie hodnot cisel 1 a 2  z LocalStorage */
number1.value = JSON.parse(localStorage.getItem("number1"));
if (number1 == null) {
  number1.value = "0";
}
number2.value = JSON.parse(localStorage.getItem("number2"));
if (number1 == null) {
  number2.value = "0";
}

/**nacitanie textu do tlacidiel MEMORY 1 az 5 */
m1.innerText = memory[0].M1;
m1.style.backgroundColor = memory[0].color;

m2.innerText = memory[1].M2;
m2.style.backgroundColor = memory[1].color;

m3.innerText = memory[2].M3;
m3.style.backgroundColor = memory[2].color;

m4.innerText = memory[3].M4;
m4.style.backgroundColor = memory[3].color;

m5.innerText = memory[4].M5;
m5.style.backgroundColor = memory[4].color;

let localStorageCounter = 0;

/**Ulozenie hodnot do LS */
function toLocalStorage() {
  localStorage.setItem("memoryButtons", JSON.stringify(memory));
  localStorage.setItem("number1", JSON.stringify(number1));
  localStorage.setItem("number2", JSON.stringify(number2));
  localStorage.setItem("result", JSON.stringify(result));
  localStorage.setItem("lastOperations", JSON.stringify(listOperations));
  localStorage.setItem("mathSymbol", JSON.stringify(mathValue));
}

/** Funcia tlacidla =, ktora prevedie zvolenu matem. operaciu  */
function equal() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  let textOfOperation = document.querySelector("#operations");
  mathValue = textOfOperation.value;

  switch (mathValue) {
    /**Vypocita sucet a ulozi (push) na posledne miesto v poli */
    case "0":
      result = parseInt(number1) + parseInt(number2);
      operations = number1 + " + " + number2 + " = " + result;
      listOperations.push(operations);
      console.log("pocet prvkov v poli " + listOperations.length);
      lastFiveResults();
      toLocalStorage();

      break;
    /**Vypocita rozdiel a ulozi (push) na posledne miesto v poli */
    case "1":
      result = parseInt(number1) - parseInt(number2);
      operations = number1 + " - " + number2 + " = " + result;
      listOperations.push(operations);
      lastFiveResults();
      toLocalStorage();
      break;
    /**Vypocita sucin a ulozi (push) na posledne miesto v poli */
    case "2":
      result = parseInt(number1) * parseInt(number2);
      operations = number1 + " x " + number2 + " = " + result;
      listOperations.push(operations);
      lastFiveResults();
      toLocalStorage();
      break;
    /**Vypocita podiel a ulozi (push) na posledne miesto v poli */
    case "3":
      result = parseInt(number1) / parseInt(number2);
      operations = number1 + " : " + number2 + " = " + result;
      listOperations.push(operations);
      lastFiveResults();
      toLocalStorage();
      break;
  }

  document.getElementById("result").value = result; //vypise hodnotu vysledku mat. operacie do input elementu
  addToScreenList();
}

/**MEMORY BUTTONS 1-5 */
/** Memory  buttons 1 to 5 (prvy krat stlacene : ulozenie do pamate + cervena farba, druhykrat stlacene Reset do sivej farby*/
function memoryWrite1() {
  if (counterMemory1 == 0) {
    memory[0] = { M1: result, color: "red" };
    m1.innerText = memory[0].M1;
    m1.style.backgroundColor = "red";
    counterMemory1 = 1;
  } else {
    m1.innerText = "M1";
    m1.style.backgroundColor = "#EFEFEF";
    memory[0] = null;
    counterMemory1 = 0;
  }
  console.log(memory);
  toLocalStorage();
}
/** Memory  buttons 1 to 5 (prvy krat stlacene : ulozenie do pamate + cervena farba, druhykrat stlacene Reset do sivej farby*/
function memoryWrite2() {
  if (counterMemory2 == 0) {
    memory[1] = { M2: result, color: "red" };
    m2.innerText = memory[1].M2;
    m2.style.backgroundColor = "red";
    counterMemory2 = 1;
  } else {
    m2.innerText = "M2";
    m2.style.backgroundColor = "#EFEFEF";
    memory[1] = null;
    counterMemory2 = 0;
  }
  console.log(memory);
  toLocalStorage();
}
/** Memory  buttons 1 to 5 (prvy krat stlacene : ulozenie do pamate + cervena farba, druhykrat stlacene Reset do sivej farby*/

function memoryWrite3() {
  if (counterMemory3 == 0) {
    memory[2] = { M3: result, color: "red" };
    m3.innerText = memory[2].M3;
    m3.style.backgroundColor = "red";
    counterMemory3 = 1;
  } else {
    m3.innerText = "M3";
    m3.style.backgroundColor = "#EFEFEF";
    memory[2] = null;
    counterMemory3 = 0;
  }
  console.log(memory);
  toLocalStorage();
}
/** Memory  buttons 1 to 5 (prvy krat stlacene : ulozenie do pamate + cervena farba, druhykrat stlacene Reset do sivej farby*/

function memoryWrite4() {
  if (counterMemory4 == 0) {
    memory[3] = { M4: result, color: "red" };
    m4.innerText = memory[3].M4;
    m4.style.backgroundColor = "red";
    counterMemory4 = 1;
  } else {
    m4.innerText = "M4";
    m4.style.backgroundColor = "#EFEFEF";
    memory[3] = null;
    counterMemory4 = 0;
  }
  console.log(memory);
  toLocalStorage();
}
/** Memory  buttons 1 to 5 (prvy krat stlacene : ulozenie do pamate + cervena farba, druhykrat stlacene Reset do sivej farby*/
function memoryWrite5() {
  if (counterMemory5 == 0) {
    memory[4] = { M5: result, color: "red" };
    m5.innerText = memory[4].M5;
    m5.style.backgroundColor = "red";
    counterMemory5 = 1;
  } else {
    m5.innerText = "M5";
    m5.style.backgroundColor = "#EFEFEF";
    memory[4] = null;
    counterMemory5 = 0;
  }
  console.log(memory);
  toLocalStorage();
}

/**Vypis poslednych mat. operacii na obrazovku pod kalkulacku */
function addToScreenList() {
  var calculationList = document.getElementById("lastCalculations");
  var calcItem = document.createElement("p"); //vytvorenie p elemenu, do ktoreho sa vlozi vypocet

  calcItem.style.backgroundColor = "yellow"; //stylovanie p elementu
  calcItem.style.width = "410px"; //stylovanie p elementu
  calcItem.style.marginLeft = "16px"; //stylovanie p elementu
  calcItem.style.marginBottom = "0px"; //stylovanie p elementu
  calcItem.style.marginTop = "0px"; //stylovanie p elementu
  calcItem.style.fontSize = "2em"; //stylovanie p elementu

  calcItem.innerHTML = listOperations[listOperations.length - 1]; //vlozi novy vypocet nakoniec pola
  calculationList.appendChild(calcItem); //prida na obrazovku poslednu mat. operaciu

  if (counter >= 5) {
    console.log(counter);
    calculationList.removeChild(calculationList.children[0]); //, ak je viac ako 5 tak prvy vymaze
  }
  counter++;
  console.log("vystup " + counter);
}

/**funcia tlaciadla C reset kalkulacky */
function clearDisplay() {
  document.getElementById("number1").value = "0";
  document.getElementById("number2").value = "0";
  document.getElementById("result").value = "0    ";
}

/**Uklada do pola listOperations iba 5 poslednych matemtickych operacii */
function lastFiveResults() {
  if (listOperations.length > 5) {
    listOperations.shift();
  }
}

/** array(premenna%5) =  */

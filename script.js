let result = JSON.parse(localStorage.getItem("result"));
document.getElementById("result").value=result;

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

let mathValue;
mathValue = JSON.parse(localStorage.getItem("mathSymbol")); 

if (mathValue==undefined){
    mathValue="0";
}
document.querySelector("#operations").value = mathValue;



let listOperations=[];
let counter=0;

let list = document.getElementById("lastCalculations");

let m1 = document.getElementById("M1");
let m2 = document.getElementById("M2");
let m3 = document.getElementById("M3");
let m4 = document.getElementById("M4");
let m5 = document.getElementById("M5");
let counterMemory1 = 0;
let counterMemory2 = 0;
let counterMemory3 = 0;
let counterMemory4 = 0;
let counterMemory5 = 0;

let addToScreenListCounter = 5;

let memory = JSON.parse(localStorage.getItem("memoryButtons"));
if (memory == null) {
    memory = [{M1:"M1", color: "#EFEFEF"}, {M2:"M2", color: "#EFEFEF"}, {M3:"M3", color: "#EFEFEF"}, {M4:"M4", color: "#EFEFEF"}, {M5:"M5", color: "#EFEFEF"} ];
  }

number1.value = JSON.parse(localStorage.getItem("number1"));
if(number1==null){
    number1.value="0";
}
number2.value = JSON.parse(localStorage.getItem("number2"));
if(number1==null){
    number2.value="0";
}

m1.innerText = memory[0].M1;
m1.style.backgroundColor = memory[0].color;

m2.innerText = memory[1].M2;
m2.style.backgroundColor = memory[1].color;

m3.innerText = memory[2].M3;
m3.style.backgroundColor = memory[2].color;

m4.innerText = memory[3].M4;
m4.style.backgroundColor = memory[3].color;

m5.innerText = memory[4].M5 ;
m5.style.backgroundColor = memory[4].color;



function toLocalStorage() {
  localStorage.setItem("memoryButtons", JSON.stringify(memory));
  localStorage.setItem("number1", JSON.stringify(number1));
  localStorage.setItem("number2", JSON.stringify(number2));
  localStorage.setItem("result", JSON.stringify(result));
  localStorage.setItem("lastOperations", JSON.stringify(listOperations));
  localStorage.setItem("mathSymbol", JSON.stringify(mathValue));
  
}

function equal() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;


  let textOfOperation = document.querySelector("#operations");
  mathValue = textOfOperation.value;

  switch (mathValue) {
    case "0":
      result = parseInt(number1) + parseInt(number2);
      operations = number1 + " + " + number2 + " = " + result;
      listOperations.push(operations);
      toLocalStorage();

      break;

    case "1":
      result = parseInt(number1) - parseInt(number2);
      operations = number1 + " - " + number2 + " = " + result;
      listOperations.push(operations);
      toLocalStorage();
      break;

    case "2":
      result = parseInt(number1) * parseInt(number2);
      operations = number1 + " x " + number2 + " = " + result;
      listOperations.push(operations);
      toLocalStorage();
      break;

    case "3":
      result = parseInt(number1) / parseInt(number2);
      operations = number1 + " : " + number2 + " = " + result;
      listOperations.push(operations);
      toLocalStorage();
      break;
  }
  document.getElementById("result").value = result;  
  addToScreenList()
}

/** Memory  buttons 1 to 5 */

function memoryWrite1() {
  if (counterMemory1 == 0) {
    memory[0] = { M1: result, color: "red"};
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

function addToScreenList() {
    console.log("vstup " + counter);
    
    var calculationList = document.getElementById("lastCalculations");
    var calcItem = document.createElement("p");
    calcItem.style.backgroundColor="yellow";
    calcItem.style.width = "410px";
    calcItem.style.marginLeft = "16px";
    calcItem.style.marginBottom = "0px";
    calcItem.style.marginTop = "0px";
    calcItem.style.fontSize = "2em";
        calcItem.innerHTML = listOperations[listOperations.length-1];
    calculationList.appendChild(calcItem);
        if (counter>=5){
        console.log(counter)
        calculationList.removeChild(calcItem[0]);
    };
    counter++
    console.log("vystup " + counter);
        
    /**var calculationList = document.getElementById("lastCalculations");
    var calcItem = document.createElement("p");
    calcItem.style.backgroundColor="yellow";
    calcItem.style.width = "410px";
    calcItem.style.marginLeft = "-23px";
    calcItem.style.marginBottom = "0px";
    calcItem.style.marginTop = "0px"
    calcItem.style.fontSize = "2em"
    calcItem.innerHTML = operations;
    calculationList.appendChild(calcItem);*/
  }

  function clearDisplay(){
    document.getElementById("number1").value = "0"
    document.getElementById("number2").value = "0"
    document.getElementById("result").value = "0    "
  }

  
/** array(premenna%5) =  */
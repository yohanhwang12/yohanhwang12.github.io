
const { createApp } = Vue

  const vm = createApp({
  
    data() {
      return {
        scrStart: true,
        scrProfessions: false,
        scrChosenCareer: false,
        scrControls: false,
        randomCareer : "unassigned",
        salary: 0,
        //imgCareer: "",
        yearStocks: 0,
        totalStocks: 0,
        yearBank: 0,
        totalBank: 0,
        yearMattress: 0,
        totalMattress: 0

      }
    },
    methods: {

      assignCareer(){
        listProfessions = ["nurse", "worker", "teacher"]
        this.randomCareer = listProfessions[Math.floor(Math.random()*listProfessions.length)]
      
        switch (this.randomCareer) {
          case 'nurse':
            this.salary = 1300
            //document.getElementById("imgCareer").src="images/nurse.png";
            break;
          case 'worker':
            this.salary = 1000
            //document.getElementById("imgCareer").src="images/worker.webp";
            break;
          case 'teacher':
            this.salary = 1500
            //document.getElementById("imgCareer").src="images/teacher.jpg";
            break;
        }
        return this.salary, this.randomCareer
      },

      assignInitVal(){
        this.yearStocks = (this.salary-900)/2,
        this.yearBank = (this.salary-900)/2
      },
      assignRangeVal(){
        document.getElementById("rStocks").value = this.yearStocks
        document.getElementById("rStocks").max = this.yearStocks*2
        document.getElementById("rBank").value = this.yearBank
        document.getElementById("rBank").max = this.yearBank*2
      }
    }

  }).mount('#app');




/*document.getElementById("btnStart").addEventListener("click", onStart);

function onStart() {
  document.getElementsByClassName("scrStart")[0].style.display = "none";
  document.getElementsByClassName("scrProfessions")[0].style.display = "block";
}
var randomCareer = "notassigned";
console.log(randomCareer);*/

/*var someVar = some_other_function();
someObj.addEventListener("click", function(){
    some_function(someVar);
}, false);*/

/*document.getElementById("btnProfessions").addEventListener("click", function(){
  funcProfessions(randomCareer);
}, false);

function funcProfessions(randomCareer) {

  document.getElementsByClassName("scrProfessions")[0].style.display = "none";
  document.getElementsByClassName("scrChosenCareer")[0].style.display = "block";

  listProfessions = ["nurse", "worker", "teacher"];
  randomCareer = listProfessions[Math.floor(Math.random()*listProfessions.length)];

  switch (randomCareer) {
    case 'nurse':
      document.getElementById("textProfession").innerText = "You are a nurse.";
      document.getElementById("numSalary").innerText= 'You make $1300 a year.';
      document.getElementById("imgCareer").src="images/nurse.png";
      break;
    case 'worker':
      document.getElementById("imgCareer").src="images/worker.webp";
      document.getElementById("textProfession").innerText = "You are a worker.";
      document.getElementById("numSalary").innerText = 'You make $1000 a year.';
      break;
    case 'teacher':
      document.getElementById("imgCareer").src="images/teacher.jpg";
      document.getElementById("textProfession").innerText = "You are a teacher.";
      document.getElementById("numSalary").innerText = 'You make $1500 a year.';
      break;
  }
  console.log(randomCareer);
  return randomCareer;
}
*/


document.getElementById("btnYearOne").addEventListener("click", function(){
    startYearOne(randomCareer);
}, false);

function startYearOne(randomCareer) {
  //var randomCareer = document.getElementById("textProfession").innerHTML;
  console.log(randomCareer);
  switch (randomCareer) {
    case 'worker':
      document.getElementById("rStocks").max = 100;
      document.getElementById("rStocks").value = 50;
      document.getElementById("rBank").max = 100;
      document.getElementById("rBank").value = 50;
      break;
    case 'nurse':
      document.getElementById("rStocks").max = 400;
      document.getElementById("rStocks").value = 200;
      document.getElementById("rBank").max = 400;
      document.getElementById("rBank").value = 200;
      break;
    case 'teacher':
      document.getElementById("rStocks").max = 600;
      document.getElementById("rStocks").value = 300;
      document.getElementById("rBank").max = 600;
      document.getElementById("rBank").value = 300;
      break;
  }

  document.getElementsByClassName("scrChosenCareer")[0].style.display = "none";
  document.getElementsByClassName("scrNews")[0].style.display = "block";
  document.getElementsByClassName("scrControls")[0].style.display = "block";


}

document.getElementById("rStocks").addEventListener("input", showStocks);

function showStocks() {
  document.getElementById("valueStocks").innerText = rangevalue.value;
}


document.getElementById("rStocks").addEventListener("input", rStocksValue);

function rStocksValue(){
  var newSValue = document.getElementById("rStocks").value;
  var targetS = document.getElementById("valueStocks");
  var targetST = document.getElementById("valueStocksT");
  targetS.innerHTML = newSValue;
  targetST.innerHTML = parseInt(newSValue);
  var targetB = document.getElementById("valueBank");
  var targetBT = document.getElementById("valueBankT");

}

document.getElementById("rBank").addEventListener("input", rBankValue);

function rBankValue(){
  var newBValue = document.getElementById("rBank").value;
  var targetB = document.getElementById("valueBank");
  var targetBT = document.getElementById("valueBankT");
  targetB.innerHTML = newBValue;
  targetBT.innerHTML = parseInt(newBValue);
}

       //look at mixkit and allstar code




const { createApp } = Vue

  const vm = createApp({
  
    data() {
      return {
        scrStart: true,
        scrProfessions: false,
        scrChosenCareer: false,
        scrControls: false,
        newsShow: true,
        winShow: false,
        gameOverShow: false,
        randomCareer : "unassigned",
        salary: 0,
        img20Up: "images/20up.png",
        img30Up: "images/30up.png",
        img50Up: "images/50up.png",
        img50Down: "images/50down.png",
        img70Down: "images/70down.png",
        img80Down: "images/80down.png",
        imgBankRun: "images/bankRun.png",
        imgLayoff: "images/layoff.png",
        dispIncome: 0,
        yearStocks: 0,
        totalStocks: 0,
        yearBank: 0,
        totalBank: 0,
        yearMattress: 0,
        totalMattress: 0,
        clickState:0,
        audio2: new Audio("sounds/soundBg.mp3")

      }
    },
    methods: {
      playSound (sound) {
        if(sound) {
          var audio1 = new Audio(sound);
          audio1.play();
        }
      },
      playBeginning(){
        this.audio2.volume = 0.3;
        this.audio2.play();
        this.audio2.loop=true;
      },

      assignCareer(){
        //document.getElementById('imgNews').src="images/transparent.png";
        this.playSound("sounds/soundWin.wav")
        listProfessions = ["nurse", "worker", "teacher"]
        this.randomCareer = listProfessions[Math.floor(Math.random()*listProfessions.length)]
      
        switch (this.randomCareer) {
          case 'nurse':
            this.salary = 1300
            document.getElementById("imgCareer").src="images/nurse.png";
            break;
          case 'worker':
            this.salary = 1000
            document.getElementById("imgCareer").src="images/worker.png";
            break;
          case 'teacher':
            this.salary = 1500
            document.getElementById("imgCareer").src="images/teacher.png";
            break;
        }
        return this.salary, this.randomCareer
      },

      assignInitVal(){
        this.dispIncome = this.salary-900,
        this.yearStocks = this.dispIncome/2,
        this.yearBank = this.dispIncome/2,
        this.yearMattress = 0
        document.getElementById("News").display = "block";
        document.getElementById("gameOver").display = "none";
        document.getElementById("win").display = "none";
        
      },
      assignRangeVal(){
        document.getElementById("rStocks").value = this.yearStocks
        document.getElementById("rStocks").max = this.yearStocks*2
        document.getElementById("rBank").value = this.yearBank
        document.getElementById("rBank").max = this.yearBank*2
        
      },
      stocksMethod(){
        if ((parseInt(this.yearStocks) + parseInt(this.yearBank)) > parseInt(this.dispIncome)){   
          document.getElementById("rBank").value = (this.dispIncome)-(this.yearStocks);
          this.yearBank = (this.dispIncome)-(this.yearStocks);
        }
        this.yearMattress = this.dispIncome - (parseInt(this.yearStocks) + parseInt(this.yearBank))
      },
      bankMethod(){
        if ((parseInt(this.yearStocks) + parseInt(this.yearBank)) > parseInt(this.dispIncome)){   
          document.getElementById("rStocks").value = (this.dispIncome)-(this.yearBank);
          this.yearStocks = (this.dispIncome)-(this.yearBank);
        }
        this.yearMattress = this.dispIncome - (parseInt(this.yearStocks) + parseInt(this.yearBank))
      },

      addPreviousYear(){
        this.totalStocks = parseInt(this.totalStocks) + parseInt(this.yearStocks)
        this.totalBank = parseInt(this.totalBank) + parseInt(this.yearBank)
        this.totalMattress = parseInt(this.totalMattress) + parseInt(this.yearMattress)
      },
      goodYears(){
        this.playSound("sounds/paperSlide.wav")
        listGoodYears = ["20%", "30%", "50%"]
        chosenGoodYr = listGoodYears[Math.floor(Math.random()*listGoodYears.length)]
        switch (chosenGoodYr) {
          case '20%':
            document.getElementById('imgNews').src = "images/20up.png";
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*.2))
            console.log("gy:20%up")
            break;
          case '30%':
            document.getElementById('imgNews').src = "images/30up.png";
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*.3))
            console.log("gy:30%up")
            break;
          case '50%':
            document.getElementById('imgNews').src = "images/50up.png";
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*.5))
            console.log("gy:50%up")
            break;
        }
        return this.totalStocks
      },
      mixedYear(){
        this.playSound("sounds/paperSlide.wav")
        listMixedYear = ["30%", "-70%"]
        chosenMixedYr = listMixedYear[Math.floor(Math.random()*listMixedYear.length)]
        switch (chosenMixedYr) {
          case '30%':
            document.getElementById('imgNews').src = "images/30up.png"
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*.3))
            console.log("my:30%up")
            break;
          case '-70%':
            document.getElementById('imgNews').src = "images/70down.png"
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.7))
            console.log("my:70%down")
            break;
        }
      },
      badYears(){
        this.playSound("sounds/paperSlide.wav")
        listBadYears = ["-50%", "-70%", "-80%"]
        chosenBadYr = listBadYears[Math.floor(Math.random()*listBadYears.length)]
        switch (chosenBadYr) {
          case '-50%':
            document.getElementById('imgNews').src = "images/50down.png"
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.5))
            console.log("by:50down")
            break;
          case '-70%':
            document.getElementById('imgNews').src = "images/70down.png"
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.7))
            console.log("by:70down")
            break;
          case '-80%':
            document.getElementById('imgNews').src = "images/80down.png"
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.8))
            console.log("by:80down")
            break;
        }
      },
      bankInterest(){
        this.totalBank = Math.round((parseInt(this.totalBank) + parseInt(this.totalBank)*.05))
        console.log("interest")
        return this.totalBank
      },
      bankRun(){
        this.playSound("sounds/paperSlide.wav")
        document.getElementById('imgNews').src = "images/bankRun.png"
        this.totalBank = 0
        this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.8))
        console.log("bankrun")
      },
      laidOff(){
        this.playSound("sounds/paperSlide.wav")
        document.getElementById('imgNews').src = "images/layoff.png"
        document.getElementById("rStocks").value = 0
        document.getElementById("rStocks").max = 0
        document.getElementById("rBank").value = 0
        document.getElementById("rBank").max = 0
        this.yearMattress = 0
        this.yearBank = 0
        this.yearStocks = 0 
        this.totalStocks = this.totalStocks - 900
        if (this.totalStocks < 0){
          this.totalBank = this.totalBank - (-this.totalStocks)
          this.totalStocks = 0
        }
        if (this.totalBank < 0){
          this.totalMattress = this.totalMattress - (-this.totalBank)
          this.totalBank = 0
          
        } 
      },
      
      nextYear() {
        this.clickState++;

        if (this.clickState ==1 ) {
            document.getElementById('imgNews').style.visibility = "visible";
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            console.log("1st press")
            this.addPreviousYear()
            this.assignInitVal()
            this.assignRangeVal()
            this.goodYears()
            this.bankInterest()
            
        } else if (this.clickState == 2 ) {
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            console.log("2nd press")
            this.addPreviousYear()
            this.assignInitVal()
            this.assignRangeVal()
            this.goodYears()
            this.bankInterest()
        } else if (this.clickState == 3 ) {
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            console.log("3rd press")
            this.addPreviousYear()
            this.assignInitVal()
            this.assignRangeVal()
            this.goodYears()
            this.bankInterest()
        } else if (this.clickState == 4 ) {
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            console.log("4th press")
            this.addPreviousYear()
            this.assignInitVal()
            this.assignRangeVal()
            this.mixedYear()
            this.bankInterest()
      
        } else if (this.clickState == 5 ) {
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
          console.log("5th press")
          this.addPreviousYear()
          this.assignInitVal()
          this.assignRangeVal()
          this.badYears()
          this.bankInterest()

        } else if (this.clickState == 6 ) {
          document.getElementById('imgNews').style.animationName = "none";
          requestAnimationFrame(() => {
            document.getElementById('imgNews').style.animationName = "";
          });
          console.log("6th press")
          this.addPreviousYear()
          this.assignInitVal()
          this.assignRangeVal()
         
          this.bankRun()
          this.bankInterest()

          
          

        } else if (this.clickState == 7 ) {
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            this.totalStocks = Math.round((parseInt(this.totalStocks) + parseInt(this.totalStocks)*-.7))
            console.log("7th press")
            
            this.addPreviousYear()
            
              this.laidOff()
              if (this.totalMattress > 0) {
                console.log("You survived!")
                this.playSound("sounds/soundWin.wav")
                this.winShow = true
                this.newsShow = false
                //document.getElementById("News").display = "none";
                //document.getElementById("win").display = "block";
              } else {
                console.log("Game Over")
                this.playSound("sounds/soundGameOver.wav")
                this.gameOverShow = true
                this.newsShow = false
                //document.getElementById("News").display = "none";
                //document.getElementById("win").display = "block";
              }
              document.getElementById("btnNextYear").innerHTML="Restart the Game"
            
        } else if (this.clickState == 8){
            document.getElementById('imgNews').style.animationName = "none";
            requestAnimationFrame(() => {
              document.getElementById('imgNews').style.animationName = "";
            });
            document.getElementById('imgNews').style.visibility = "hidden";
            this.audio2.pause();
            this.scrNews  = false
            this.scrControls = false  
            this.scrStart = true
            document.getElementById("btnNextYear").innerHTML="Continue to Next Year";
            this.randomCareer = "unassigned",
            this.salary= 0,
            this.dispIncome= 0,
            this.yearStocks= 0,
            this.totalStocks= 0,
            this.yearBank= 0,
            this.totalBank= 0,
            this.yearMattress= 0,
            this.totalMattress= 0,
            this.clickState=0,
            this.winShow = false,
            this.gameOverShow = false,
            this.newsShow = true
            
            //document.getElementById("News").display = "block";
            //document.getElementById("win").display = "none";
            //document.getElementById("gameOver").display = "none";
        }
      }
     
      

    }

  }).mount('#app');

  

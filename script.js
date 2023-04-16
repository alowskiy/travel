let firstSq = document.querySelector('.first-sq');
let secondSq = document.querySelector(".second-sq");
let thirdSq = document.querySelector(".third-sq");
let logPopUp = document.querySelector('.log-pop-up')
let logButton = document.querySelector(".login-button");
let firstPhoto = document.querySelector(".first-cont-slider");
let secondPhoto = document.querySelector(".second-cont-slider");
let thirdPhoto = document.querySelector(".third-cont-slider");
let body = document.querySelectorAll('section')
let logPop = "12S"
let all = document.querySelector(".all")
let exit = document.querySelector(".exit")
   let area = document.querySelector("area");
   let newEl = document.createElement("button");

let back = document.querySelector(".area");

exit.onclick = function () {
  logPopUp.style.display = "none";
  newEl.style.display = "none";
}

logButton.onclick = function () {
logPopUp.style.display = 'flex'


logPopUp.style.justifyContent = "flex-start ";
logPopUp.style.flexDirection= "column";
logPopUp.style.alignItems = "center";
logPopUp.style.top = "-1000px";
logPopUp.style.top = "15px";

    logPopUp.style.position = 'fixed'

  
   all.append(newEl);
   newEl.classList.toggle(".area");


            newEl.style.margin = "0 auto";
   newEl.style.width = "1440px";
   newEl.style.position = "absolute";
   newEl.style.top = "0px";
   newEl.style.height = "absolute";
   newEl.style.height = "3744px";
   newEl.style.background = " rgba(0, 0, 0, 0.25)";
   newEl.style.border = "none";
   newEl.style.zIndex = "999998";
newEl.style.display = "flex"
}











firstSq.onclick = function(){
firstSq.style.background = "#F2785C";
thirdSq.style.background = " rgba(242, 120, 92, 0.5)";
secondSq.style.background = " rgba(242, 120, 92, 0.5)";
       secondPhoto.style.order = "1";
        firstPhoto.style.order = "2";
            thirdPhoto.style.order = "3";

 
            firstPhoto.style.width = "800px"; 
            thirdPhoto.style.position = "relative";

       firstPhoto.style.marginLeft = "60px";

            

    
}




secondSq.onclick = function(){
    
    secondSq.style.background = "#F2785C";
    firstSq.style.background = " rgba(242, 120, 92, 0.5)";
    thirdSq.style.background = " rgba(242, 120, 92, 0.5)";
    secondPhoto.style.order = "2";
        firstPhoto.style.order = "1";
            thirdPhoto.style.order = "3";
            secondPhoto.style.marginLeft = "60px";
firstPhoto.marginLeft



}

thirdSq.onclick = function () {
  thirdSq.style.background = "#F2785C";
  secondSq.style.background = " rgba(242, 120, 92, 0.5)";
  firstSq.style.background = " rgba(242, 120, 92, 0.5)";
    secondPhoto.style.order = "1";
        firstPhoto.style.order = "3";
            thirdPhoto.style.order = "2";

firstPhoto.style.marginLeft = "60px"

}


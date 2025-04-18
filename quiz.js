
document.addEventListener("DOMContentLoaded",function(){
  
 var item1;
  var item2 ;
 var item3 ;
 var item4 ;
 var item5 ;
  var item6 ;
    var item7 ;    


let sun = document.querySelectorAll('.sunlight');
for (let i = sun.length-1; i>=0;i--){
sun[i].addEventListener("click", function(){ 
let sunval = this.value;
localStorage.setItem("sunlight", sunval);
sun.forEach(element => {
element.classList.toggle("selected",false);
  });
this.classList.toggle("selected",true);

}); 

}

let dog = document.querySelectorAll('.dog');
for (let i = dog.length-1; i>=0;i--){
dog[i].addEventListener("click",function (){ 

let dogval = this.value;
localStorage.setItem("dog", dogval);
dog.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);
 
    });
}

let entertain = document.querySelectorAll('.party');
for (var i = entertain.length-1; i>=0;i--){
entertain[i].addEventListener("click",function (){ 

let partyval = this.value;
localStorage.setItem("entertain", partyval);
entertain.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);

    });
}

let plants = document.querySelectorAll('.plants');
for (var i = plants.length-1; i>=0;i--){
plants[i].addEventListener("click",function (){ 

let plantval = this.value;
localStorage.setItem("plants", plantval);
plants.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);
  
    });
}

let pollution = document.querySelectorAll('.pollution');
for (var i = pollution.length-1; i>=0;i--){
pollution[i].addEventListener("click",function (){ 

let polval = this.value;
localStorage.setItem("pollution", polval);
pollution.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);
    
    });
}

let mosquito = document.querySelectorAll('.mosquito');
for (var i = mosquito.length-1; i>=0;i--){
mosquito[i].addEventListener("click",function (){ 

let mosquitoval = this.value;
localStorage.setItem("mosquito", mosquitoval);
mosquito.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);
    
    });
}
let rat = document.querySelectorAll('.rat');
for (var i = rat.length-1; i>=0;i--){
rat[i].addEventListener("click",function (){ 

let ratval = this.value;
localStorage.setItem("rat", ratval);
rat.forEach(element => {
    element.classList.toggle("selected",false);
      });
    this.classList.toggle("selected",true);
   
    });
}

});

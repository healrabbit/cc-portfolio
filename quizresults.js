document.addEventListener("DOMContentLoaded",function(){

// div list 

let fsbush = document.getElementById('fsbush');
let psbush = document.getElementById('psbush');
let sbush =  document.getElementById('sbush');
let fsflower = document.getElementById('fsflower');
let psflower = document.getElementById('psflower');
let sflower =  document.getElementById('sflower');
let fsherb = document.getElementById('fsherb');
let psherb = document.getElementById('psherb');
let sherb =  document.getElementById('sherb');
let dogpark = document.getElementById('dogpark');
let party = document.getElementById('dinnerparty');
let polluted= document.getElementById('pollution');
let soiltest = document.getElementById('soiltest');
let mosquito= document.getElementById('mosquito');
let rat = document.getElementById('rat');
let non = document.getElementById('non');

//DOGS
if (localStorage.getItem("dog") === "hasdog"){
   dogpark.style.display = 'block';
}
else if (localStorage.getItem("dog") === "nodog"){
    dogpark.style.display = 'none';
}
//ENTERTAINING SPACE 
if (localStorage.getItem("entertain") === "entertain"){
   party.style.display = 'block';
   
}
else if (localStorage.getItem("entertain") === "noparty"){
    party.style.display = 'none';
}
///PLANTS 
if(localStorage.getItem("plants") !== "noplants"){
    //POLLUTION
    if(localStorage.getItem("pollution") === "pol"){
        soiltest.style.display = 'none';
        polluted.style.display = 'block';
    }
    if(localStorage.getItem("pollution") === "notest"){
        soiltest.style.display = 'block';
        polluted.style.display = 'none';
    }
    if(localStorage.getItem("pollution") === "nopol"){
        soiltest.style.display = 'none';
        polluted.style.display = 'none';
    }
    //FLOWERS

if(localStorage.getItem("plants") === "flowering"){
    fsbush.style.display = 'none';
    psbush.style.display = 'none';
    sbush.style.display = 'none';
    fsherb.style.display = 'none';
    psherb.style.display = 'none';
    sherb.style.display = 'none';
    if(localStorage.getItem("sunlight") === "partial"){
        fsflower.style.display = 'none';
        psflower.style.display = 'block';
        sflower.style.display = 'none';
        }
        else if(localStorage.getItem("sunlight") === "full"){
            fsflower.style.display = 'block';
            psflower.style.display = 'none';
            sflower.style.display = 'none';
            }
            
        else if(localStorage.getItem("sunlight") === "little"){
                fsflower.style.display = 'none';
                psflower.style.display = 'none';
                sflower.style.display = 'block';
                }
            }
//BUSHES
if(localStorage.getItem("plants") === "bushes"){
    fsflower.style.display = 'none';
    psflower.style.display = 'none';
    sflower.style.display = 'none';
    fsherb.style.display = 'none';
    psherb.style.display = 'none';
    sherb.style.display = 'none';
    if(localStorage.getItem("sunlight") === "partial"){
        fsbush.style.display = 'none';
        psbush.style.display = 'block';
        sbush.style.display = 'none';
        }
        else if(localStorage.getItem("sunlight") === "full"){
            fsbush.style.display = 'block';
            psbush.style.display = 'none';
            sbush.style.display = 'none';
            }
            
        else if(localStorage.getItem("sunlight") === "little"){
                fsbush.style.display = 'none';
                psbush.style.display = 'none';
                sbush.style.display = 'block';
                }
            }
//HERBS

if(localStorage.getItem("plants") === "edible"){
    fsbush.style.display = 'none';
    psbush.style.display = 'none';
    sbush.style.display = 'none';
    fsflower.style.display = 'none';
    psflower.style.display = 'none';
    sflower.style.display = 'none';
    if(localStorage.getItem("sunlight") === "partial"){
        fsherb.style.display = 'none';
        psherb.style.display = 'block';
        sherb.style.display = 'none';
        }
        else if(localStorage.getItem("sunlight") === "full"){
            fsherb.style.display = 'block';
            psherb.style.display = 'none';
            sherb.style.display = 'none';
            }
            
        else if(localStorage.getItem("sunlight") === "little"){
                fsherb.style.display = 'none';
                psherb.style.display = 'none';
                sherb.style.display = 'block';
                }
            }
            }
           if(localStorage.getItem("plants") === "noplants"){
            fsbush.style.display = 'none';
            psbush.style.display = 'none';
            sbush.style.display = 'none';
            fsherb.style.display = 'none';
            psherb.style.display = 'none';
            sherb.style.display = 'none';
            fsflower.style.display = 'none';
            psflower.style.display = 'none';
            sflower.style.display = 'none';
            soiltest.style.display = 'none';
            polluted.style.display = 'none';
                }
            
        if(localStorage.getItem("dog") === "nodog" && localStorage.getItem("plants") === "noplants"
         && localStorage.getItem("entertain") === "noparty"){
            non.style.display = 'block';
            dogpark.style.display = 'none';
            fsbush.style.display = 'none';
            psbush.style.display = 'none';
            sbush.style.display = 'none';
            fsherb.style.display = 'none';
            psherb.style.display = 'none';
            sherb.style.display = 'none';
            fsflower.style.display = 'none';
            psflower.style.display = 'none';
            sflower.style.display = 'none';
            soiltest.style.display = 'none';
            polluted.style.display = 'none';
            party.style.display = 'none';
        } else {
            non.style.display = 'none';
        }


        //PESTS
        if(localStorage.getItem("mosquito") === "nomosq"){
            mosquito.style.display = 'none';
 
        }
        if(localStorage.getItem("rat") === "norat"){
            rat.style.display = 'none';
        
        }
        if(localStorage.getItem("mosquito") === "hasmosq"){
            mosquito.style.display = 'block';
         
        }
      
      
        if(localStorage.getItem("rat") === "hasrat"){
            rat.style.display = 'block';
        }
 document.querySelector("#re").addEventListener("click",function(){
localStorage.clear();


 });
});

console.log(localStorage.getItem("sunlight") );
console.log(localStorage.getItem("dog") );
console.log(localStorage.getItem("pollution") );
console.log(localStorage.getItem("mosquito") );

document.addEventListener('DOMContentLoaded', fetchData);
document.addEventListener('DOMContentLoaded', getFortune);
const url = 'https://fortune-cookie4.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b763e0aca1msh088ec4a21d10d14p11f81ajsn0d59f44d5d40',
		'x-rapidapi-host': 'fortune-cookie4.p.rapidapi.com'
	}
};

async function getRandomCat(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data  = await response.json();
    return data[0];
    

}
async function fetchData() {
try {
	const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
display(data);
} catch (error) {
	console.error(error);
};
}

async function getFortune() {
    const image = await getRandomCat();
    const cat = document.getElementById('fortune');
   fortune.style.backgroundImage =  `url('${image.url}')`;
 
 }   

 function display(data) {
const fortuneteller = document.getElementById('fortune');
const fortune = document.createElement('div');

fortune.innerHTML = `
&nbsp;
<center> <h1 style="color:pink; text-shadow:3px 3px 20px black;"> ${data.data.message}</h1> </center>
&nbsp;
`;

fortuneteller.appendChild(fortune);
}

function showDiv() {
    var show = document.getElementById('fortune');
    var hide = document.getElementById('options');
    var button = document.getElementById('resultbutton');
    var button1 = document.getElementById('refreshbutton');
      show.style.display = "block";
      hide.style.display = "none";
      button.style.display = "none";
      button1.style.display = "block";
    }
    document.addEventListener("DOMContentLoaded",function(){
    let paws = document.querySelectorAll('.paws');
    for (let i = paws.length-1; i>=0;i--){
        paws[i].addEventListener("click",function (){ 
            var  matched = document.getElementById('matched')
            matched.style.display = "block";
            paws.forEach(otherElement => {
                if(otherElement !== event.target){
               
                otherElement.classList.toggle("notselected",true);
                }
                
                  });
                  this.classList.toggle("selected",true);
              
                });
            }        

            let offerings = document.querySelectorAll('.offerings');
            for (let i = offerings.length-1; i>=0;i--){
                offerings[i].addEventListener("click",function (){ 
                var  accepted = document.getElementById('accepted')
                accepted.style.display = "block";
                var  fortune = document.getElementById('resultbutton')
                fortune.style.display = "block";
                    offerings.forEach(otherElement => {
                        if(otherElement !== event.target){
                       
                        otherElement.classList.toggle("notselected",true);
                        }
                        
                          });
                          this.classList.toggle("selected",true);
                      
                        });
                    }        
        });
         
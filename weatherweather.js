document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {

    try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-73.0060&units=metric&appid=ab6eeff2b2f8da73c2cc211d07fea7ec`)


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        display(data);
    }

    catch(error){
        console.error('Fetch error:', error);
    };
};

function display(data) {
 celcius=data.main.temp;
 far=Math.round((celcius*9/5)+32);
    const weather = document.getElementById('weather');
    const wItem = document.createElement('div');

    wItem.innerHTML = `
    <h1 style="color:lightblue">${far}</h1>
        <h1 style="color:lightblue">${data.weather[0].main}</h1>
<h3 style="color:lightblue">${data.weather[0].description}</h3>
    `;

    weather.appendChild(wItem);

}



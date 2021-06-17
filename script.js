const country=document.getElementById('country');
const deaths=document.getElementById('deaths');
const confirmed=document.getElementById('confirmed');
const recovered=document.getElementById('recovered');
const active=document.getElementById('active');
const clock=document.getElementById('clock');
const data=document.getElementById('data');
const main = document.getElementById('main');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu');


const getInfo = async(event) => {
    event.preventDefault();

    let val=main.value;
    if( val=== ""){
        alert("write country name")
    }else{

        

            let url = "https://api.covid19api.com/total/dayone/country/"+val ;
            console.log(url);
            const response = await fetch(url);

            const data = await response.json();
            console.log(data)
            const arrData = [data];
            const index=data.length;
            const length=index-1;
            country.innerText =data[length].Country; 
            deaths.innerText = data[length].Deaths;
            confirmed.innerText = data[length].Confirmed;
            active.innerText=data[length].Active;
            clock.innerText=data[length].Date;
            recovered.innerText=data[length].Recovered;
            

            
            
        }
        
    }

data.addEventListener('click', getInfo);

window.onscroll = () =>{
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});






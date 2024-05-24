let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["Jan","Feb","March","April","May","June","July","August","Sep","October","November","Dec"]

let giveaway = document.querySelector(".giveaway");

let futureDate = new Date(2024, 4, 25, 11, 30, 0);

let monthDate = futureDate.getDate();
let day = futureDate.getDay();
day = days[day];
let month = futureDate.getMonth();
month = months[month];
let year = futureDate.getFullYear();
let hour = futureDate.getHours();
let minute = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends On ${day}, ${monthDate} ${month} ${year}  ${hour}:${minute}AM`

let timer2 = document.querySelector(".timer");
let timer = document.querySelectorAll(".timer h3");
timer = Array.from(timer);



let future = futureDate.getTime();

function remainingTime(){
    let today = new Date().getTime();
    let t = future - today;

let oneDay = 24*60*60*1000;
let oneHour = 60*60*1000;
let oneMinute = 60*1000;
let oneSecond = 1000;

let days = Math.floor(t / oneDay);
let hours = Math.floor(t % oneDay / oneHour);
let minutes = Math.floor(t % oneHour /oneMinute);
let seconds = Math.floor(t % oneMinute /oneSecond);

let allVal = [days, hours, minutes, seconds];

for (let i=0; i<timer.length; i++){
    timer[i].innerText = allVal[i];  
}

if (t<0){
    clearInterval(countdown);
    timer2.innerHTML = `<h4>Sorry, This Giveaway Has Expired.</h4>`
    
}
}

let countdown = setInterval(remainingTime,1000);

remainingTime();
document.addEventListener('DOMContentLoaded', () => {

let time = document.querySelector('.time');
let date = document.querySelector('.date');



setInterval( () => {
    today();
},1000)

let today = () => {
    let today = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];

    let days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    
    let currentTimes = `${today.getHours() <= 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() <= 9 ? '0' + today.getSeconds() : today.getSeconds()}`;
    
    let currentDate = `${days[today.getDay()+1]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    
    
    time.innerHTML = currentTimes;
    date.innerHTML = currentDate;
}


})


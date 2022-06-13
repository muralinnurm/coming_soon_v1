//set the date


let countDownDate = new Date('aug 30, 2022 14:00:00');

let x = setInterval(function(){
    //today date

    let nowDate = new Date().getTime();

    //destance

    let destance = countDownDate - nowDate;
    
    //time

    let days = Math.floor(destance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(destance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(destance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(destance % (1000 * 60) / 1000);

    //output result

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;




});

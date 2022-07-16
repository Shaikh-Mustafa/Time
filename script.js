
const CurrentTime = document.querySelector('.current-time');
const CurrentDate = document.querySelector('.current-date');
const dubaiTime = document.querySelector('.dubaiTime');
const dubaiDate = document.querySelector('.dubaiDate');
const egyptTime = document.querySelector('.egyptTime');
const egyptDate = document.querySelector('.egyptDate');
const londonTime = document.querySelector('.londonTime');
const londonDate = document.querySelector('.londonDate');
const newYorkTime = document.querySelector('.newYorkTime');
const newYorkDate = document.querySelector('.newYorkDate');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



function SetTime(){
    CurrentTime.innerHTML = new Date().toLocaleTimeString();
    CurrentDate.innerHTML = new Date().toLocaleDateString("en-US",options);

    // for Dubai
    dubaiTime.innerHTML = new Date().toLocaleTimeString("en-US",{timeZone : 'Asia/Dubai'})
    dubaiDate.innerHTML = new Date().toLocaleDateString("en-US", options ,{timeZone : 'Asia/Dubai'})

    // for Egypt/ Cairo 
    egyptTime.innerHTML = new Date().toLocaleTimeString('en-US',{timeZone : 'Africa/Cairo'})
    egyptDate.innerHTML = new Date().toLocaleDateString('en-US',options, {timeZone : 'Africa/Cairo'} )

    // for London
    londonTime.innerHTML = new Date().toLocaleTimeString("en-US",{timeZone : 'Europe/London'})
    londonDate.innerHTML = new Date().toLocaleDateString("en-US", options ,{timeZone : 'Europe/London'})

    // for New York
    newYorkTime.innerHTML = new Date().toLocaleTimeString("en-US",{timeZone : 'America/New_York'})
    newYorkDate.innerHTML = new Date().toLocaleDateString("en-US", options ,{timeZone : 'America/New_York'})
}




// time() function will automatically 
// execute after every 1000 milliseconds i.e 1 second
setInterval(SetTime,1000);




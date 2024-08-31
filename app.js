const day=document.getElementById('days');
const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');

function NewYear()
{
const currentYear=new Date().getFullYear();
const endYear=new Date(`January1 ${currentYear+1} 00:00:00`);

const currentDate=new Date()
const  newYear=endYear-currentDate

const days=Math.floor(newYear/1000/60/60/24)
day.innerHTML=days<10?"0"+days:days;


const hours=Math.floor((newYear/1000/60/60)%24)
hour.innerHTML=hours<10?"0"+hours:hours;


const minutes=Math.floor((newYear/1000/60)%60)
minute.innerHTML=minutes<10?"0"+minutes:minutes;


const seconds=Math.floor((newYear/1000)%60)
second.innerHTML=seconds<10?"0"+seconds:seconds;


}
setInterval(NewYear,1000);
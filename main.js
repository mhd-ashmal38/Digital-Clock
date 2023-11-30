

function clockTime(){
    // to get system time

    let date=new Date()
    let hours=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()

    clock.innerHTML=`${hours}:${minute}:${second}`

    setTimeout(() => {
        clockTime()
    }, 1000);   
// 1000 means 1second
}
//function call
clockTime()
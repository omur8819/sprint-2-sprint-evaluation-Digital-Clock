function currentTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("digital_clock").innerText = time;
    document.getElementById("digital_clock").textContent = time;
    setTimeout(currentTime, 1000);
}
currentTime();
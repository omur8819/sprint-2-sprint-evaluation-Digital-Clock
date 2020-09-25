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
    document.getElementById("ankara").innerText = time;
    document.getElementById("ankara").textContent = time;
    setTimeout(currentTime, 1000);
}
currentTime();

function wasTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h -= 7;

    if(h < 0){
        h += 24;
    }

    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("washington").innerText = time;
    document.getElementById("washington").textContent = time;
    setTimeout(wasTime, 1000);
}
wasTime();

function lonTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h -= 2;
    
    if(h < 0){
        h += 24;
    }
    
    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("london").innerText = time;
    document.getElementById("london").textContent = time;
    setTimeout(lonTime, 1000);
}
lonTime();

function tokTime(){
    var date = new Date();
    var was = date.getTimezoneOffset
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h += 6;
    
    if(h >= 12){
        h -= 12;
        session = "PM";}

    if(h == 0){
        h = 12;}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("tokyo").innerText = time;
    document.getElementById("tokyo").textContent = time;
    setTimeout(tokTime, 1000);
}
tokTime();
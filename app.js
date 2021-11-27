
const userName = prompt("İsim giriniz");
const greeting = document.querySelector("#myName") ;
greeting.innerHTML=`${userName.toUpperCase()}!`

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var y = date.getDay();


    if (y == 1) {
        y = "Pazartesi";
      } else if (y == 2) {
        y = "Salı";
      } else if (y == 3) {
        y = "Çarşamba";
      } else if (y == 4) {
        y = "Perşembe";
      } else if (y == 5) {
        y = "Cuma";
      } else if (y == 6) {
        y = "Cumartesi";
      } else if (y == 7) {
        y = "Pazar";
      }


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + y;
    document.getElementById("saat").innerText = time;
    document.getElementById("saat").textContent = time;



}

showTime();

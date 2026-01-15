// function for handling time in backend and update user interface
function updateClock(){
    const now = new Date(); // in-built funtion to handle task related to time and date
    let hours = now.getHours();// fetching hour 
    let minutes = now.getMinutes(); // fetching minutes
    let seconds = now.getSeconds(); // fectching seconds
    const days = [ // array for storing days name
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday",
        "Thursday", 
        "Friday", 
        "Saturday"];
    const months = [ // aray for storing month names
        "January", 
        "Februry", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"];
    let dayName = days[now.getDay()]; // fetching day in number and storing name of the day through array index
    let date = now.getDate(); 
    let monthName = months[now.getMonth()]; // fetching month in number and storing name of the month through array index
    // updation of elements on interface
    document.getElementById("day").innerHTML = dayName + " &bull; ";
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = monthName;
    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;
    document.getElementById("time").innerText = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(updateClock, 1000); // every second calling funtion to update time
updateClock();// calling update clock funtion on load of page
// getting essentials elements to perform different task
let themes = document.querySelectorAll(".color-box");
let body = document.querySelector(".main");
let black = document.getElementById("black");
let purple = document.getElementById("purple");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let green = document.getElementById("green");

// click event for user intraction
themes.forEach((theme) => {
    theme.addEventListener("click", () => {
        let color = theme.getAttribute("id"); // getting user choice theme 
        if(color === "black"){ //if black applying this css
            body.style.background = "black";
            black.style.border = "2px solid white";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "none";
            localStorage.setItem("theme", "black"); // saving theme to local storage
        }else if(color === "purple"){ //if purple applying this css
            body.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            purple.style.border = "2px solid white";
            black.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "none";
             localStorage.setItem("theme", "purple"); // saving theme to local storage
        }else if(color === "blue"){ //if blue applying this css
            body.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            blue.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "2px solid white";
            orange.style.border = "none";
            green.style.border = "none";
             localStorage.setItem("theme", "blue"); // saving theme to local storage
        }else if(color === "orange"){ //if orange applying this css
            body.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            orange.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "2px solid white";
            green.style.border = "none";
             localStorage.setItem("theme", "orange"); // saving theme to local storage
        }else if(color === "green"){ //if green applying this css
            body.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            green.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "2px solid white";
            localStorage.setItem("theme", "green");// saving theme to local storage
        }
    })
})

// ---------- LOAD SAVED THEME ----------
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "black") {
    body.style.background = "black";
    black.style.border = "2px solid white";
  } 
  else if (savedTheme === "purple") {
    body.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    purple.style.border = "2px solid white";
  } 
  else if (savedTheme === "blue") {
    body.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
    blue.style.border = "2px solid white";
  } 
  else if (savedTheme === "orange") {
    body.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
    orange.style.border = "2px solid white";
  } 
  else if (savedTheme === "green") {
    body.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    green.style.border = "2px solid white";
  }
}

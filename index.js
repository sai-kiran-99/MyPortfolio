const incrementbtn = document.querySelector("#increment");
let counter = 0;
function incrementCounter(){
    const cocunterEL = document.querySelector("#counter");
    counter+2;
    cocunterEL.innerText = counter;
}
incrementbtn.addEventListener("Click",fun());
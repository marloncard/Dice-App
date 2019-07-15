const output = document.getElementById("output");
const rollButton = document.getElementById("rollButton");

function randomInt() {
    return Math.floor(Math.random() * 6) + 1; 
}

function dice(event) {
    output.innerHTML = ""
    for (let i = 0; i < 6; i++) {
        const randomNumber = randomInt()
        output.innerHTML += "<div id='die'>" + randomNumber + "</div>";
    

    }
    
    

};

rollButton.addEventListener("click", dice)


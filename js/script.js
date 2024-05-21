const divEl = document.querySelector("div")
let fiveNumRand = getRandomArray(5 , 1 , 100);

for(let i = 0; i < fiveNumRand.length ; i++){  
    let numberEl = document.createElement("p");
    divEl.append(numberEl);
    numberEl.innerHTML = fiveNumRand[i];
    const simon = setTimeout(simonSays , 3000 , numberEl );
    let promptUser = setTimeout(promtUser , 3100 , fiveNumRand );
    let printValue = setTimeout(appendValue , 5000 , promptUser ,divEl);
}

function appendValue(value , element){
    let newEl = document.createElement("div");
    element.appendChild(newEl);
    newEl.innerHTML = value;
}


function promtUser(array){
    for(let i = 0; i < array.length ; i++){
        let insertNumber = Number.parseInt(prompt("Inserisci i numeri che hai visto") , 10);
        if(array.includes(insertNumber)){
            return console.log("Il numero digitato" , insertNumber , "è corretto");
        }
        else {
            return console.log("Il numero inserito non è presente ")
        }
    }
}

function simonSays(element){
    element = element.remove();
}



function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomArray(arraylength, min, max) {
    const array = [];
    while (array.length < arraylength ) {
        let randomNum = getRandomNumber(min, max);
        if (!array.includes(randomNum)) {
            array.push(randomNum);
        }
    }
    return array;
}

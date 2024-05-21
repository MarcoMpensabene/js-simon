const divEl = document.querySelector("div")
let fiveNumRand = getRandomArray(5 , 1 , 100);

for(let i = 0; i < fiveNumRand.length ; i++){
    let numberEl = document.createElement("p")
    divEl.append(numberEl);
    numberEl.innerHTML = fiveNumRand[i];
}

const simon = setTimeout(simonSays , 3000 );

function simonSays(){
    XXXX.innerHTML = "";
    let count;
    for(let i = 0; i < 5 ; i++){
        let insertNumber = Number.parseInt(prompt("Inserisci i numeri che hai visto") , 10);
        if(XXXX.value === insertNumber){
            count++;
            return console.log(insertNumber , count)
        }
        else {
            return console.log("notFound")
        }
    }

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



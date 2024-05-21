const divEl = document.querySelector("div")
let fiveNumRand = getRandomArray(5 , 1 , 100);

for(let i = 0; i < fiveNumRand.length ; i++){
    let count;
    let numberEl = document.createElement("p")
    divEl.append(numberEl);
    numberEl.innerHTML = fiveNumRand[i];
    const removeNumber = setTimeout(removeNumber , 3000 , numberEl);
    const promt = setTimeout(myPromt , 4000 , fiveNumRand , count)


}

function myPromt(array , countF){
    for(let i = 0; i < array.length ; i++){
        let insertNumber = Number.parseInt(prompt("Inserisci i numeri che hai visto") , 10);
        if(array === insertNumber){
            countF++;
            return console.log(insertNumber , countF)
}
        else {
        return  console.log("notFound")
    }
}
}


function removeNumber( firstNumbers){
    firstNumbers = firstNumbers.remove();
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



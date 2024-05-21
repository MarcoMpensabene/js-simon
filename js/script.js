const divEl = document.querySelector("div")
let fiveNumRand = getRandomArray(5 , 1 , 100);

for(let i = 0; i < fiveNumRand.length ; i++){
    let count;
    let numberEl = document.createElement("p")
    divEl.append(numberEl);
    numberEl.innerHTML = fiveNumRand[i];
    const simon = setTimeout(simonSays , 3000 , numberEl , fiveNumRand );


}


function simonSays(element , array ){
    element = element.remove();
    let count;
    for(let i = 0; i < array.length ; i++){
        let insertNumber = Number.parseInt(prompt("Inserisci i numeri che hai visto") , 10);
        if(array.includes(insertNumber)){
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



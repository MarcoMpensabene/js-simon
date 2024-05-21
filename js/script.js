const divEl = document.querySelector("div")

let fiveNumRand = getRandomArray(5 , 1 , 100);
console.log(fiveNumRand.length)
for(let i = 0; i < fiveNumRand.length ; i++){
    let numberEl = document.createElement("p")
    divEl.append(numberEl);
    numberEl.innerHTML = fiveNumRand[i];

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



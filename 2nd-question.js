//Javascript code to check whether a given number is armstrong number or not


let givenNumber =407;
let finalNumber=0;
let isArmstrong;
let stringOfNumber = givenNumber.toString();

for(let i =0; i < stringOfNumber.length; i++){
    let IndividualNumber = parseInt(stringOfNumber[i]);
    IndividualNumber = IndividualNumber**3;
    finalNumber = finalNumber + IndividualNumber;
}


if(givenNumber === finalNumber){
    isArmstrong = true;
    console.log(`The given number is Armstrong number`);
}
else{
    isArmstrong = false;
    console.log(`The given number is not an Armstrong number`);
}
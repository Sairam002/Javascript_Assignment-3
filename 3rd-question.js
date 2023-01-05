let givenNumber = 145;

let string = givenNumber.toString();
let sum = 0;
for(let i =0; i < string.length; i++){
    let output = 1;
    for(let j = parseInt(string[i]); j > 0; j--){
        output = output * j;
    }
    sum += output;
}

if(sum === givenNumber){
    console.log("Given number is special number");
}
else{
    console.log("Given number is not special number");
}
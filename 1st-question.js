//Code for printing patterns in javascript.



let string = "";
let number = 1;

for(let i =0; i < 5; i++){
    string = "";
    for (let j = 0; j < i; j++){
        string = string + ` ${number}`;
        number++;
    }
    console.log(string);
}
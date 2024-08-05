console.log("this is tutorial 53");

function greet(name,greetText="Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will never execute (unreachable code)
    //console.log("function is returned");
}

let name = "Atul";
let name1 = "Ansh";
let name2 = "Aryan";
let name3 = "Anil";
let greetText = "Good Morning";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
// greet(name3);

// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
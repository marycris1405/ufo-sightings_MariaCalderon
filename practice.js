// Simple JavaScript console.log statement
function printHello(){
    console.log("Hello there!");
}

// Arrow way
printHello= ()=> "Hello there!"

// Takes two numbers and add them
function addition(a,b){
    return a+b;
}

// Arrow way
addition = (a,b)=> a+b;

// Function can call other functions
function doubleAddition (c,d){
    var total= addition(c,d)*2 ;
    return total;
}

// Arrow way
doubleAddition= (c,d)=> addition(c,d)*2;

let friends=["Sarah","Greg","Cindy","Jeff"];
function listLoop(userList){
    for (var i=0; i< userList.length; i++){
        console.log(userList[i]);
    }
}

let vegetables=["Carrots","Peas","Lettuce","Tomatoes"];

for (var i=0; i<vegetables.length;i++){
    console.log("I love " +vegetables[i]);
}

for (var i=0; i<5; i++){
    console.log("I am " +i);
}
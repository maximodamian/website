var myname = "max";
var lastname ="damian";
var numberofSiblings = 3;
var hasPets = false;

console.log(myname);
console.log(lastname);
console.log(numberofSiblings);
console.log(hasPets);

if(hasPets === true){
console.log("they are playful -- dogs have four legs");
}

if (hasPets === false){
console.log("humans are the goats");
}
var number = 0;
while (number < 15){
    console.log("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 ");
    number++;

}


var button = document.getElementById("Bluenose Pitbull");
var h1 = document.getElementById("max");
var body = document.body;

button.addEventListener("click", function(){

body.setAttribute("style", "background-color: blue");


});


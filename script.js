// // if (){};

let age = 190

// if (age >= 18) {
//     console.log('You can vote!');
// } else {
//     console.log('You cant vote yet!');
// }

let dayOfWeek = "tuesday";

// if (dayOfWeek === 'tuesday') {
//     console.log('Its Monday, better get to class!');
// } else if (dayOfWeek === 'saturday'){
//     console.log('Its saturday party on!');
// } else {
//     console.log('Please, enter another day!');
// }

// const yourMoney = 50;
// const catPrice = 100;

// if (yourMoney = catPrice) {
//     console.log("You have just enough to buy a cat!");
// } else if (yourMoney < catPrice){
//     console.log("You cannot buy a cat. You need --- more dollars")
// } if (yourMoney > catPrice) {
//     console.log("You can buy a cat and will have --- dollars left over")
// }

// //  So I forgot I should use math to get the total.

// // code example
// if (yourMoney === catPrice) {
//     console.log(`You have just enough to buy a cat!`)
// } else if (yourMoney > catPrice) {
//     console.log(`You can buy a cat, you will have $${yourMoney - catPrice} left over`)
// } else {
//     console.log(`You need $${catPrice - yourMoney} more dollars :(`)
// }
//     // Code by Jordan Johnson-Carter

// // another code example
// if (yourMoney > catPrice) {
//     console.log("You can buy a cat and will have __ dollars left over")
// }
// else if (yourMoney === catPrice){
//     console.log("You have just enough to buy a cat")
// }
// else {
//     console.log("You cannot buy a cat. You need __ more dollars :(")
// }
//     // Code by Rhiannon OBrien

    // Day three continuation

// if (age < 20 && age <= 13) {
//     console.log('You are a teenager.');
// } else {
//     console.log('You are not a teenager.');
// }

// if (age >= 20 || age < 13) {
//     console.log('You are not a teenager');
// } else {
//     console.log('You are a teenager');
// }

// if (dayOfWeek != 'saturday' || dayOfWeek != 'sunday'){
//     console.log('its a weekday, get to class!');
// }

// this down below is called a psuedo line of code
    // if isLoggedIn =!true
    //         dont let user do things

// Ternary Statements are If Else Conditions
// Written in a single line
// They are very elegant -> single line
// They do not allow for extra outputs -> no else if's
                // This is a truthy         // This is falsey
// age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

let userLoggedIn = true;
// userLoggedIn = true ? console.log('Welcome user!') : console.log('Please, log in.');

// Switch Statements are another conditional
// That work with predefined inputs that are expected
// If () {}

const food = 'fish';

// switch (food) {
//     case 'chicken':
//     console.log("I'll have the Chicken francese.");
//     break;

//     case 'steak':
//     console.log("I'll have the Filet medium rare.");
//     break;

//     case 'fish':
//     console.log("I'll have the Halibut.");
//     break;

//     case 'vegan':
//     console.log("I'll have the Portobello Risotto.");
//     break;

//     default:
//     console.log("Please, enter a valid entree!");
// }

// if () {}
// swtich () {}
// A for loop will give us more output than it has input
// Where to start, where to end, how much to go each time
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
// }

// An example
// Array of numbers to divide
// let numbers = [10, 20, 30, 40, 50, 60, 70 ,80, 90,100];
// For loop to divide each number by 2
// for (let i = 0; i < numbers.length; i++) {
//     let result = numbers[i] / 2;
//     console.log(numbers[i] + ” divided by 2 is ” + result);
// Code by Jake Pagnotto

const menuItems = [
                'Tacos',
                'Burritos', 
                'Pizza', 
                'Soup', 
                'Pasta',
                'BBQ',
                'Ramen',
                'Ceviche',
                'Etouffe',
                'Sushi'
                ]

// for (let i = 0; i < menuItems.length; i++) {
//     console.log(`Let's have ${menuItems[i]} for dinner tonight!`);
// }

             
            
const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

   // Get an output of the names those who belong in the Slytherin house

//    for (let i = 0; i < wizards.length; i++) {
//     console.log(`These names belong to the house of Slytherin: ${wizards.name}.`);
//    }

   // Failed but here are some examples from others

//    for(let i = 0; i < wizards.length; i++){
//     let x = wizards[i].house
//     if(x == "Slytherin") {
//         console.log(wizards[i].name)
//     }
// }
   // Code by: Molly Annette Parente

//    for(let i = 0; i < wizards.length; i++){
//     if (wizards[i].house === 'Slytherin'){
//         console.log(`${wizards[i].name} from ${wizards[i].house}`)
//     }
   // Code by: Barry (she/her)

//    for(let i = 0; i < wizards.length; i++){
//     if (wizards[i].house === 'Slytherin') {
//         console.log(`${wizards[i].name} (The mighty!)`)
//     } else {
//         console.log(`[REDACTED] ${wizards[i].house} peasant`)   
//     }
// }
// &&
// for (element of wizards) {
//     if (element.house === 'Slytherin') {
//         console.log(`${element.name} (The mighty!)`)
//     } else {
//         console.log(`[REDACTED] ${element.house} peasant`)  
//     }
// }
   // Both codes by: Jordan Johnson-Carter

//    for(let i = 0; i < wizards.length; i++){
//     if (wizards[i].house === "Slytherin"){
//         console.log(wizards[i])
//     } else{
//     console.log("not in Slytherin")
   // Code by: Cinque Staffor


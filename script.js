// if (){};

let age = 190

if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cant vote yet!');
}

const dayOfWeek = "tuesday"

if (dayOfWeek === 'tuesday') {
    console.log('Its Monday, better get to class!');
} else if (dayOfWeek === 'saturday'){
    console.log('Its saturday party on!');
} else {
    console.log('Please, enter another day!');
}

const yourMoney = 50;
const catPrice = 100;

if (yourMoney = catPrice) {
    console.log("You have just enough to buy a cat!");
} else if (yourMoney < catPrice){
    console.log("You cannot buy a cat. You need --- more dollars")
} if (yourMoney > catPrice) {
    console.log("You can buy a cat and will have --- dollars left over")
}

//  So I forgot I should use math to get the total.

// code example
if (yourMoney === catPrice) {
    console.log(`You have just enough to buy a cat!`)
} else if (yourMoney > catPrice) {
    console.log(`You can buy a cat, you will have $${yourMoney - catPrice} left over`)
} else {
    console.log(`You need $${catPrice - yourMoney} more dollars :(`)
}
    // Code by Jordan Johnson-Carter

// another code example
if (yourMoney > catPrice) {
    console.log("You can buy a cat and will have __ dollars left over")
}
else if (yourMoney === catPrice){
    console.log("You have just enough to buy a cat")
}
else {
    console.log("You cannot buy a cat. You need __ more dollars :(")
}
    // Code by Rhiannon OBrien


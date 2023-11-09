/**
 * Question 1 - 2D array
 * 
 * initialise the variable `pets` to a 2-Dimensional array that is 3 by 3 containing the values below:
 *                      (canFly?)   age
 *          column[0]   column[1]   column[2]
 * Row 1    bird        true        2
 * Row 2    dog         false       1
 * Row 3    cat         false       4
 * 
 * Then pass the 2D array as an arugment into a function called `pet checker`
 * The parameter in the function will be `animal`
 * 
 * Inside the function we will do some logical checking:
 * if the animal from row 1 can fly then console log out: My pet can fly
 * else you will then console log out: My pet cannot fly
 * 
 */
var pets = [
    ['bird', true, 2],
    ['dog', false, 1],
    ['cat', false, 4]
];

function petChecker(animal) {
    if (animal[1] == true) {
        console.log("My pet can fly.");
    } else {
        console.log("My pet cannot fly.");
    }
}

petChecker(pets[0]); //My pet can fly.

petChecker(pets[1]); //My pet cannot fly.

petChecker(pets[2]); //My pet cannot fly.

/**
 * Question 2 - arrow function
 * 
 * Initialise the variable `fall` to an object. This object contains the following values:
 * `accessories` that contains an array containing: `gloves`, `scarfs`, `leaves`
 * `drinks` that contains an array with the values: `hot chocolate`, `coffee`
 * 
 * Then under the object assign the variable sentence to say: 
 * When I think of fall I think of:
 * 
 * Then we will be calling the object fall, accessories and using the .map method to add each item to the end of the initialized sentence.
 * Make sure to add a comma each time it iterates through the array (just like a regular sentence structure)
 * 
 * Then on a new line we will call the object fall again but this time we will use the .map method on drinks
 * Again make sure to add commas at the end of each item and these items will get added to the variable sentence as well
 * 
 * Then on a new line we will add the last item to the varaible sentence which says:
 * and colder weather
 * 
 * Then console log out the sentence.
 * Hint: if you did it correctly you should see this: 
 * When I think of fall I think of: gloves, scarfs, leaves, and hot chocolate.
 */

var fall = {
    accessories: ['gloves', 'scarfs', 'leaves'],
    drinks: ['hot chocolate', 'coffee']

};

var sentence = "When I think of fall I think of: ";

fall.accessories.map(value => sentence += value + ", ");


fall.drinks.map(value => sentence += value + ", "); 
sentence += "and colder weather";
console.log(sentence); //When I think of fall I think of: gloves, scarfs, leaves, hot chocolate, coffee, and colder weather



/**
 * Question 3 - object
 * 
 * Initialise the variable `parrot` to an object that contains the following values:
 * beak     true
 * age      10
 * name     Bob
 * 
 * Then console log out the parrot object. 
 * Write a single line comment as to what will be displayed.
 * 
 */

var parrot = {
    beak: true,
    age: 10,
    name: "Bob"
};
console.log(parrot); //{ beak: true, age: 10, name: 'Bob' }






/**
 * Question 4 - switch
 * 
 * Initialise the variable number to the value of 1 
 * (you will test the value 1 first)
 * Initialise the variable sentence to an empty string
 * 
 * Then initialise `contained value` to the function called `sentence checking` which passes the arguments of: number and sentence
 * 
 * Then setup a function called sentence checking. This function has the parameters of: value, words
 * 
 * Setup a switch statement that takes in the value.
 * Then use the case in the switch to check the following (add the sentences to the parameter words):
 * case 1    You guessed 1
 * case 2    You guessed 2
 * case 3    You guessed 3
 * case 4    You guessed 4
 * default    Wrong guess
 * 
* Add a new line special character to the end of each sentence you setup except the last one.
* 
* Then return `words`
* 
* under the function then console log out contained sentence
* 
* Here are the following Edge cases you must meet (you must see the results in your terminal when you test out different numbers as provided below):
* (dont use a if statement im just telling you here what you will have to modify in switch statement in order to see the results in your terminal)
* case number is 1 then it will add to the sentence: 
* You guessed 1
* You guessed 2
* 
* case number is 2 then:
* You guessed 2
* 
* case number is 3 then:
* You guessed 3
* 
* case number is 4 then:
* You guessed 4
* Wrong guess
*/


var number = 4;
var sentence = "";
var containedValue = sentenceChecking(number, sentence);

function sentenceChecking(value, words) {
    switch (value) {
        case 1:
            words += "You guessed 1\n\r";
        case 2:
            words += "You guessed 2\n\r";
            break;
        case 3:
            words += "You guessed 3\n\r";
            break;
        case 4:
            words += "You guessed 4\n\r";
        default:
            words += "Wrong guess\n\r";
    }
    return words;
}
console.log(containedValue);




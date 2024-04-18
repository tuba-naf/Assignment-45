// Assignment Questions-45*/
//https://docs.google.com/forms/d/e/1FAIpQLSdY8rcrJjxheN4DDpdrZSpyg2RqcZAuu9Et5os5svjNp8S95Q/viewform'
//Question 01) */
console.log("Hello, World");
// console.log( "The Printing of Hello World shows that the typescript(compiler)and node.js(software required to run javascript) have been installed in my system.")
//Question-02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
console.log("Printing of Person's name:");
let personname1 = "Tuba";
let message = ", Would you like to learn some python today?";
console.log("Hello" + " " + personname1 + " " + message);
console.log();
//  Question-03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase*/
console.log("Person's name in upper, lower and title case:");
let person_name = "Tuba nafees";
// Print in lowercase*/
console.log("Lowercase", person_name.toLowerCase());
//Print in Uppercase*/
console.log("Uppercase:", person_name.toUpperCase());
// // Print in titlecase*/
console.log("Titlecase:", person_name.replace(/\b\w/g, c => c.toUpperCase()));
console.log();
// The expression /b\w/\ matches the first letter of each word in the string. g refers to gloabally, referring to the entire string.
//Question-04 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
console.log(`The founder of the nation, Jinnah , once said, "There are two powers in the world: one is sword and the other is the pen. There is a great competition and rivalry between the two. There is a third power stronger than both. that of the women.`);
console.log();
// Question-05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person = "Einstein";
let message3 = `, If you can't explain it simply, you don't understand it well enough.`;
console.log("According to" + " " + famous_person + " " + message3);
console.log();
// Question-06:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Original & Stripped Names");
let store = "\t\n\ \t\n Tuba Nafees \n\t\n\t";
console.log("original:", store);
console.log("stripped:", store.trim());
console.log();
//Question-07: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition:6+2=" + (6 + 2));
console.log("Subtraction:10-2=" + (10 - 2));
console.log("Multiplication:4*2=" + (4 * 2));
console.log("Division:16/2=" + (16 / 2));
console.log();
//Question-08:You should create four lines that look like this:;// console.log(5 + 3)*/
console.log("Printing of Four lines equivalent to (5+3)");
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log();
//Question-09:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/
let favoriteno = 4;
let message4 = "My favorite no is";
console.log("Favorite NO:" + message4 + " " + favoriteno);
console.log();
// Question-10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does*/
// Answer: I have already added comments to each program*/
// Question-11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("List of Friends");
let names = ["Kiyara", "Hafsa", "Ruhab", "Mehwish"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// 0 refers to Kiyara and 3 refers to Mehwish*/.
console.log();
//Q-13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.*/
let names5 = ["I would like to own a car but with a driver.", "I don't like driving.", "Neither, I am found of luxrious cars, any good cost-effective model would suffice.", "The most I want is to have a better infrastructure for ordinary vehicles in my city."];
console.log("List with a series of statements about item(Car):");
console.log(names5[0]);
console.log(names5[1]);
console.log(names5[2]);
console.log(names5[3]);
console.log("List with a series of items:");
let names6 = ["Honda", "Suzuki", "Civic", "Alto"];
names6.map((items) => console.log(`I would like to own ${items}`));
console.log();
// Question-14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let inivitation = ["Hafsa", "Manal", "Mahnoor"];
console.log("Invitation to Friends");
inivitation.forEach((items) => console.log(`Greetings ${items},:Hopefully, you must be doing well. It has been ages since we last had a get-together. I am inviting you to my place this Saturday, Kindly accept my invitation.
// Regards, Your Friend`));
console.log();
// Question-15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let invitation1 = ["Hafsa", "Manal", "Mahnoor"];
let old = "Mahnoor";
invitation1 = invitation1.filter((items) => items !== old);
invitation1.map((items) => console.log(`Dear,${items},
Unfortunately, ${old},will not be able to join us`));
let invitation2 = ["Hafsa", "Manal", "Mahnoor"];
let old2 = "Mahnoor";
let newlyappointed = "Zoha";
invitation2[invitation2.indexOf(old2)] = newlyappointed;
console.log('');
console.log("Updated Guest List:");
invitation2.map((items) => console.log(`Dear ${items},
Hope to see you to my place this Saturday, Kindly accept my invitation.
Regards, Your Friend`));
console.log();
// Question-16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log('Hurrah!,Since we have found a bigger dinner table, we are planning to invite three more guests');
invitation2[invitation2.unshift("Kiyara")];
let middleindex = Math.floor(invitation2.length / 2);
let middleindex1 = invitation2.splice(middleindex, 0, "Sadaf");
invitation2.push("Zaira");
console.log(invitation2);
invitation2.map((items) => console.log(`Dear ${items},
Hope to see you to my place this Saturday, Kindly accept my invitation.
Regards, Your Friend.`));
console.log();
//Question-17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Unfortunately, I can invite only two people for the dinner as the new table will not arrive timely for the dinner");
while (invitation2.length > 2) {
    let removedfriends = invitation2.pop();
    console.log(`Sorry ${removedfriends} I can't invite you to the dinner due to unavailibility of the space`);
}
invitation2.map((invitation2) => console.log(`Greetings, 
${invitation2} you are invited to my place
Regards, Your friend.`));
invitation2.pop();
invitation2.pop();
console.log("Updated List");
console.log(invitation2);
console.log();
//Q18 - Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
// Print your array in alphabetical order without modifying the actual list.
// Show that your array is still in its original order by printing it.
// Print your array in reverse alphabetical order without changing the order of the original list.
// Show that your array is still in its original order by printing it again.
// Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list again. Print the list to show it’s back to its original order.
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ['Madina', 'Canada', 'UAE', 'Qatar', 'UK'];
console.log("Original Order:", places);
console.log("Alphabateical Order", places.sort());
console.log("Original Order:", places);
console.log("Reverse Order:", places.reverse());
console.log("Original Order:", places);
places.reverse();
console.log("Reversed Order:", places);
console.log("Original Order:", places);
console.log("Alphabateical Order", places.sort());
console.log("Reverse Order:", places.reverse());
console.log();
//Q19 - Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let invitations = ["Hafsa", "Manal", "Mahnoor", "Kiyara", "Zoha"];
console.log(`I would like to invite ${invitations.length} for iftar at my home this sunday.`);
console.log();
//Q20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let list = ["Indus", "Jhelum", "Chenab", "Sutlej", "Ravi", "Bias"];
console.log("The former three belong to Pakistan and the latter three belong to India", list);
console.log();
//Q21 -think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let book = { Title: "Constitutional & Political History of Pakistan", Author: "Hamid Khan" };
console.log(`Book Info:${book.Title} by ${book.Author}`);
console.log();
//Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("Intentional Error:");
let index = ["Red", "Blue", "Purple"];
console.log(index[3]); //Error will occur because color is not defined at position 3.
console.log(index[2]);
console.log();
//Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//console.log("Condition False:")
let car = "Toyota";
console.log(car == 'Suzuki');
console.log(car == 'Mehran');
console.log(car == 'Alto');
console.log(car == 'Cultus');
console.log(car == 'City');
console.log("Condition True:");
console.log(car == 'Toyota');
console.log(car == 'Toyota');
console.log(car == 'Toyota');
console.log(car == 'Toyota');
console.log(car == 'Toyota');
console.log();
//Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
console.log("Equality & Inequality with Strings");
let name1 = "Amna";
console.log(name1 == "Amna");
console.log(name1 == "Amirah");
console.log("Lowercase Function");
console.log(name1.toLowerCase() == "Amna");
console.log(name1.toLowerCase() == "amna");
console.log("Numerical Tests:");
//Equality & Inequality:
let obj1 = 3;
let obj2 = 3;
console.log(obj1 == obj2);
console.log(obj1 == 5);
console.log(obj1 !== 5);
//Greater than and less than:
console.log(obj1 < 5);
console.log(obj2 > 5);
//Greater than and equal to:
console.log(obj1 <= 5);
console.log(obj2 >= 5);
//And and Or operators:
console.log((obj1 <= 5) && (obj2 >= 2));
console.log((obj1 <= 5) && (obj2 >= 5));
console.log((obj1 <= 5) || (obj2 >= 2));
console.log((obj1 <= 1) || (obj2 >= 5));
//Whether an item is or not an array:
let fruits = ["Oranges", "Grapes", "Apple"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Peach"));
console.log();
//Q25 - Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points.");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("player just earned 5 points.");
}
console.log();
//Q26 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.
//If Condition:
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points.");
}
//Else Condition:
alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points.");
}
console.log();
//Q27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Green Alien Version:
let aliencolor = "green";
if (aliencolor == "green") {
    console.log("player earned 5 points.");
}
else if (aliencolor == "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolor == "red") {
    console.log("player earned 15 points.");
}
//Yellow Alien Version:
aliencolor = "yellow";
if (aliencolor == "green") {
    "player earned 5 points.";
}
else if (aliencolor == "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolor == "red") {
    console.log("player earned 15 points.");
}
//Red Alien Version:
aliencolor = "red";
if (aliencolor == "green") {
    "player earned 5 points.";
}
else if (aliencolor == "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolor == "red") {
    console.log("player earned 15 points.");
}
console.log();
//Q28 - Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.
let age = 30;
if (age <= 2) {
    console.log("The person is a baby");
}
else if (age == 2 || age < 4) {
    console.log("Person is a toddler");
}
else if (age == 4 || age < 13) {
    console.log("Person is a kid");
}
else if (age == 13 || age < 20) {
    console.log("Person is a teenager");
}
else if (age == 20 || age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is an elder");
}
console.log();
// Q29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "banana", "orange", "grapes", "mango", "pomegrante", "strawberry", "coconut"];
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples");
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana");
}
if (favorite_fruits.includes("orange")) {
    console.log("I really like orange");
}
if (favorite_fruits.includes("grapes")) {
    console.log("I really like grapes");
}
if (favorite_fruits.includes("mango")) {
    console.log("I really like mango");
}
if (favorite_fruits.includes("pomegrante")) {
    console.log("I really like pomegrante");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberry");
}
if (favorite_fruits.includes("coconut")) {
    console.log("I really like coconut");
}
console.log();
//Q30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Admin", "User1", "User2", "User3", "User4"];
usernames.forEach((usernames) => {
    if (usernames == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello, ${usernames} thank you for logging in again.`);
    }
});
console.log();
//Question-31:
//Q31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
let userlist = [];
if (userlist.length == 0) {
    console.log("We need to find some users");
}
else {
    console.log("Greet Users");
}
console.log();
//Q32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Aymen", "Ruhab", "Bushra", "Owaisa", "Khalid"];
let new_users = ["Zargull", "Anas", "Bushra", "Farah", "Owaisa"];
new_users.forEach((newuser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newuser.toLowerCase())) {
        console.log(` ${newuser} already exists in current_users.`);
    }
    else {
        console.log(`${newuser} is available.`);
    }
});
console.log();
// Q33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let suffix = "";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    else if (number === 4) {
        suffix = "th";
    }
    else if (number === 5) {
        suffix = "th";
    }
    else if (number === 6) {
        suffix = "th";
    }
    else if (number === 7) {
        suffix = "th";
    }
    else if (number === 8) {
        suffix = "th";
    }
    else if (number === 9) {
        suffix = "th";
    }
    {
        console.log(`${number}${suffix}`);
    }
});
console.log();
// Q34 - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["Pepperoni", "Fajita", "Vege"];
pizza.forEach(pizza => { console.log(`I like ${pizza}.`); });
console.log("I really love pizza.");
console.log();
// Q35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Cat", "Dog", "Goat"]; //All are mammals//
animals.forEach(animals => { console.log(`A ${animals} is a domestic animal.`); });
console.log("Any of these animals would make a great pet.");
console.log();
// Q36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_tshirt(size, message) { console.log(`The size of the T-shirt is ${size} and the message printed on the T-shirt is ${message}.`); }
make_tshirt("medium", "(This is your world)");
console.log();
// Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_tshirt1(size, message = "I love typescript") { console.log(`Make a ${size} shirt with ${message} printed on it.`); }
make_tshirt1("Large");
make_tshirt1("medium");
make_tshirt1("small", "I love both JS and TS");
console.log();
// Q38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") { console.log(`${city} is in ${country}`); }
describe_city("Karachi");
describe_city("Lahore");
describe_city("Newyork", "the USA");
console.log();
// Q39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) { return `${city},${country}`; }
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Newyork", "USA"));
console.log(city_country("Beijing", "China"));
console.log();
//Q40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistname, albumtitle) { return `${artistname} made an album ${albumtitle}.`; }
console.log(make_album("Ali Sethi", "Pasoori"));
console.log(make_album("Sajjad Ali", "Ravi"));
console.log(make_album("Momina Mustehsan", "Baari"));
console.log();
//Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Ali", "Sara", "Zainab"];
function show_magicians(magicians) { magicians.forEach(magician => console.log(magician)); }
show_magicians(magicians);
console.log();
//Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians1 = ["Ali", "Sara", "Zainab"];
function make_great(magicians1) { return magicians1.map(magician1 => `${magician1},The great magician`); }
console.log(make_great(magicians1));
console.log();
//Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians2 = ["Ali", "Sara", "Zainab"];
function make_great1(magicians2) { return magicians2.map(magicians2 => `The great ${magicians2}.`); }
console.log(make_great1(magicians2));
let greatmagicians = make_great1([...magicians2]); //stored in a separate array
function show_magicians1(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians1(magicians2);
show_magicians1(greatmagicians);
console.log();
//Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) { return `Make a sandwich with ${items.join(",")}.`; }
console.log(sandwich("Cheese", "ketchup", "and lettuce"));
console.log(sandwich("Cheese", "Mayo", "and garlic"));
console.log(sandwich("Lettuce", "cabbage", "and ketchup"));
console.log();
//Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function makecar(Manufacturer, Model, ...arg) {
    let car = { Manufacturer, Model };
    arg.forEach(([key, value]) => (car[key] = value));
    return car;
}
console.log(makecar("Toyota", "corolla", ["color", "Red"], ["year", "2022"]));
console.log(makecar("Suzuki", "Mehran", ["color", "Black"], ["Fuel type", "Petrol"]));
console.log(makecar("Suzuki", "Swift", ["color", "Blue"], ["transmission", "automatic"]));
export {};

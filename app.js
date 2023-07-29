// DATE METHODS(Assignment # 31-34)

/* Question 01
 1. Write a program that displays current date and time in
your browser. 
*/
document.write("<h2> Question 01 </h2>")

var current = new Date();
document.write("Current date and time is: " + " " + current);

/* QUESTION 02 
2. Write a program that alerts the current month in words.
For example December.
*/
document.write("<h2> Question 02 </h2>");

var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

var currentDate = new Date();
var monthIndex = currentDate.getMonth();

var currentMonth = months[monthIndex];
document.write("Current Month Name is: " + " " + currentMonth);

/* QUESTION 03
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */
document.write("<h2> Question 03 </h2>");

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
var dayIndex = currentDate.getDay();
var currentDay = days[dayIndex];
document.write("Current day is: " + " " + currentDay);

/* QUESTION 04
4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.  */

document.write("<h2> Question 04 </h2>");

var currentDate = new Date();

var todayDay = currentDate.getDay();

if (todayDay === 0 || todayDay === 6) {
    document.write("It's Fun Day");
} else {
    document.write("It's a Working day!");
}

/* QUESTION 05
5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */

document.write("<h2> Question 05 </h2>");

var currentDate = new Date();

var todayDate = currentDate.getDate();

if (todayDate < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

/* QUESTION 06
6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

document.write("<h2> Question 06 </h2>");

var newTime = new Date();
var oldTime = newTime.getTime();

var minutes = Math.floor(oldTime / (1000 * 60))
document.write("minutes since midnight, 1 Jan 1970: " + " " + minutes);

/* QUESTION 07
7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

document.write("<h2> Question 07 </h2>");

var todayTime = new Date();
var timeNow = todayTime.getHours();

if (timeNow <= 12) {
    alert("It's AM");
    document.write("It's Am")
} else {
    alert("It's PM");
    document.write("It's Pm")
}

/* QUESTION 08
8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

document.write("<h2> Question 08 </h2>");
var lastDayOf2020 = new Date("December 31 , 2020");

var laterDate = lastDayOf2020;
document.write("Later Date: " + " " + laterDate);

/* QUESTION 09
9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

document.write("<h2> Question 09 </h2>");

var ramadanNow = new Date("March 23, 2023");
var firstRamadan = new Date("June 18, 2015");

var days = (ramadanNow - firstRamadan) / (1000 * 60 * 60 * 24);
document.write(days + " " + "days have past since 1st Ramadan, 2015.");

/* QUESTION 10 
10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015. */

document.write("<h2> Question 10 </h2>");

var refDate = new Date("December 05, 2015");
var beginningOf2015 = new Date("January 01, 2015");

var seconds = (refDate - beginningOf2015) / 1000;
document.write(seconds + " " + " seconds elapsed between Dec 05 2015 and Jan 01 2015");

/* QUESTION 11 
11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

document.write("<h2> Question 11 </h2>");

var currentDate = new Date();
document.write("Current Date: " + currentDate + "</br>");

var hours = currentDate.getHours();

currentDate.setHours(hours - 1);
document.write("An Hour ago, It was " + currentDate);

/* QUESTION 12
12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */
document.write("<h2> Question 12 </h2>");

var now = new Date();
document.write("Current Date: " + now + "</br>");

var years = now.getFullYear();

now.setFullYear(years - 100);
document.write("100 years back, It was " + now + "</br>");

/* QUESTION 13
13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

document.write("<h2> Question 13 </h2>");

var age = +prompt("Enter your age:");

var today = new Date().getFullYear();

var dateOfBirth = today - age;

document.write("Your age is " + age + "</br>");
document.write("Your birth year is " + dateOfBirth);

/* QUESTION 14
14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,

Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/

document.write("<h2> Question 14 </h2>");
var customerName = "John Doe";
var currentMonth = "July";
var numberOfUnits = 350;
var chargesPerUnit = 15.5;
var latePaymentSurcharge = 200;


var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);


var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);


document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: $" + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): $" + netAmountPayable + "<br>");
document.write("Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): $" + grossAmountPayable + "<br>");
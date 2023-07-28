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


*/
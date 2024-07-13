alert("You can test your JavaScript skills with this Quiz.");
var score = 0;

var firstQuestion = prompt("QUESTION#01\nWhich of the following is a server-side Java Script object?\na)Function \nb)file\nc)fileupload \nd)Date")
if (firstQuestion  == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: a)Function")
}

var secondQuestion = prompt("QUESTION#02\nJava script can be used for Storing the form's contents to a database file on the server\na) True \nb)False \nc) fileupload \nd) none of these")
if (secondQuestion == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: b) False")
}

var thirdQuestion = prompt("QUESTION#03\nWhich operator is used to assign a value to a variable?\na) * \nb) + \nc) - \nd) =")
if (thirdQuestion == 'd') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: d) =")
}

var forthQuestion = prompt('QUESTION#04\nWhat is the correct syntax for referring to an external script called "script.js"?\na) <script name="script.js"> \nb) <script src="script.js"> \nc) <script href="script.js"> \nd) <script file="script.js">')
if (forthQuestion == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: b) <script src="script.js">')
}

var fifthQuestion = prompt('QUESTION#05\nHow do you write an if statement in JavaScript?\na) if i = 5 then \nb) if i == 5 then \nc) if (i == 5) \nd) if i = 5')
if (fifthQuestion == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) if (i == 5)')
}

var sixthQuestion = prompt('QUESTION#06\nWhere is the correct place to insert a JavaScript?\na) both <head> and <body> \nb) <head> \nc) <body>')
if (sixthQuestion == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) <body>')
}

var seventhQuestion = prompt('QUESTION#07\nHow do you write "Hello World" in an alert box?\na) alert("Hello World") \nb) msgBox("Hello World") \nc) alertBox("Hello World")')
if (seventhQuestion == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: a) alert("Hello World")')
}

var eightQuestion = prompt('QUESTION#08\nHow to write an IF statement for executing some code if "i" is NOT equal to 5?\na) if(i==5) \nb) if(i>=5) \nc) if(i!=5)')
if (eightQuestion == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) if(i!=5)')
}

var ninthQuestion = prompt('QUESTION#09\nJavaScript is the same as Java?\na) True \nb) False')
if (ninthQuestion == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: b) False')
}

var tenthQuestion = prompt('QUESTION#10\nWhich JavaScript keyword is used to declare a variable?\na) var \nb) let \nc) const \nd) All of these')
if (tenthQuestion == 'd') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: d) All of these')
}

// Result Message 
if(score>=0 & score<=4){
    alert("Your score is " +score+"/10\nYou need improvement in your JavaScript knowledge. Take some time to review the concepts and try again.")
}
else if(score>=5 & score<=7){
    alert("Your score is " +score+"/10\nYour performance is satisfactory in the JavaScript quiz. Good effort! Keep practicing to enhance your skills.")
}
else if(score>=8 & score<=9){
    alert("Your score is " +score+"/10\nGreat job on the JavaScript quiz! You have a good understanding of the concepts. Keep aiming for perfection.")
}
else if(score==10){
    alert("Your score is " +score+"/10\nExcellent work on the JavaScript quiz! You have mastered the concepts perfectly. Keep up the fantastic performance!")
}
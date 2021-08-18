var readLine = require("readline-sync");

var userScore = 0;

var userName = readLine.question("Tell me your name? ");
console.log('Hiii ' + userName );

var questionOne = readLine.question("Guess Am i older than 20? ");
var answerOne = 'yes';
var userAnswer=readLine.question(questionOne);

console.log('You entered '+ userAnswer);

if(answerOne==='yes')
{
  console.log('you are right');
  userScore=userScore+1;
  console.log("This is "+userScore)
}

else{
console.log('you are wrong');
console.log("Your score "+ userScore);
}
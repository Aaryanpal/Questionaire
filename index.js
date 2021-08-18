  //Quiz -- How well do you know me
  var readlinesync = require("readline-sync");
  

  console.log("Let's See how well do you know Aaryan 😉");

  var userName = readlinesync.question("Namaste \nGive me your name? ") ;

  console.log("\nWelcome, " + userName + ", so DO YOU KNOW Aryan? ");

  console.log("\nNOTE: For each correct answer you will get 1 points. \n");

  var userScore = 0;

  

  //array of objects

  var question = [{
    question:"\n What's my Full Name? \n",
    mcq:['Aryan','Aaryan yadav','Aryan Pal'],
    answer:"2"
  } ,{
    question:'what my college name?\n',
    mcq:['LPU','IPEC','IET'],
    answer:'1'
  },{
    question:'which phone i am using?\n',
    mcq:['lava','nokia','lenovo'],
    answer:'2',
  },{
    question:'who is my best friend?\n',
    mcq:['Ram','Gopal','No-one'],
    answer:'2'
  },{
    question:'where do i live?\n',
    mcq:['Delhi','Agra','Firozabad','None'],
    answer:'3'
  }
  ];


  for(var i=0; i < question.length;i++)
  {
    console.log("Q" + (i+1));
    play(question[i]);
    ;
  }



  function play({question1,mcq,answer1})
  {
    var userAnswer = readlinesync.keyInSelect(mcq,question1);
    

    if(userAnswer == answer1)
    {
      console.log('\n Yayy!! You are right!');
    userScore++;
    
    }
    else{
      console.log('\n OOPs you are wrong');
      
      
    }

  }

  console.log("Your Total is: " +userScore);
  console.log("-------------------------");

  console.log("Thanks for Playing, Have a nice day \n");
  console.log("---------------------------------");
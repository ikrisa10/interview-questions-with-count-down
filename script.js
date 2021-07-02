//CLOCK
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const timeSelect = document.querySelectorAll(".min-options");
const startButton = document.querySelector("#start-button");

function updateTimeAmount(element) {
        minutesDisplay.innerText = element.innerText.split(":")[0]
        secondsDisplay.innerText = element.innerText.split(":")[1];
}

running = false;

function updateBoth(){
  while(running) {
    if(minutesDisplay.innerText == "0" && secondsDisplay.innerText == "00") {
      alert("Time is up");
      return running=false;
    } else if(secondsDisplay.innerText == "00"){
      return [minutesDisplay.innerText = parseInt(minutesDisplay.innerText)-1,secondsDisplay.innerText = 59];
    } else if(parseInt(secondsDisplay.innerText) <= 10) {
      return secondsDisplay.innerText = "0" + (parseInt(secondsDisplay.innerText)-1);
    } else {
      return secondsDisplay.innerText = parseInt(secondsDisplay.innerText) -1;
    }
  }
  return running=false;
};

startButton.onclick = function(){
  running = true;
  setInterval(updateBoth, 1000);
}


//INTERVIEW QUESTIONS
var questions = [
    "Tell me about a goal you set and reached and how you achieved it.",
    "Tell me about the last time your workday ended before you were able to get everything done.",
    "Give me an example of a time you had to prioritize certain tasks or projects over others.",
    "Give me an example of a time when you had to handle multiple responsibilities at once. How did you prioritize your time?",
    "Tell me about the last time you handle a long-term project. How did you keep the project on track?",
    "Can you share about a time you had to be flexible or adaptable?",
    "Tell me about a time when you had to be creative to solve a problem.",
    "Tell me about a time you had to learn quickly.",
    "Tell me about a time you made a difficult decision.",
    "Tell me about how you work under pressure.",
    "Tell me about a time when you handled a challenging situation.",
    "Tell me about a time when you made a mistake. What did you do to correct it?",
    "Give me an example of a time you made a decision that was unpopular and explain how you handled implementing it.",
    "Tell me about a goal you failed to achieve.",
    "Tell me about a time you felt you went above and beyond.",
    "Give me an example of how you set goals.",
    "Tell me about the proudest moment in your professional career why it was meaningful to you.",
    "Can you give me an example of a time when you felt dissatisfied with your work?",
    "Tell me about a body of work you felt was most impactful for you or your company.",
    "How do you stay motivated when a job requires you to perform repetitive tasks?",
    "Tell me about a time when you had to say “no.”",
    "Give me an example of a time when you persuaded someone. How’d you do it and why?",
    "Talk about a time when you’ve had to manage up.",
    "Tell me about a time when you had to explain a complex topic to people with less subject knowledge. How did you make sure everyone could understand you?",
    "Tell me about a time you had to build rapport with a coworker or client whose personality was different than yours?",
    "    Tell me about a time when you collaborated with others who were different than you.",
    "Tell me about the best presentation you’ve given. Why was it good?",
    "Tell me about a time when you felt like a good leader.",
    "Can you give me an example of how you’ve contributed to the culture of previous teams, companies or groups?",
    "Share an example of how you were able to motivate a coworker, your peers or your team.",
    "Tell me about a time you disagreed with a supervisor.",
    "Tell me about a time you had to stand up for your beliefs.",
    "Tell me about a time when you disagreed with your manager’s leadership style or team culture.",
    "Tell me about a time when you were in conflict with a peer and how the situation was resolved.",
    "Tell me about a time you wish you’d handled a situation with a coworker differently.",
];

function randomInteger(min, max, incOrExc) {
    var returnInteger = 0;
    if (incOrExc == "inclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (incOrExc == "exclusive") {
        min = Math.ceil(min);
        max = Math.floor(max);
        returnInteger = Math.floor(Math.random() * (max - min) + min);
    }
    return returnInteger;
}

function fillQuestions() {
  return [document.getElementById("question1").innerText =
      questions[randomInteger(0, questions.length, "exclusive")], document.getElementById("question2").innerText =
      questions[randomInteger(0, questions.length, "exclusive")]]
    

    
}

fillQuestions();

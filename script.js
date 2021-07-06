//CLOCK
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const timeSelect = document.querySelectorAll(".min-options");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");

function updateTimeAmount(element) {
    minutesDisplay.innerText = element.innerText.split(":")[0];
    secondsDisplay.innerText = element.innerText.split(":")[1];
}

running = false;
let timerId;

function updateBoth() {
    while (running) {
        if (
            minutesDisplay.innerText == "0" &&
            secondsDisplay.innerText == "00"
        ) {
            clearInterval(timerId);
            [
                (minutesDisplay.innerText = "Time"),
                (secondsDisplay.innerText = "Out"),
            ];
            return (running = false);
        } else if (secondsDisplay.innerText == "00") {
            return [
                (minutesDisplay.innerText =
                    parseInt(minutesDisplay.innerText) - 1),
                (secondsDisplay.innerText = 59),
            ];
        } else if (parseInt(secondsDisplay.innerText) <= 10) {
            return (secondsDisplay.innerText =
                "0" + (parseInt(secondsDisplay.innerText) - 1));
        } else {
            return (secondsDisplay.innerText =
                parseInt(secondsDisplay.innerText) - 1);
        }
    }
    return (running = false);
}

startButton.onclick = function () {
    clearInterval(timerId);
    running = true;
    timerId = setInterval(updateBoth, 1000);
};

stopButton.onclick = function() {
  running = false;
  clearInterval(timerId);
};

//buttons functions
function tellMeAboutYourself() {
  if (document.getElementById("about-yourself").style.display != "block") {
    return document.getElementById("about-yourself").style.display = "block";
  } else { 
    return document.getElementById("about-yourself").style.display = "none";
  }
}

function addReel() {
  let arrayOfTextAreas = document.getElementsByClassName("HR-textarea");
  let insertionPoint = document.getElementById("HR-textareas-ID");
  let insertionDiv = document.createElement("div");
  insertionDiv.classList.add("HR-textarea")
  let third = '<textarea placeholder="3: Outside of work as a [volunteer, leader, mentor, etc] I ____..."></textarea>'
  let fourth = '<textarea placeholder="4: In my last team as a _____, I [contributed/lead/developed/acheived/etc]..."></textarea>'
  if(arrayOfTextAreas.length == 2) {
    insertionDiv.innerHTML = third;
  } else if (arrayOfTextAreas.length == 3) {
    insertionDiv.innerHTML = fourth;
  }
  return insertionPoint.appendChild(insertionDiv);
}

//INTERVIEW QUESTIONS
let questions = [
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
    "Tell me about a time when you collaborated with others who were different than you.",
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

let teasers = [
  "How many trailing zeros are in the number 5! (5 factorial)?",
  "There are 50 bikes, each with a tank that holds enough gas to go 100 km. Using these 50 bikes, what is the maximum distance that you can go?",
  "You have two light bulbs in a 100-story building. You want to find out what floor the bulb will break on, using the least number of drops.",
  "If you had an infinite supply of water and a 5-liter and 3-liter bucket, how would you measure exactly 4 liters? The buckets do not have any intermediate markings.",
  "If you had 5,623 participants in a tournament, how many games would need to be played to determine the winner?",
  "There are 20 different socks, of two types, in a drawer in a completely dark room. What is the minimum number of socks you should grab to ensure you have a matching pair?",
  "The probability of finding the parking slot occupied is 1/3. You find it empty for 9 consecutive days. Find the probability that it will be empty on the 10th day.",
  "Imagine that you have three boxes, one containing two black marbles, one containing two white marbles, and the third, one black marble and one white marble. The boxes were labeled for their contents - BB, WW, BW - but someone has switched the labels so that every box is now incorrectly labeled. You are allowed to take one marble at a time out of any box, without looking inside, and by this process of sampling, you need to determine the contents of all three boxes. What is the smallest number of drawings needed to do this?",
  "You toss two coins. If you get heads with the first coin, you stop. If you get tails, you toss it again. The second coin is tossed regardless. What is the ratio of heads to tails?",
  "If you have a square room with no roof, and you had four flagpoles you had to plant on the walls so that each flagpole touched two walls, how would you do it?",
  "Given 9 balls, all of which weigh the same except for one, what is the minimum of weighings necessary to find the ball with the different weight?",
  "You're in a boat and you throw out a suitcase. Does the water level increase?",
  "You have 2 pieces of rope, each of which burns from one end to the other in 30 minutes (no matter which end is lit). If the two  pieces touch, the flame will transfer from one to the other. You cannot assume any properties of the rope that were not stated. Given only 1 match, can you use the ropes to time 45 minutes?",
  "In front of you are three light switches. Only one does anything, and it turns on the light downstairs. From where you are standing, you can't see the downstairs light, and it makes no sound. You must determine which switch operates the light, BUT you can only go check it once. How do you figure out which switch is for the light?",
  "You have 1,000 bottles of juice. One contains poison and tastes bitter. How do you find the poisoned bottle using the smallest number of sips?",
  "One night, Aunt Judy was reading a book in the living room. Uncle Jim turned off the light, leaving the room completely dark. Aunt Judy continued to read. How is this possible?",
  "A farmer challenges an engineer, a physicist, and a mathematician to fence off the largest amount of area using the least amount of fence. The engineer made his fence in a circle and said it was the most efficient. The physicist made a long line and said that the length was infinite. Then he said that fencing half of the earth was the best. The mathematician laughed at the others and, with his design, beat them in the challenge. What did he do?",
  "A man is sitting in a pub feeling rather poor. He sees the man next to him pull a wad of $50 notes out of his wallet. He turns to the rich man and says to him, 'I have an amazing talent: I know almost every song that has ever existed.' The rich man laughs.\n\
  The poor man says, 'I am willing to bet you all the money you have in your wallet that I can sing a genuine song with a lady's name of your choice in it.' The rich man laughs again and says, 'OK, how about my daughter's name, Joanna Armstrong-Miller?'\n\
  The rich man goes home poor. The poor man goes home rich. What song did he sing?",
  "A bloke in a restaurant decides to challenge a waiter. He asks him to bring a glass, plate, water, a match and a lemon wedge. He then proceeds to pour enough water onto the plate to cover it.",
  "This object has holes in its top and bottom. It also has holes on its sides and bottom. Not only that, it is riddled with holes in the middle. Despite this, it can still hold water. What is it?",
  "If we think for a second in a very general way, it should take 4 actions to put elephant in a fridge. Grab an elephant, open a fridge, put the elephant in the fridge, close the fridge. Now how many actions would take to put rhyno in the fridge following similar logic?",
  "How can the farmer bring the wolf the goat and the cabbage across the river without anything being eaten? There is a boat that can fit himself plus either the wolf, the goat, or the cabbage. If the wolf and the goat are alone on one shore, the wolf will eat the goat. If the goat and the cabbage are alone on the shore, the goat will eat the cabbage.",
  "How many tennis balls could fit into a swimming pool?"
];

function revealBrainTeaser() {
  if (document.getElementById("brain-teaser-area").style.display != "block") {
    return document.getElementById("brain-teaser-area").style.display = "block";
  } else { 
    return document.getElementById("brain-teaser-area").style.display = "none";
  }
}

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    returnInteger = Math.floor(Math.random() * (max - min) + min);
    return returnInteger;
}

function fillQuestions() {
    let randomOne = randomInteger(0, questions.length);
    let randomTwo = randomInteger(0, questions.length);
    let randomThree = randomInteger(0, teasers.length);
    while (randomOne === randomTwo) {
        randomTwo = randomInteger(0, questions.length);
    }
    return [
        (document.getElementById("question1").innerText = questions[randomOne]),
        (document.getElementById("question2").innerText = questions[randomTwo]),
        (document.getElementById("teaser").innerText = teasers[randomThree])
    ];
}

fillQuestions();

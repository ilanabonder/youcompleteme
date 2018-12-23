console.log("HELLO PONY PONY");

chrome.runtime.onMessage.addListener(gotMessage);
//
function gotMessage(message,sender,sendResponse){
  console.log(message.txt);


let emailTextDiv = document.getElementsByClassName('gs');
console.log(emailTextDiv);
let emailResponses = emailTextDiv.length;

let emailCurrentResponse = emailTextDiv[emailResponses - 1].innerText;
console.log(emailCurrentResponse);
// console.log('current: '+ emailCurrentResponse);
// creating romantic answers
// let story = {
//   "story":"#first# #feeling# #last"
//   "first":["I", "The", "My", "Your"],
//   "feeling":["love","feel", "need", "passion", "dream", "smile", "smell", "miss", "think"],
//   "last":["your touch","more than ever", "it's beautiful", "can't forget", "about us", "all the time", "my heart","is everything","because of you"]
// }
//
// let grammar;
// grammar =tracery.createGrammar(story);
//
// let result = grammar.flatten("#story#");
// console.log(result);

  //activating chrome extension
  if(message.txt === "enable") {
    let btnAutocomplete = document.getElementsByClassName('bra');
    for (elt of btnAutocomplete){
      let myArray = [
        "I love you!",
        "The best thing to hold onto in life is each other.",
        "You give me butterflies",
        "My heart just melted",
        "Let's watch the stars together.",
        "You're my everything",
        "You had me at hello.",
        "If you miss love, you miss life.",
        "I've never felt this way",
        "You're beautiful",
        "Thank you Love",
        "My day just got better with this message",
        "I just cannot help being in love with you.",
        "When I look at you, I can see the rest of my life in your eyes",
        "Wherever you are is where I want to be.",
        "Do you even know how special you are to me?",
        "You are a rainbow after the storm.",
        "I am still wearing the smile that you gave me.",
        "You are my true happiness",
        "I am just addicted to you.",
        "When I think of you, I smile.",
        "The sun may be hot, but you are still the hottest thing in my life."
              ];
      let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      elt.style['color']= '#C21807';
      elt.innerHTML = randomItem;
      elt.addEventListener("click", function(event){
         console.log('BTN CLICKED!!!');
         setTimeout(function () {
           let txt_input = document.getElementsByClassName('Am aO9 Al editable LW-avf');
           txt_input[0].innerHTML = randomItem;
        }, 250);
      });
    }

    //add event listener for button
 console.log(btnAutocomplete);

  }
}

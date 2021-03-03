// global constants
const clueHoldTime = 1000; 
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [];
var length = 3;
var progress = 0; 
var gamePlaying = false;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
  
  console.log("generating pattern");
  //randomly generate pattern
  for(var i =0; i <length; i++ ){
    pattern[i] = Math.floor(Math.random()*7)+1;
    
  }
  
  /* print out pattern
  var pat = "";
  for(var i =0; i <length; i++ ){
     pat+=pattern[i];
  }
  console.log(pat);
  */
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("turn").innerHTML = "Playing sequence...";
  playClueSequence();
}

function stopGame(){
  strikes = 0;
  gamePlaying = false;
  document.getElementById("turn").innerHTML = "Click Start to play again!";
  document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6:440,
  7: 493.88
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost");
}

function winGame(){
  stopGame();
  alert("Game over. You won!")
}


function guess(btn){
  console.log("user guessed: "+btn);
  
  if(!gamePlaying){
    return;
  }
  
  
  if(pattern[guessCounter] == btn){
    //correct guess(es)
    if(guessCounter == progress){
      if(progress == pattern.length -1){
        //game won
        winGame();
      }else{
        //add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //check next guess
      guessCounter++;
    }
  }
  else{
    //Guess was incorrect
    strikes++;
    document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
    if(strikes == 3){
      loseGame();
    }
  }
}


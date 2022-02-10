//Kevin Jasinghe
// Friday Oct 23rd
// Escape room project
var dialog = 0;
var dialog2 = 0;
onEvent("start", "click", function(event) {
  setScreen("backroundScreen");
});
onEvent("beginJourney", "click", function(event) {
  setScreen("gym");
});
onEvent("clickContinueGym", "click", function(event) {
  setScreen("firstGame");
  hideElement("dumbbell2");
  hideElement("dumbbell3");
  hideElement("dumbbell4");
});
onEvent("gymIcon", "click", function(event) {
  setScreen("firstGame");
  hideElement("dumbbell2");
  hideElement("dumbbell3");
  hideElement("dumbbell4");
});
onEvent("gymText", "click", function(event) {
  setScreen("firstGame");
  hideElement("dumbbell2");
  hideElement("dumbbell3");
  hideElement("dumbbell4");
});
//first game
var strength = 0;
var check = 0;
var time = 20;
onEvent("startFirstGame", "click", function(event) {
  hideElement("firstGameInstruc");
  hideElement("startFirstGame");
  check = 1;
  timedLoop(1000, function() {
    time = time - 1;
    setText("Time", "Time: " + time);
    if (time <= 0) {
      stopTimedLoop();
      setScreen("firstGameFinish");
      setText("earnedStrength", ("You earned " + strength) + " strength points!");
    }
  });
 });
onEvent("dumbbell", "click", function(event) {
  if (check == 1) {
    hideElement("dumbbell");
    showElement("dumbbell2");
  }
});
onEvent("dumbbell2", "click", function(event) {
  hideElement("dumbbell2");
  showElement("dumbbell3");
});
onEvent("dumbbell3", "click", function(event) {
  hideElement("dumbbell3");
  showElement("dumbbell4");
});
onEvent("dumbbell4", "click", function(event) {
  strength = strength + 1;
  hideElement("dumbbell4");
  showElement("dumbbell");
  setText("strengthPoint", "Strength Points: " + strength);
});
onEvent("headToEgypt", "click", function(event) {
  setScreen("Egypt");
});
//First game finished. Now in Egypt
//Bunch of text dialog 
onEvent("clicktoContinueEgypt", "click", function(event) {
  dialog = dialog + 1;
  if (dialog == 1) {
    setText("speechTextEgypt", "Anyways, you sure took your time getting here");
  } else if ((dialog == 2)) {
    setText("speechTextEgypt", "Sorry about that I was busy training");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 3)) {
    setText("speechTextEgypt", "Ah, I see. That's good since we're going to need all the strength we can get to defeat Dio");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 4)) {
    setText("speechTextEgypt", "We mustn't waste any time. Dio isn't at full power yet since he has just awoken from his 500 year slumber");
  } else if ((dialog == 5)) {
    setText("speechTextEgypt", "Do you know where the first gem is located?");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 6)) {
    setText("speechTextEgypt", "Yes. The gem that's located here in Egypt is called the gem of fire");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 7)) {
    setText("speechTextEgypt", "Follow me I'll lead the way");
  } else {
    setScreen("pyramidScreen");
  }
});
onEvent("speechTextEgypt", "click", function(event) {
  setText("speechTextEgypt", "Anyways, you sure took your time getting here");
  dialog = dialog + 1;
  if (dialog == 1) {
    setText("speechTextEgypt", "Anyways, you sure took your time getting here");
  } else if ((dialog == 2)) {
    setText("speechTextEgypt", "Sorry about that I was busy training");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 3)) {
    setText("speechTextEgypt", "Ah, I see. That's good since we're going to need all the strength we can get to defeat Dio");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 4)) {
    setText("speechTextEgypt", "We mustn't waste any time. Dio isn't at full power yet since he has just awoken from his 500 year slumber");
  } else if ((dialog == 5)) {
    setText("speechTextEgypt", "Do you know where the first gem is located?");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 6)) {
    setText("speechTextEgypt", "Yes. The gem that's located here in Egypt is called the gem of fire");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 7)) {
    setText("speechTextEgypt", "Follow me I'll lead the way");
  } else {
    setScreen("pyramidScreen");
  }
});
onEvent("iconEgypt", "click", function(event) {
  setText("speechTextEgypt", "Anyways, you sure took your time getting here");
  dialog = dialog + 1;
  if (dialog == 1) {
    setText("speechTextEgypt", "Anyways, you sure took your time getting here");
  } else if ((dialog == 2)) {
    setText("speechTextEgypt", "Sorry about that I was busy training");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 3)) {
    setText("speechTextEgypt", "Ah, I see. That's good since we're going to need all the strength we can get to defeat Dio");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 4)) {
    setText("speechTextEgypt", "We mustn't waste any time. Dio isn't at full power yet since he has just awoken from his 500 year slumber");
  } else if ((dialog == 5)) {
    setText("speechTextEgypt", "Do you know where the first gem is located?");
    setImageURL("iconEgypt", "avatar-image.png");
  } else if ((dialog == 6)) {
    setText("speechTextEgypt", "Yes. The gem that's located here in Egypt is called the gem of fire");
    setImageURL("iconEgypt", "avdolAvatar.png");
  } else if ((dialog == 7)) {
    setText("speechTextEgypt", "Follow me I'll lead the way");
  } else {
    setScreen("pyramidScreen");
  }
});
//Approaching the Pyramid
onEvent("attackSphinx", "click", function(event) {
  setScreen("pyramidBattle");
  hideElement("attackBattle");
  hideElement("retreat");
  showElement("enterBattle");
  showElement("continuePyramidBattle");
});
onEvent("approachSphinx", "click", function(event) {
  setScreen("riddle");
  showElement("riddleText");
  hideElement("otherOptions");
  hideElement("answerRidd");
  hideElement("riddWrong");
  hideElement("hint");
});
//Sphinx Battle
onEvent("continuePyramidBattle", "click", function(event) {
  showElement("attackBattle");
  showElement("retreat");
  hideElement("enterBattle");
  hideElement("continuePyramidBattle");
});
onEvent("pyramidBattle", "click", function(event) {
  showElement("attackBattle");
  showElement("retreat");
  hideElement("enterBattle");
  hideElement("continuePyramidBattle");
});
onEvent("enterBattle", "click", function(event) {
  showElement("attackBattle");
  showElement("retreat");
  hideElement("enterBattle");
  hideElement("continuePyramidBattle");
});
onEvent("attackBattle", "click", function(event) {
  if (strength >= 11) {
    setScreen("battleWIn");
  } else {
    setScreen("battleLose");
  }
});
onEvent("tryAgain", "click", function(event) {
  setScreen("pyramidBattle");
});
onEvent("retreat", "click", function(event) {
  setScreen("pyramidScreen");
});
onEvent("enterPyramid", "click", function(event) {
  hideElement("avodolPyramid2");
  hideElement("sudokuInsidePyramid");
  setScreen("insidePyramid");
});
//Approach Sphinx (Riddle)
var ridd = 0;
onEvent("clicktoContinueRidd", "click", function(event) {
  hideElement("clicktoContinueRidd");
  setText("riddleText", "What walks on 4 legs in the morning, 2 legs in the noon and 3 legs in the night?");
  showElement("answerRidd");
});
onEvent("sphinxRidd", "click", function(event) {
  hideElement("clicktoContinueRidd");
  setText("riddleText", "What walks on 4 legs in the morning, 2 legs in the noon and 3 legs in the night?");
  showElement("answerRidd");
});
onEvent("riddle", "click", function(event) {
  hideElement("clicktoContinueRidd");
  setText("riddleText", "What walks on 4 legs in the morning, 2 legs in the noon and 3 legs in the night?");
  showElement("answerRidd");
});
onEvent("answerRidd", "click", function(event) {
  var riddle = prompt("Enter your answer");
  if (riddle == "human") {
    setScreen("RiddRight");
  } else if ((riddle == "Human")) {
     setScreen("RiddRight");
  } else if ((riddle == "Man")) {
    setScreen("RiddRight");
  } else if ((riddle == "man")) {
    setScreen("RiddRight");
  } else {
    setText("riddWrong", "That wasn't the correct answer");
    hideElement("answerRidd");
    hideElement("riddleText");
    showElement("riddWrong");
    showElement("tryAgainRidd");
    showElement("hint");
    showElement("otherOptions");
  }
});
onEvent("clicktoContinueRiddRight", "click", function(event) {
  setScreen("insidePyramid");
  setText("insidePyraText", "Wow how did you know the answer was human?");
  hideElement("avodolPyramid2");
  hideElement("sudokuInsidePyramid");
  dialog2 = 3;
});
onEvent("RiddRight", "click", function(event) {
  setScreen("insidePyramid");
  setText("insidePyraText", "Wow how did you know the answer was human?");
  hideElement("avodolPyramid2");
  hideElement("sudokuInsidePyramid");
  dialog2 = 3;
});
onEvent("riddRightSphinx", "click", function(event) {
  setScreen("insidePyramid");
  setText("insidePyraText", "Wow how did you know the answer was human?");
  hideElement("avodolPyramid2");
  hideElement("sudokuInsidePyramid");
  dialog2 = 3;
});
onEvent("hint", "click", function(event) {
  setText("riddWrong", "It is a very smart animal");
});
onEvent("otherOptions", "click", function(event) {
  setScreen("pyramidScreen");
});
//Go around sphinx
onEvent("aroundSphinx", "click", function(event) {
  setScreen("aroundSphinxScreen");
});
onEvent("aroundSphinxContinue", "click", function(event) {
  setScreen("numSequence");
  hideElement("tryAgainNum");
  hideElement("hintNum");
});
onEvent("aroundSphinxText", "click", function(event) {
  setScreen("numSequence");
  hideElement("tryAgainNum");
  hideElement("hintNum");
});
onEvent("aroundSphinxScreen", "click", function(event) {
  setScreen("numSequence");
  hideElement("tryAgainNum");
  hideElement("hintNum");
  hideElement("otherOptionsNum");
});
onEvent("answerNum", "click", function(event) {
  var guess = promptNum("Enter a number");
  if (guess == 28) {
    setScreen("numSequenceCorrect");
  } else if ((guess >= 29 && guess <= 34)) {
    setText("numSequenceText", "Not quite. A little too high");
    hideElement("numSequenceText1");
    showElement("tryAgainNum");
    showElement("hintNum");
    showElement("otherOptionsNum");
    hideElement("answerNum");
  } else if ((guess <= 27 && guess >= 22)) {
    setText("numSequenceText", "Not quite. A little too low");
    showElement("tryAgainNum");
    showElement("hintNum");
    showElement("otherOptionsNum");
    hideElement("answerNum");
    hideElement("numSequenceText1");
  } else if ((guess > 35)) {
    setText("numSequenceText", "Too high");
    showElement("tryAgainNum");
    showElement("hintNum");
    showElement("otherOptionsNum");
    hideElement("answerNum");
    hideElement("numSequenceText1");
  } else if ((guess < 22)) {
    setText("numSequenceText", "Too low");
    showElement("tryAgainNum");
    showElement("hintNum");
    showElement("otherOptionsNum");
    hideElement("answerNum");
    hideElement("numSequenceText1");
  }
});
onEvent("tryAgainNum", "click", function(event) {
  showElement("answerNum");
  showElement("numSequenceText1");
  hideElement("tryAgainNum");
  hideElement("hintNum");
  hideElement("otherOptionsNum");
  setText("numSequenceText1", "What number follows next in the sequence?");
  setText("numSequenceText", "");
});
onEvent("hintNum", "click", function(event) {
  showElement("numSequenceText1");
  setText("numSequenceText1", "Think of the numbers sum");
  setText("numSequenceText", "");
});
onEvent("otherOptionsNum", "click", function(event) {
  setScreen("pyramidScreen");
  showElement("answerNum");
  showElement("numSequenceText1");
  hideElement("tryAgainNum");
  hideElement("hintNum");
  hideElement("otherOptionsNum");
  setText("numSequenceText1", "What number follows next in the sequence?");
  setText("numSequenceText", "");
});
onEvent("enterPyramidNum", "click", function(event) {
  setScreen("insidePyramid");
  setText("insidePyraText", "That was some pretty good thinking Joseph");
  hideElement("avodolPyramid2");
  hideElement("sudokuInsidePyramid");
  dialog2 = 1;
});
//Inside Pyramid
onEvent("clicktoConInsidePyra", "click", function(event) {
  dialog2 = dialog2 + 1;
  if (dialog2 == 1) {
    setText("insidePyraText", "Well I guess training does pay off pretty well");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 2)) {
    setText("insidePyraText", "The gem must be located in this Pyramid. We should try looking around");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
  } else if ((dialog2 == 3)) {
    setText("insidePyraText", "Hmm... looks like I found I puzzle. You should take a closer look");
    hideElement("avdolPyramid");
    hideElement("clicktoConInsidePyra");
    showElement("sudokuInsidePyramid");
    showElement("avodolPyramid2");
    dialog2 = 2;
  } else if ((dialog2 == 4)) {
    setText("insidePyraText", "I knew it because a human walks on 4 legs as a baby which represents morning,");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 5)) {
    setText("insidePyraText", " 2 legs as an adult which represents noon and 3 legs as an old person with a");
  } else if ((dialog2 == 6)) {
    setText("insidePyraText", "cane which represents night");
  } else if ((dialog2 == 7)) {
    setText("insidePyraText", "You're pretty smart Joseph");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
    dialog2 = 1;
  }
});
onEvent("insidePyraText", "click", function(event) {
  dialog2 = dialog2 + 1;
  if (dialog2 == 1) {
    setText("insidePyraText", "Well I guess training does pay off pretty well");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 2)) {
    setText("insidePyraText", "The gem must be located in this Pyramid. We should try looking around");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
  } else if ((dialog2 == 3)) {
    hideElement("avdolPyramid");
    hideElement("clicktoConInsidePyra");
    showElement("sudokuInsidePyramid");
    showElement("avodolPyramid2");
    setText("insidePyraText", "Hmm... looks like I found I puzzle. You should take a closer look");
    dialog2 = 2;
  } else if ((dialog2 == 4)) {
    setText("insidePyraText", "I knew it because a human walks on 4 legs as a baby which represents morning,");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 5)) {
    setText("insidePyraText", " 2 legs as an adult which represents noon and 3 legs as an old person with a");
  } else if ((dialog2 == 6)) {
    setText("insidePyraText", "cane which represents night");
    dialog2 = 1;
  } else if ((dialog2 == 7)) {
    setText("insidePyraText", "You're pretty smart Joseph");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
    dialog2 = 1;
  }
});
onEvent("insidePyraIcon", "click", function(event) {
  dialog2 = dialog2 + 1;
  if (dialog2 == 1) {
    setText("insidePyraText", "Well I guess training does pay off pretty well");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 2)) {
    setText("insidePyraText", "The gem must be located in this Pyramid. We should try looking around");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
  } else if ((dialog2 == 3)) {
    hideElement("avdolPyramid");
    hideElement("clicktoConInsidePyra");
    showElement("avodolPyramid2");
    showElement("sudokuInsidePyramid");
    setText("insidePyraText", "Hmm... looks like I found I puzzle. You should take a closer look");
    dialog2 = 2;
  } else if ((dialog2 == 4)) {
    setText("insidePyraText", "I knew it because a human walks on 4 legs as a baby which represents morning,");
    setImageURL("insidePyraIcon", "avatar-image.png");
  } else if ((dialog2 == 5)) {
    setText("insidePyraText", " 2 legs as an adult which represents noon and 3 legs as an old person with a");
  } else if ((dialog2 == 6)) {
    setText("insidePyraText", "cane which represents night");
    dialog2 = 1;
  } else if ((dialog2 == 7)) {
    setText("insidePyraText", "You're pretty smart Joseph");
    setImageURL("insidePyraIcon", "avdolAvatar.png");
    dialog2 = 1;
  }
});
onEvent("sudokuInsidePyramid", "click", function(event) {
  setScreen("sudoku");
});
//Sudoku
var a = 0;
var b = 0;
var c = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var l = 0;
var m = 0;
var o = 0;
var p = 0;
onEvent("a", "click", function(event) {
  a++;
  if (a > 4) {
    a = 1;
  }
  setImageURL("a", "b" + a + ".png");
});
onEvent("b", "click", function(event) {
  b++;
  if (b > 4) {
    b = 1;
  }
  setImageURL("b", ("b" + b) + ".png");
});
onEvent("c", "click", function(event) {
  c++;
  if (c > 4) {
    c = 1;
  }
  setImageURL("c", ("b" + c) + ".png");
});
onEvent("f", "click", function(event) {
  f++;
  if (f > 4) {
    f = 1;
  }
  setImageURL("f", ("b" + f) + ".png");
});
onEvent("g", "click", function(event) {
  g++;
  if (g > 4) {
    g = 1;
  }
  setImageURL("g", ("b" + g) + ".png");
});
onEvent("h", "click", function(event) {
  h++;
  if (h > 4) {
    h = 1;
  }
  setImageURL("h", ("b" + h) + ".png");
});
onEvent("i", "click", function(event) {
  i++;
  if (i > 4) {
    i = 1;
  }
  setImageURL("i", ("b" + i) + ".png");
});
onEvent("l", "click", function(event) {
  l++;
  if (l > 4) {
    l = 1;
  }
  setImageURL("l", ("b" + l) + ".png");
});
onEvent("m", "click", function(event) {
  m++;
  if (m > 4) {
    m = 1;
  }
  setImageURL("m", ("b" + m) + ".png");
});
onEvent("o", "click", function(event) {
  o++;
  if (o > 4) {
    o = 1;
  }
  setImageURL("o", ("b" + o) + ".png");
});
onEvent("p", "click", function(event) {
  p++;
  if (p > 4) {
    p = 1;
  }
  setImageURL("p", ("b" + p) + ".png");
});

onEvent("check", "click", function(event) {
  var done = 0;
  if (a == 4) {
    done++;
    setImageURL("a", "c4.png");
  }
  if (b == 3) {
    done++;
    setImageURL("b", "c3.png");
  }
  if (c == 2) {
    done++;
    setImageURL("c", "c2.png");
  }
  if (f == 4) {
    done++;
    setImageURL("f", "c4.png");
  }
  if (g == 1) {
    done++;
    setImageURL("g", "c1.png");
  }
  if (h == 2) {
    done++;
    setImageURL("h", "c2.png");
  }
  if (i == 2) {
    done++;
    setImageURL("i", "c2.png");
  }
  if (l == 3) {
    done++;
    setImageURL("l", "c3.png");
  }
  if (m == 1) {
    done++;
    setImageURL("m", "c1.png");
  }
  if (o == 3) {
    done++;
    setImageURL("o", "c3.png");
  }
  if (p == 4) {
    setImageURL("p", "c4.png");
    done++;
  }
  if (done == 11) {
    setScreen("sudokuCompletion");
  }
});
onEvent("sudokuCompletion", "click", function(event) {
  setScreen("egyptTreasureRoom");
  hideElement("treasroomText");
  hideElement("redgem1");
  hideElement("clicktoConTreas");
});
onEvent("continueSudoComple", "click", function(event) {
  setScreen("egyptTreasureRoom");
  hideElement("treasroomText");
  hideElement("redgem1");
  hideElement("clicktoConTreas");
});
onEvent("sudokuCompletionFirework", "click", function(event) {
  setScreen("egyptTreasureRoom");
  hideElement("treasroomText");
  hideElement("redgem1");
  hideElement("clicktoConTreas");
});
onEvent("sudokucompleText", "click", function(event) {
  setScreen("egyptTreasureRoom");
  hideElement("treasroomText");
  hideElement("redgem1");
  hideElement("clicktoConTreas");
});
onEvent("redgem", "click", function(event) {
  hideElement("redgem");
  showElement("treasroomText");
  showElement("redgem1");
  showElement("clicktoConTreas");
});
onEvent("redgem1", "click", function(event) {
  setScreen("egyptEnd");
});
onEvent("clicktoConTreas", "click", function(event) {
  setScreen("egyptEnd");
});
var dialog3 = 0;
onEvent("egyptEndText", "click", function(event) {
  dialog3 = dialog3 + 1;
  if (dialog3 == 1) {
    setText("egyptEndText", "Do you have an idea of where any other gems may be located?");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 2)) {
    setText("egyptEndText", "I've heard rumours that the gem of water is located in Fiji");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 3)) {
    setText("egyptEndText", "Unfortunately I won't be albe to come to Fiji with you since Dio has sent his henchmen to look for the gems");
  } else if ((dialog3 == 4)) {
    setText("egyptEndText", "I'll be busy searching for his henchman to make sure they don't reach the gems before you do");
  } else if ((dialog3 == 5)) {
    setText("egyptEndText", "I guess this is where we part ways Avdol. Thanks for all your help");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 6)) {
    setText("egyptEndText", "No problem Joseph. It was fun travling with you. Good luck on your journey to defeat Dio");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 7)) {
    setScreen("airplane");
  }
});
onEvent("clickToConEgyptEnd", "click", function(event) {
  dialog3 = dialog3 + 1;
  if (dialog3 == 1) {
    setText("egyptEndText", "Do you have an idea of where any other gems may be located?");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 2)) {
    setText("egyptEndText", "I've heard rumours that the gem of water is located in Fiji");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 3)) {
    setText("egyptEndText", "Unfortunately I won't be albe to come to Fiji with you since Dio has sent his henchmen to look for the gems");
  } else if ((dialog3 == 4)) {
    setText("egyptEndText", "I'll be busy searching for his henchman to make sure they don't reach the gems before you do");
  } else if ((dialog3 == 5)) {
    setText("egyptEndText", "I guess this is where we part ways Avdol. Thanks for all your help");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 6)) {
    setText("egyptEndText", "No problem Joseph. It was fun travling with you. Good luck on your journey to defeat Dio");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 7)) {
    setScreen("airplane");
  }
});
onEvent("egyptEndIcon", "click", function(event) {
  dialog3 = dialog3 + 1;
  if (dialog3 == 1) {
    setText("egyptEndText", "Do you have an idea of where any other gems may be located?");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 2)) {
    setText("egyptEndText", "I've heard rumours that the gem of water is located in Fiji");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 3)) {
    setText("egyptEndText", "Unfortunately I won't be albe to come to Fiji with you since Dio has sent his henchmen to look for the gems");
  } else if ((dialog3 == 4)) {
    setText("egyptEndText", "I'll be busy searching for his henchman to make sure they don't reach the gems before you do");
  } else if ((dialog3 == 5)) {
    setText("egyptEndText", "I guess this is where we part ways Avdol. Thanks for all your help");
    setImageURL("egyptEndIcon", "avatar-image.png");
  } else if ((dialog3 == 6)) {
    setText("egyptEndText", "No problem Joseph. It was fun travling with you. Good luck on your journey to defeat Dio");
    setImageURL("egyptEndIcon", "avdolAvatar.png");
  } else if ((dialog3 == 7)) {
    setScreen("airplane");
  }
});
onEvent("airplane", "click", function(event) {
  setScreen("KenKen");
});
onEvent("clicktoconAir", "click", function(event) {
  setScreen("KenKen");
});
//KenKen
function win() {
 if(getNumber("a1")==2 && getNumber("b1")==1 && getNumber("c1")==3 &&
 getNumber("d1")==3 && getNumber("e1")==2 && getNumber("f1")==1 &&
 getNumber("g1")==1 && getNumber("h1")==3 && getNumber ("i1")==2)
 (setScreen("KenKenWin"))
}

onEvent("a1", "click", function(event){
  var k = getNumber("a1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("a1",k);
  win();
});

onEvent("b1", "click", function(event){
  var k = getNumber("b1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("b1",k);
  win();
});

onEvent("c1", "click", function(event){
  var k = getNumber("c1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("c1",k);
  win();
});

onEvent("d1", "click", function(event){
  var k = getNumber("d1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("d1",k);
  win();
});

onEvent("e1", "click", function(event){
  var k = getNumber("e1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("e1",k);
  win();
});

onEvent("f1", "click", function(event){
  var k = getNumber("f1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("f1",k);
  win();
});

onEvent("g1", "click", function(event){
  var k = getNumber("g1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("g1",k);
  win();
});

onEvent("h1", "click", function(event){
  var k = getNumber("h1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("h1",k);
  win();
});

onEvent("i1", "click", function(event){
  var k = getNumber("i1");
  k += 1;
  if(k>3){
    k = 1;
  }
  setText("i1",k);
  win();
});
onEvent("Hint", "click", function(event) {
  if ("b1" != 1) {
    setText("b1", "1");
  }
  if ("e1" != 2) {
    setText("e1", "2");
  }
  if ("i1" != 2) {
    setText("i1", "2");
  }
});
//Fiji
onEvent("clicktoconKen", "click", function(event) {
  setScreen("Fiji");
});
onEvent("KenKenWin", "click", function(event) {
  setScreen("Fiji");
});
onEvent("fijiImage", "click", function(event) {
  setScreen("fijiHouse");
  hideElement("jonathan");
  hideElement("joseph1");
  hideElement("joseph3");
});
var dialog4 = 0;
onEvent("fijiHouse", "click", function(event) {
  dialog4 = dialog4 + 1;
  showElement("joseph1");
  hideElement("joseph");
  setText("fijiHouseText", "*knock* *knock* *kock*");
  if (dialog4 == 2) {
    showElement("joseph3");
    showElement("jonathan");
    hideElement("joseph1");
    setText("fijiHouseText", "Well hello there kid. My name is Jonathan. Ya lost or something?");
    setImageURL("fijiIcon", "josephOld.png");
  } else if ((dialog4 == 3)) {
    hideElement("joseph1");
    setText("fijiHouseText", "My name is Joseph and I'm here in search of a water gem");
    setImageURL("fijiIcon", "avatar-image.png");
  } else if ((dialog4 == 4)) {
    hideElement("joseph1");
    setText("fijiHouseText", "So you're looking for water gem eh? I may have what you're looking for but I'm willing to give it for free");
    setImageURL("fijiIcon", "josephOld.png");
  } else if ((dialog4 == 5)) {
    hideElement("joseph1");
    setText("fijiHouseText", "If you manage to find and catch me 10 exotic golden fish I'll give you the gem");
  } else if ((dialog4 == 6)) {
    hideElement("joseph1");
    setText("fijiHouseText", "Ok you have a deal old man");
    setImageURL("fijiIcon", "avatar-image.png");
  } else if ((dialog4 == 7)) {
    setScreen("lake");
  }
});
onEvent("lake", "click", function(event) {
  setScreen("fishGame");
  hideElement("totalFish");
  hideElement("goldfish");
  hideElement("greyfish");
  hideElement("time2");
  setScreen("fishGame");
});
onEvent("lakeText", "click", function(event) {
  setScreen("fishGame");
  hideElement("totalFish");
  hideElement("goldfish");
  hideElement("greyfish");
  hideElement("time2");
  setScreen("fishGame");
});
onEvent("clicktoconLake", "click", function(event) {
  hideElement("totalFish");
  hideElement("goldfish");
  hideElement("greyfish");
  hideElement("time2");
  setScreen("fishGame");
});
//Fish Catching Game
var time2 = 30;
//Variables to set position
var aX = 300;
var aY = 32;
var bX = 300;
var bY = 160;
var cX = 300;
var cY = 270;
//Varibles to generate image and keep count of fish
var randA = randomNumber(1, 3);
var randB = randomNumber(1, 3);
var randC = randomNumber(1, 2);
var greyfish = 0;
var goldfish = 0;
var fishcount = 0;
onEvent("startFish", "click", function(event) {
  showElement("fishA");
  showElement("fishB");
  showElement("fishC");
  showElement("time2");
  showElement("greyfish");
  showElement("totalFish");
  showElement("goldfish");
  hideElement("startFish");
  hideElement("fishGameInstruc");
  hideElement("fishGameTitle");
 timedLoop(1000, function() {
    time2 = time2 - 1;
    setText("time2", "Time: " + time2);
    if (time2 <= 0) {
      setScreen("fishEndLose");
      setText("fishLoseText", "You ran out of time!");
    }
  });
  setInterval(function() {
  if (randA == 1) {
    setImageURL("fishA", "goldFish.png");
  } else {
    setImageURL("fishA", "greyFish.v3.png");
  }
  aX = aX - 3;
  setPosition("fishA", aX, aY, 100, 100);
  if (aX <= -60) {
    aX = 300;
    setPosition("fishA", aX, aY, 100, 100);
    showElement("fishA");
    randA = randomNumber(1, 3);
  }
  }, 15);
  setInterval(function() {
  if (randB == 1) {
    setImageURL("fishB", "goldFish.png");
  } else {
    setImageURL("fishB", "greyFish.v3.png");
  }
  bX = bX - 3;
  setPosition("fishB", bX, bY, 100, 100);
  if (bX <= -60) {
    bX = 300;
    setPosition("fishB", bX, bY, 100, 100);
    showElement("fishB");
    randB = randomNumber(1, 3);
  }
  }, 15);
  setInterval(function() {
    if (randC == 1) {
      setImageURL("fishC", "goldFish.png");
    } else {
      setImageURL("fishC", "greyFish.v3.png");
    }
    cX = cX - 3;
    setPosition("fishC", cX, cY, 100, 100);
    if (cX <= -60) {
      cX = 300;
      setPosition("fishC", cX, cY, 100, 100);
      showElement("fishC");
      randC = randomNumber(1, 2);
    }
  }, 10);
  onEvent("fishA", "click", function(event) {
    hideElement("fishA");
    if (randA == 1) {
      goldfish = goldfish + 1;
      fishcount++;
      setText("goldfish", "Goldfish caught: " + goldfish);
    } else {
      greyfish = greyfish + 1;
      fishcount++;
      setText("greyfish", "Grey Fish caught: " + greyfish);
    }
    setText("totalFish", "Total Fish Caught: " + fishcount);
    if (fishcount == 13 && goldfish < 10) {
      setScreen("fishEndLose");
      stopTimedLoop();
    } else if ((fishcount == 13 && goldfish >= 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    } else if ((goldfish == 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    }
  });
  });
onEvent("fishB", "click", function(event) {
    hideElement("fishB");
    if (randB == 1) {
      goldfish = goldfish + 1;
      fishcount++;
      setText("totalFish", "Total Fish Caught: " + fishcount);
      setText("goldfish", "Goldfish caught: " + goldfish);
    } else {
      greyfish = greyfish + 1;
      fishcount++;
      setText("greyfish", "Grey Fish caught: " + greyfish);
    }
    setText("totalFish", "Total Fish Caught: " + fishcount);
    if (fishcount == 13 && goldfish < 10) {
      setScreen("fishEndLose");
      stopTimedLoop();
    } else if ((fishcount == 13 && goldfish >= 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    } else if ((goldfish == 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    }
  });
onEvent("fishC", "click", function(event) {
    hideElement("fishC");
    if (randC == 1) {
      goldfish = goldfish + 1;
      fishcount++;
      setText("totalFish", "Total Fish Caught: " + fishcount);
      setText("goldfish", "Goldfish caught: " + goldfish);
    } else {
      greyfish = greyfish + 1;
      fishcount++;
      setText("greyfish", "Grey Fish caught: " + greyfish);
    }
    setText("totalFish", "Total Fish Caught: " + fishcount);
    if (fishcount == 13 && goldfish < 10) {
      setScreen("fishEndLose");
      stopTimedLoop();
    } else if ((fishcount == 13 && goldfish >= 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    } else if ((goldfish == 10)) {
      setScreen("fishEndWin");
      stopTimedLoop();
    }
});
onEvent("tryAgainFish", "click", function(event) {
  setScreen("fishGame");
  hideElement("greyfish");
  hideElement("goldfish");
  hideElement("totalFish");
  hideElement("time2");
  hideElement("fishA");
  hideElement("fishB");
  hideElement("fishC");
  showElement("startFish");
  showElement("fishGameInstruc");
  fishcount = 0;
  goldfish = 0;
  greyfish = 0;
  time2 = 30;
  stopTimedLoop();
});
onEvent("fishEndWin", "click", function(event) {
  setScreen("fijiHouseEnd");
  setText("fijiHouseText1", "I've brought back the 10 exotic golden fish that you wanted");
  hideElement("waterGem");
});
var dialog5 = 0;
onEvent("fijiHouseImage", "click", function(event) {
  dialog5 = dialog5 + 1;
  if (dialog5 == 1) {
    setText("fijiHouseText1", "Well a deal is a deal so here is the gem of water like I promised");
    setImageURL("fijiIcon1", "josephOld.png");
    showElement("waterGem");
  } else if ((dialog5 == 2)) {
    setText("fijiHouseText1", "Thanks for your help.");
    setImageURL("fijiIcon1", "avatar-image.png");
    hideElement("waterGem");
  } else if ((dialog5 == 3)) {
    setText("fijiHouseText1", "I'm assuming your looking for the fire gem and the gem of nature right?");
    setImageURL("fijiIcon1", "josephOld.png");
  } else if ((dialog5 == 4)) {
    setText("fijiHouseText1", "I already have the fire gem, but how did you know I was searching for the other gem?");
    setImageURL("fijiIcon1", "avatar-image.png");
  } else if ((dialog5 == 5)) {
    setText("fijiHouseText1", "There's an old legend that says if you have possesion of all 3 gems you will be able to activate a hidden");
    setImageURL("fijiIcon1", "josephOld.png");
  } else if ((dialog5 == 6)) {
    setText("fijiHouseText1", "power. I don't know what you'll need this power for but I know it's not evil since you seem like a good");
  } else if ((dialog5 == 7)) {
    setText("fijiHouseText1", "guy. I'll show you a picture of the person who has the last gem");
  } else if ((dialog5 == 8)) {
    setScreen("picture");
  } else if ((dialog5 == 9)) {
    setText("fijiHouseText1", "Thanks for your help. I'll be on my way to Mexico now");
  } else if ((dialog5 == 10)) {
    setScreen("ship");
  }
});
onEvent("clicktoConPicture", "click", function(event) {
  setScreen("fijiHouseEnd");
  setText("fijiHouseText1", "His name is Karlos. Right now he's in Mexico. I'm sure you can make some kind of deal with him");
});
onEvent("picture", "click", function(event) {
  setScreen("fijiHouseEnd");
  setText("fijiHouseText1", "His name is Karlos. Right now he's in Mexico. I'm sure you can make some kind of deal with him");
});
onEvent("ship", "click", function(event) {
  setScreen("math");
  hideElement("math2");
  hideElement("clicktoconMath");
});
//Math Questions
var math = 0;
onEvent("answerMath", "click", function(event) {
  var ans = promptNum("Enter the answer");
  if (ans == 5 && math == 1) {
    setText("mathText", "Correct answer");
    hideElement("math2");
    hideElement("answerMath");
    showElement("clicktoconMath");
    math = 2;
  } else if ((ans != 5 && math == 1)) {
    setText("mathText", "Incorrect answer. Try again");
  }
  if (ans == 0 && math == 0) {
    setText("mathText", "Correct answer");
    hideElement("math1");
    showElement("math2");
    math = math + 1;
  } else if ((ans != 0 && math == 0)) {
    setText("mathText", "Incorrect answer. Try again");
  }
});
onEvent("clicktoconMath", "click", function(event) {
  if (math == 2) {
    setScreen("mexico");
  }
});
onEvent("mexico", "click", function(event) {
  setScreen("cafe");
  hideElement("cafeIcon");
  hideElement("phone");
  hideElement("greenGem");
});
onEvent("mexicoText", "click", function(event) {
  setScreen("cafe");
  hideElement("cafeIcon");
  hideElement("phone");
  hideElement("greenGem");
});
onEvent("mexicoBub", "click", function(event) {
  setScreen("cafe");
  hideElement("cafeIcon");
  hideElement("phone");
  hideElement("greenGem");
});
onEvent("mexicoCon", "click", function(event) {
  setScreen("cafe");
  hideElement("cafeIcon");
  hideElement("phone");
  hideElement("greenGem");
});
var dialog6 = 0;
onEvent("cafeImage", "click", function( ) {
  dialog6 = dialog6 + 1;
  showElement("cafeIcon");
  setText("cafeText", "Hello, I've come in search of the gem of nature and heard that you have it ");
  if (dialog6 == 2) {
    setText("cafeText", "Hola amigo. Yes you indeed heard right, I do have the gem of nautre. I'm willing to give it to you,");
    setImageURL("cafeIcon", "kakyionPixelIcon.png");
  } else if ((dialog6 == 3)) {
    setText("cafeText", "that is only if you manage to beat me in a guessing game");
  } else if ((dialog6 == 4)) {
    setScreen("GuessingGame");
    hideElement("again");
    hideElement("clicktoconGuess");
  } else if ((dialog6 == 5)) {
    setText("cafeText", "Here's the gem of nature like I promised");
    showElement("greenGem");
  } else if ((dialog6 == 6)) {
    setImageURL("cafeIcon", "avatar-image.png");
    setText("cafeText", "Thanks for your-");
    hideElement("greenGem");
  } else if ((dialog6 == 7)) {
    setText("cafeText", "*ring* *ring* *ring*");
  } else if ((dialog6 == 8)) {
    showElement("phone");
    setText("cafeText", "Hello who's this?");
  } else if ((dialog6 == 9)) {
    setImageURL("cafeIcon", "avdolAvatar.png");
    setText("cafeText", "Joesph! It's me Avdol. I have some important information");
  } else if ((dialog6 == 10)) {
    setText("cafeText", "How did you get my phone number? I don't remember giving it you");
    setImageURL("cafeIcon", "avatar-image.png");
  } else if ((dialog6 == 11)) {
    setImageURL("cafeIcon", "avdolAvatar.png");
    setText("cafeText", "Nevermind that, I just interrogated one of Dio's henchmen and found out where Dio is hiding");
  } else if ((dialog6 == 12)) {
    setText("cafeText", "He's hiding in a temple in the Lacandon Jungle in Mexico");
  } else if ((dialog6 == 13)) {
     setText("cafeText", "Thanks for the info. I'll be heading there right away");
     setImageURL("cafeIcon", "avatar-image.png");
  } else if ((dialog6 == 14)) {
    setScreen("jungle");
  }
});
//Guessing Game
var secret = randomNumber(1, 100);
var num = 0;
var check = 0;
onEvent("Guess", "click", function( ) {
  var guess = promptNum("Enter a value");
  num = num + 1;
  setText("count", num + " Guesses");
  if (guess == secret) {
    setText("result1", "You got it!");
    hideElement("Guess");
    showElement("clicktoconGuess");
    check = 1;
  } else if ((guess > secret)) {
    setText("result1", "Too High");
  } else {
    setText("result1", "Too low");
  }
  if (num == 8 && guess != secret) {
    showElement("again");
    setText("result1", "You went over 8 guesses!");
    hideElement("Guess");
  }
});
onEvent("again", "click", function(event) {
  secret = randomNumber(1, 100);
  setText("result1", "Click 'guess to guess'");
  var num = 0;
  setText("count", "0 Guesses");
  showElement("Guess");
  hideElement("again");
});
onEvent("clicktoconGuess", "click", function(event) {
  setScreen("cafe");
  setText("cafeText", "Wow you're really good at guessing");
});
onEvent("templeImage", "click", function(event) {
  setScreen("insideTemple");
});
var dialog7 = 0;
onEvent("templeText", "click", function(event) {
  dialog7 = dialog7 + 1;
  setText("templeText", "Heh, we'll see about that");
  setImageURL("templeIcon", "avatar-image.png");
  if (dialog7 == 3) {
    setScreen("finalBattle");
  }
});
onEvent("insideTemple", "click", function(event) {
  dialog7 = dialog7 + 1;
  setText("templeText", "Heh, we'll see about that");
  setImageURL("templeIcon", "avatar-image.png");
  if (dialog7 == 3) {
    setScreen("finalBattle");
    hideElement("clicktoconFinal");
  }
});
//Final Battle
var DioHP = 30;
var JosephHP = 30;
var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
onEvent("radio_button1", "click", function(event) {
  choice1 = 1;
  choice2 = 0;
  choice3 = 0;
});
onEvent("radio_button2", "click", function(event) {
  choice1 = 0;
  choice2 = 1;
  choice3 = 0;
});
onEvent("radio_button3", "click", function(event) {
  choice1 = 0;
  choice2 = 0;
  choice3 = 1;
});
onEvent("confirm", "click", function(event){
  var x = randomNumber(1, 4);
  var lossDio = randomNumber(8, 12);
  var loss = randomNumber(2, 6);
  if (choice1 == 1) {
    setImageURL("josephBattle", "jotaroWithStand-removebg-preview.png");
    setText("result", "You summon your spirit ghost");
    hideElement("gemPower");
    hideElement("radio_button1");
    setText("punch", "Spirit Punch");
    setText("kick", "Spirit Kick");
    JosephHP = 50;
  } else if (x != 4 && choice2 == 1 || choice3 == 1) {
    setText("result", ("Dio was hit, lost " + lossDio) + " HP.");
    DioHP = DioHP - lossDio;
    setText("DioHP", DioHP);
  }
  if (x == 4 && choice1 != 1){
    setText("result", ("Joseph was hit, lost " + loss) + " HP.");
    JosephHP = JosephHP - loss;
    setText("JosephHP", JosephHP);
  }
  if (DioHP <= 0){
    setText("result", "You defeated Dio!");
    hideElement("diohealth");
    hideElement("dio");
    hideElement("dioName");
    hideElement("DioHP");
    showElement("clicktoconFinal");
  }
});
onEvent("clicktoconFinal", "click", function(event) {
  setScreen("gameEnd");
});
onEvent("playAgain", "click", function(event) {
  DioHP = 30;
  JosephHP = 30;
  strength = 0;
  fishcount = 0;
  goldfish = 0;
  fishcount = 0;
  greyfish = 0;
  time = 20;
  time2 = 30;
  gem = 0;
  math = 0;
  dialog = 0;
  dialog2 = 0;
  dialog3 = 0;
  dialog4 = 0;
  dialog5 = 0;
  dialog6 = 0;
  dialog7 = 0;
  setScreen("openingScreen");
});

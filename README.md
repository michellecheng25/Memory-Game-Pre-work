# Pre-work - **DO-RE-MI Memory Game**

**DO-RE-MI Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Michelle Cheng**

Time spent: **5** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game buttons each play a musical note from the chromatic scale.
- [x] HTML elemenents change based on user interactions (The text under the Start! button changes!)

## Video Walkthrough

- Win using a sequence of 3 random notes. (sequence of 3 for the sake of gif file size):
![](https://i.imgur.com/G50afcw.gif)

- Lose after 3 strikes.
![](https://i.imgur.com/E3ffISr.gif)

GIF created with [ezgif](https://ezgif.com/).

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  - w3schools.com
  - stackoverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  I took a computer science class in high school where I learned HTML and CSS and created a rudimentary website, so I am familiar with the basics of creating a webpage. However, the website I created did not have interactive/dynamic elements, so I did not use JavaScript. The first challenge I encountered was learning JavaScript. I am not too familiar with JavaScript as I mostly code in C++ and Python, but since JavaScript is similar to other high-level programming languages, it took me a short time to familiarize myself with it.

  Another difficulty I encountered was interpreting the functions of some of the script.js code. The snippet of code I had the most difficulty interpreting were the functions that played the tones since I am not familiar with the built-in JavaScript library Audio Context. 

  I also encountered some challenges when trying to add additional features. Sometimes adding certain features would break other parts of my project and I would not know why. I would have to backtrack to find out what I did wrong. In addition, I had an idea to make each button interact like a piano key, but I did not know how to implement that kind of design. Where would I go to find audio and image assets? I was afraid to download any assets I found online because I was not sure whether those sites could be trusted. I did not want to accidentally download malware.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  The main questions I have after completing this submission is how would I implement the back end. If I wanted to store specific sequences of notes such as notes from famous music pieces, how would I implement that? I imagine I might have to use a database, but how would I add a database? How would I connect the front-end and the back end? How can I also implement a scoreboard that keeps track of usernames and scores?

  Another question I have is how can I create and connect multiple pages in my website? The current website I have now is simple and does not offer the users much. I would like to create other webpages that users can check out.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had a few more hours to work on this project, I would make my website an educational website for beginners learning the piano. I would design the buttons to look like piano keys and when the user clicks each button/key, the corresponding piano note would play.

  I would also give the user the opportunity to play a selection of simple piano pieces. Furthermore, I would like to add a scoreboard to keep track of the user’s highest score. However, to add these two features I would need a database and I do not yet know how to add a database.

  I would also add more webpages. One page would have the piano keys, another would have a selection of piano pieces, and the last would have a scoreboard. I would also like to implement a feature that allows the user to create an account and log in. 




## License

    Copyright [Michelle Cheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
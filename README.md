# Test Driven Development Practice

#### By _**Eliot Gronstal, Vera Weikel**_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_

## Description

Webpage to enter favorite things and practice arrays. 

Describe: wordCounter()

<!-- First Test -->
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- //Second Test -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

<!-- Third Test -->
Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

<!-- Fourth Test -->
Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

<!-- Fifth Test -->
Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

<!-- new describe() block-->
Describe: numberOfOccurrencesInText()

<!-- first test -->
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- second test -->
Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

<!-- third test -->
Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- fourth test -->
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

<!-- fifth test -->
Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

<!-- sixth test -->
Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: omitOffence()

<!-- first test -->
Test: "It should return 1 if it has a string."
Code:
const text = "intake";
omitOffence(text);
Expected Output: 1

<!-- second test -->
Test: "It should return 0 occurences of a word for an empty string."
Code:
const textphrase = "";
const text = "intake";
omitOffence(textphrase, text);
Expected Output: 0



## Setup/Installation Requirements

* _Open a terminal console on your personal computer_
* _Navigate to your Desktop_
* _Type $ git clone the [repo]( https://github.com/QuietEvolver/test-driven-development-23.git)_
* _Navigate into the repo once cloned_
* _Once in the repository folder, open index.html in browser of choice._

## Known Bugs

* _No known bugs at this time._

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023_ _Eliot Gronstal, Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
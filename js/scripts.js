// Business Logic

/* test 1 if true, will return 1;
function wordCounter(word){
  return 1;
}
*/

/* test 2: added counter with .forEach() and will increment each time it's true;
function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}*/

// passes 3 tests: will return 0 if there is no input (err handling)
/* function wordCounter(text) {
  if(text.length === 0){
    return 0;
  }  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}*/

// test 4: will .trim() unecessary white spaces
// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(word) {
//     wordCount++;
//   });
//   return wordCount;
// }

// Test 5: built-in JavaScript Number() fx returns a number or NaN; if (NaN), we will increment our wordCount
function wordCounter(text) {
  if(text.trim().length === 0){
    return 0;
  }  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if( !Number(element) ){
      wordCount++;
    }
  });
  return wordCount;
}

//Writing and Testing a Second Function for Text Analyzer

// how many times a word occurs in an empty string, should be 0 no matter what. 
/*function numberOfOccurrencesInText(word, text) {
  return 0;
}*/

// if the inputs are equal (covers test 2 & 3 (if inputs are diff))
/*function numberOfOccurrencesInText(word, text){
  if (word === text){
    return 1; 
  }
  return 0;
}*/

// count occurrences
/*function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element){
    if(word === element){
      wordCount++;
    }
  });
    return wordCount;
}*/

// test 5: count++ word match regardless of case
/*function numberOfOccurrencesInText(word, text){
  const textArray = text.split(" ");
  let wordCount = 0;
  let xParam = (function(element){
    if(word.toLowerCase() === element.toLowerCase()){
      wordCount++;
    }
  });

  textArray.forEach(xParam);
    return wordCount;
}
*/

// .includes(t/f) return a word match regardless of punctuation. 
function numberOfOccurrencesInText(word, text) {
  // err handles blank word entry on DOM
  if(word.trim().length === 0){
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element){
    if(element.toLowerCase().includes(word.toLowerCase())){
      wordCount++;
    }
  });
  return wordCount;
}

// Writing and Testing a THIRD Function to omit offensive words

// Test 1//
/* function omitOffence (text) {
  return 1;
}*/

// test 2: empty string
/*function omitOffence(textphrase, text) {
  return 0;
};*/

//Test 3//
// Function is the same as Test 2, but we've updated the variables and parameters.

/*function omitOffence(textphrase, text) {
  return 0;
};*/

//Test 4//
/*function omitOffence(textphrase, text) {
  if (textphrase === text) {
    return 1;
  }
  return 0;
};*/

//Test 5//return the number of occurrences of a word
/*function omitOffence(text, textphrase) {
  const textArray = textphrase.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (text === element) {
      wordCount++
    }
  });
  return wordCount;
}*/

// sixth: return the number of occurrences of a word regardless of letter case
/*function omitOffence(text, textphrase){
  const textphraseArray = textphrase.split(" ");
  let wordCount = 0; 
  textphraseArray.forEach(function(element) {
    if(text.toLowerCase() === element.toLowerCase()){
      wordCount++;
    }
  });
  return wordCount;
}*/

// seventh Test: "It should return a word match regardless of punctuation.

// function omitOffence(text, textphrase) {
//   const textphraseArray = textphrase.split(" ");
//   let wordCount = 0; 
//   textphraseArray.forEach(function(element) {
//     if (element.toLowerCase().includes(text.toLowerCase())) {
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

// eighth Test:
/*function omitOffence(textphrase, text) {
  return 1;
};*/

// ninth test: non-fxnl TIP: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
function omitOffence(text, textphrase) {
  const textphraseArray = textphrase.split(" ");
  // const omitArray = [ "zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const displayArray = [];
  // let wordCount = 0; 
  /*stack ovflw = works.  
  let indexedOmitWord = omitArray.indexOf("zoinks"); // want to pass in every index of omitArray in a loop
  console.log("indexedOmitWord: ", indexedOmitWord);
  const index = omitArray.indexOf("zoinks");
     if((index > -1)) { // only splice array when item is found
      array.splice(index, 2); // 2nd parameter means remove one item only
    } 
    console.log(omitArray);
  });
  */    
  textphraseArray.forEach(function(element) {
    if (element.toLowerCase().includes(!("zoinks").toLowerCase() || !("muppeteer").toLowerCase() || !("biffaroni").toLowerCase() || !("loopdaloop").toLowerCase()) )
    { 
      displayArray.push(element);
    } else { console.log("No bad words"); }

    console.log("Display arr: ", displayArray);
    return displayArray.join();
  });
}  

// Writing and Testing a FOURTH Function to bold a passage()
// passes test one if no txt entered
/*function boldPassage(word, text){
  if((text.trim().length === 0) || (text.trim().length === 0)){  
    return null;
  }
}*/
// test2 if mismached words, return in <p>tag
/*function boldPassage(word, text){
  if((word.trim().length === 0) || (word.trim().length === 0)){
    return null;
  }
  const p = document.createElement("p");
  p.append(text);
  return p;
}*/
// test 3: return matching words in <strong>tag
/*function boldPassage(word, text){
  if((word.trim().length === 0) || (text.trim().length === 0)){
    return null;
  }
  const p  = document.createElement("p");
  if(word === text){
    const bold = document.createElement("strong");
    bold.append(text);
    p.append(bold);
  } else {
    p.append(text);
  }
  return p;
}*/
// text 4: return matching <strong> words, if not return others in <p>
/*function boldPassage(word, text)  {
  if((word.trim().length === 0) || (text.trim().length === 0)){
    return null;
  }

  const p = document.createElement("p");
  let textArray = text.split(" ");
  
  textArray.forEach( (element) => {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    p.append(" ");
  });
  return p; 
}*/
// FX4:TEST4 CON'T: BUGFIX: adds current index positioing to loop
function boldPassage(word, text){
  if((word.trim().length === 0) || (text.trim().length)){
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach((element, index)=>{
    if(word === text){
      const bold = document.createElement("strong");
      bold.append(element);
    } else {
      p.append(element);
    }
    if(index !== (textArray.length - 1)){
      p.append(" ");
    }
  });
  return p;
}
// UI LOGIC

function handleFormSubmission(event){
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  console.log("psg, wd, wCt, occOfWd: ", passage, word, wordCount, occurrencesOfWord);
  
  document.getElementById("total-count").innterText = wordCount;
  // document.querySelector("span#total-count").innterText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", () => {
  let form = document.querySelector("form#word-counter");
  form.addEventListener("submit", handleFormSubmission);
});
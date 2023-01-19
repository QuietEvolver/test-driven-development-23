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
// function wordCounter(text) {
//   if(text.trim().length === 0){
//     return 0;
//   }  
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if( !Number(element) ){
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

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
// function numberOfOccurrencesInText(word, text) {
//   const textArray = text.split(" ");
//   let wordCount = 0;
//   textArray.forEach(function(element){
//     if(element.toLowerCase().includes(word.toLowerCase())){
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

// Writing and Testing a Second Function to omit offensive words

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
  });
}  
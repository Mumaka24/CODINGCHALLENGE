// 1 Find the Largest Number
// Write a function findLargest that takes three numbers as 
//arguments and returns the largest of the three.
function findLargest(a, b, c) {
    // Your code here
    return Math.max(a,b,c)
}

console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8

// 2 Reverse Words in a Sentence
//Description: Write a function reverseWords that takes a string as an 
//argument and returns a new string where the order of the words in the 
//sentence are reversed, but the words themselves aren't.
function reverseWords(sentence) {
    // Your code here
    return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"


// 3 Find the Longest Word
// Description: Write a function findLongestWord that takes an array of
// words and returns the length of the longest one.
function findLongestWord(words) {
    let longestWord = words[0];
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
//function findLongestWord(words) {
   // return words.reduce((longest, current) => {
   //    return current.length > longest.length ? current : longest;
  //// });
//}
/**console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"
// 3 Find the Longest Word in an Array
function findLongestWord(words) {
    // Initialize a variable to store the longest word
    let longestWord = "";
    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Compare current word with the longest word found so far
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    // Return the longest word found
    return longestWord;
}
console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"
//Write a function reverseWords that takes a string as an argument and returns a new string where the order
 //of the words in the sentence are reversed, but the words themselves aren't.
 function reverseWords(sentence) {
    // Your code here
}

console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"
 function reverseWords(sentence) {
  

// 4 Write a function findLongestWord that takes an array of strings as an argument 
//and returns the longest word in the array. If there are multiple words with the same length, return the first one.
function findLongestWord(words) {
    // Your code here
    let wordsList =[]
    if (Array.isArray(words))){
        console.log("argument is NOT an array?") 
*/
console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"




// 5 Count Occurrences of Words in a Sentence
//Description: Write a function countWords that takes a string sentence as an 
//argument and returns an object where each key is a word in the sentence and 
//the corresponding value is the number of times that word appears in the sentence.
function countWords(sentence) {
    // Your code here
    function countWords(sentence) {
        // Step 1: Split sentence into words
           let words = sentence.split(' ');
        // Step 2: Initialize an empty object to store word counts
           let wordCounts = {};
        // Step 3: Iterate through the array of words using a for loop
           for (let i = 0; i < words.length; i++) {
           let word = words[i];
           // Skip empty words resulting from multiple spaces or other issues
           if (word) {
               // Count each word
               if (wordCounts[word]) {
                   wordCounts[word]++;
               } else {
                   wordCounts[word] = 1;
               }
           }
       }
       // Step 4: Return the object containing word counts
       return wordCounts;
           }

console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: {this: 2, is: 2, a: 2, test: 2, only: 1}

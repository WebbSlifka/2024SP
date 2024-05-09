/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Webb Slifka
      Date:   04/14/2024

      Filename: project04-03.js
*/

"use strict"; // 1. Directive for strict mode

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount); // Fixed typo: "keyup" instead of keyup

// Function to update the count with each keyup event
function updateCount() {
    // Set the warning box to an empty text string
    warningBox.innerHTML = "";
    
    // Count the number of characters in the comment box
    let commentText = document.getElementById("comment").value; // Fixed variable name typo: "commentText" instead of "commentsText"
    let charCount = countCharacters(commentText);
    
    try {
        // Check if charCount exceeds the maximum limit
        if (charCount > MAX_REVIEW) {
            throw new Error("You have exceeded the character count limit");
        }
    } catch (error) {
        // Display error message in the warning box
        warningBox.innerHTML = error.message;
    } finally {
        // Update word count box regardless of exception
        wordCountBox.innerHTML = charCount;
    }
}

// Function to count the number of characters in a text string
function countCharacters(textStr) {
    let commentRegex = /\s/g; // Fixed variable name typo: "commentRegex" instead of "commentregx"
    let chars = textStr.replace(commentRegex, "");
    return chars.length;
} 

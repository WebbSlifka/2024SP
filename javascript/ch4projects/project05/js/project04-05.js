/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Webb Slifka
      Date:   04/14/2024

      Filename: project04-05.js
 */


      const PI = Math.PI;

      // Function to convert degrees to radians 
      function degreesToRadians(degrees) {
          return degrees * PI / 180;
      }
      
      // Function to convert radians to degrees
      function radiansToDegrees(radians) {
          return radians * 180 / PI;
      }
      
      // Event handler that converts radians to degrees when the input box is changed
      document.addEventListener("DOMContentLoaded", function() {
          document.getElementById("rValue").addEventListener("change", function() {
              let radians = parseFloat(this.value);
              document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
          });
      });
      
      // Event handler that converts degrees to radians when the input box is changed
      document.addEventListener("DOMContentLoaded", function() {
          document.getElementById("aValue").addEventListener("change", function() {
              let degrees = parseFloat(this.value);
              document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
          });
      });
      
      // Function to display a numeric value in the format ##.### 
      function formatValue3(value) {
          return value.toFixed(3);
      }
      
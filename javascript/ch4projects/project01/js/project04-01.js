/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Webb Slifka
      Date:   04/14/2024

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 50;
const COST_PER_MILE = 75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let setupBox = document.getElementById("setupBox");
let msgBox = document.getElementById("msgBox");

// Event Handlers
wgtBox.onchange = calcTotal;
distBox.onchange = calcTotal;
setupBox.onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
    let totalCost = 0;      
    msgBox.innerHTML = "";  

    try {
        if (!(wgtBox.value > 0)) {
            throw "!! Enter a positive weight";
        }
        totalCost += wgtBox.value * COST_PER_LB;

    } catch (error) {
        msgBox.innerHTML = error;
        return; 
    }

    try {
        if (!(distBox.value > 0)) {
            throw "!! Enter a positive mileage";
        }
        totalCost += distBox.value * COST_PER_MILE;

    } catch (error) {
        msgBox.innerHTML = error;
        return; 
    }

    if (setupBox.checked) {
        totalCost += SETUP_COST;
    }

    // Display the moving cost estimate in the totalBox, formatted as currency
    document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

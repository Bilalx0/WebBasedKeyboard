// target the textarea and keyboard keys
const textarea = document.getElementById('main-textarea');
const keyboardKeys = document.querySelectorAll("span");

// function for textarea
// To ensure that the cursor always starts at the top-left corner 
var isFirstClick = true;

function setCursorToTopLeft() {
    if (isFirstClick) {
        textarea.setSelectionRange(0, 0);
        isFirstClick = false;
    }
}

function resetCursor() {
    isFirstClick = false; // Ensure that cursor behavior is normal after input
}


// function for keyboard keys
let string = "";
let arr = Array.from(keyboardKeys);
let isCapsLockActive = false;
let isShiftIsActive = false;

arr.forEach(span => {
    span.addEventListener('click', (e) => {
        let key = e.target.innerHTML;

        if (e.target.innerHTML == 'Tab') {
            string += "\t";
        }
        else if (e.target.innerHTML == 'Space') {
            string += " ";
        }
        else if (e.target.innerHTML == 'Delete all') {
            string = "";
        }
        else if (e.target.innerHTML == 'Backspace') {
            string = string.slice(0, -1);
        }
        else if (e.target.innerHTML == 'Enter') {
            string += "\n";
        }
        else if (e.target.innerHTML == 'CapsLock') {
            isCapsLockActive = !isCapsLockActive; // Toggle CapsLock state by js
        }
        else if (e.target.innerHTML == 'Shift') {
            isShiftIsActive  = !isShiftIsActive ; // Toggle Shift state by js
        }
        else {
            // Here, logical operator is used '||' which indicates 'OR' 
            if (isCapsLockActive || isShiftIsActive) {  
                e.target.innerHTML = key.toUpperCase();
                isShiftIsActive = false;
            } 
            else {
                e.target.innerHTML = key.toLowerCase();
            }
            string += e.target.innerHTML ;
        }
        textarea.value = string;
    })
})

// Ensure textarea is focused when the page loads
window.onload = function() {
    textarea.focus();
}
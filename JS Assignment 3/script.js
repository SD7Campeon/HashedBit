// Function to Filter States
function filterStates() {
    const input = document.getElementById('statesInput').value;
    const states = input.split(',').map(state => state.trim());
    const filteredStates = states.filter(state => !/^[aeiou]/i.test(state));
    document.getElementById('outputQ1').innerHTML = `Filtered States: ${filteredStates.join(', ')}`;
}

// Function to Reverse a Sentence
function reverseSentence() {
    const input = document.getElementById('sentenceInput').value;
    const reversed = input.split(' ').reverse().join(' ');
    document.getElementById('outputQ2').innerHTML = `Reversed Sentence: ${reversed}`;
}

// Function to Modify a String
function modifyString() {
    const input = document.getElementById('modifyStringInput').value;
    const modified = input.toLowerCase().replace('i', 'I');
    document.getElementById('outputQ3').innerHTML = `Modified String: ${modified}`;
}

// Function to Count Vowels and Consonants
function countVowelsConsonants() {
    const input = document.getElementById('countStringInput').value;
    const vowels = input.match(/[aeiou]/gi) || [];
    const consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    document.getElementById('outputQ4').innerHTML = `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
}

// Function to Replace Wrong Word
function replaceWord() {
    const input = document.getElementById('replaceStringInput').value;
    const wrongWord = document.getElementById('wrongWordInput').value;
    const correctWord = document.getElementById('correctWordInput').value;
    const modifiedString = input.replace(wrongWord, correctWord);
    document.getElementById('outputQ5').innerHTML = `Modified String: ${modifiedString}`;
}

// Function to Filter Numbers Greater than 5
function filterNumbers() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);
    const filteredNumbers = numbers.filter(num => num > 5);
    document.getElementById('outputQ6').innerHTML = `Numbers greater than 5: ${filteredNumbers.join(', ')}`;
}

// Function to Calculate Student Averages
function calculateAverages() {
    const inputField = document.getElementById('studentScoresInput');
    const outputField = document.getElementById('outputQ7');
    try {
        const students = JSON.parse(inputField.value);
        let averages = students.map(student => {
            const total = student.scores.reduce((a, b) => a + b, 0);
            const average = total / student.scores.length;
            return `${student.name}: ${average.toFixed(2)}`;
        });
        outputField.innerHTML = `Averages: <br>${averages.join('<br>')}`;
    } catch (error) {
        outputField.innerHTML = 'Invalid input. Please enter valid JSON.';
    }
}

// Function to Calculate Repeated Sum of Digits
function repeatedSumDigits() {
    const input = document.getElementById('digitInput').value;
    let sum = input.split('').reduce((acc, digit) => acc + Number(digit), 0);
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    document.getElementById('outputQ8').innerHTML = `Repeated Sum of Digits: ${sum}`;
}

// Function to Count Words in Paragraph
function countWords() {
    const input = document.getElementById('paragraphInput').value;
    const words = input.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('outputQ9').innerHTML = `Word Count: ${words.length}`;
}

// Function to Reverse a String
function reverseString() {
    const input = document.getElementById('reverseStringInput').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('outputQ10').innerHTML = `Reversed String: ${reversed}`;
}

// Function to Calculate Average of Subjects
function calculateSubjectAverages() {
    const inputField = document.getElementById('subjectScoresInput');
    const outputField = document.getElementById('outputQ11');
    try {
        const students = JSON.parse(inputField.value);
        let averages = Object.keys(students).map(student => {
            let scores = Object.values(students[student]);
            return {
                [student]: {
                    average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
                }
            };
        });
        
        let output = averages.map(avg => `${Object.keys(avg)[0]}: { average: ${avg[Object.keys(avg)[0]].average} }`).join('<br>');
        outputField.innerHTML = `Averages: <br>${output}`;
    } catch (error) {
        outputField.innerHTML = 'Invalid input. Please enter valid JSON.';
    }
}

// Reset Input Functionality
function resetInput(inputId, outputId) {
    const inputField = document.getElementById(inputId);
    const outputField = document.getElementById(outputId);
    
    // Display message for input
    outputField.innerHTML = 'Please enter the required input.';
    
    // Clear input
    inputField.value = '';

    // Add event listener to clear message when user starts typing
    inputField.addEventListener('input', () => {
        outputField.innerHTML = ''; // Clear the message
    }, { once: true }); // Run once and remove listener after first input
}

// Reset All Functionality
function resetAll() {
    const inputs = document.querySelectorAll('input, textarea');
    const outputs = document.querySelectorAll('.output');

    inputs.forEach(input => input.value = '');
    outputs.forEach(output => output.innerHTML = '');
}

// Copy to Clipboard Functionality
function copyToClipboard(outputId) {
    const outputText = document.getElementById(outputId).innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Copied to clipboard!');
    }, (err) => {
        alert('Failed to copy: ' + err);
    });
}

// Download Result Functionality
function downloadResult(outputId) {
    const outputText = document.getElementById(outputId).innerText;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'result.txt'; // Set the desired file name
    link.click();
}

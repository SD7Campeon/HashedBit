// Section 1: Fruit Operations
let fruits = []; // Store the fruit array globally

function getInputArray() {
    let arrayInput = document.getElementById('arrayInput').value;
    fruits = arrayInput.split(',').map(fruit => fruit.trim());
    return fruits;
}

// Function to show second fruit
function showSecondFruit() {
    getInputArray(); // Update fruits array
    document.getElementById('fruitOutput').textContent = `The second fruit is: ${fruits[1] || 'Not available'}`;
}

// Function to add a new element
function addElement() {
    let newFruit = document.getElementById('newFruitInput').value.trim();
    if (newFruit) {
        fruits.push(newFruit); // Add user-input fruit
        document.getElementById('fruitOutput').textContent = `Modified array: ${fruits.join(', ')}`;
        document.getElementById('newFruitInput').value = ''; // Clear input field
    } else {
        alert("Please enter a fruit to add.");
    }
}

// Function to remove the specified element
function removeElement() {
    let fruitToRemove = document.getElementById('removeFruitInput').value.trim();
    if (fruitToRemove && fruits.includes(fruitToRemove)) {
        fruits = fruits.filter(fruit => fruit !== fruitToRemove); // Remove specified fruit
        document.getElementById('fruitOutput').textContent = `Modified array: ${fruits.join(', ')}`;
        document.getElementById('removeFruitInput').value = ''; // Clear input field
    } else {
        alert("Fruit not found or input is empty.");
    }
}

// Section 2: Number Array Operations
function getInputNumbers() {
    let numbersInput = document.getElementById('numbersInput').value;
    return numbersInput.split(',').map(Number);
}

// Squaring numbers in an array using map()
function displaySquaredNumbers() {
    let numbers = getInputNumbers();
    let squared = numbers.map(num => num * num);
    document.getElementById('numberOutput').textContent = `Squared numbers: ${squared}`;
}

// Filtering odd numbers using filter()
function showOddNumbers() {
    let numbers = getInputNumbers();
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    document.getElementById('numberOutput').textContent = `Odd numbers: ${oddNumbers}`;
}

// Section 3: Object Operations
function getInputPerson() {
    let personInput = document.getElementById('personInput').value;
    let [name, age, occupation] = personInput.split(',');
    return { name, age: parseInt(age), occupation };
}

// Greet person with user input
function greet() {
    let person = getInputPerson();
    document.getElementById('objectOutput').textContent = `Hello, I am ${person.name}, a ${person.age}-year-old ${person.occupation}.`;
}

// Calculate area of rectangle from user input
function getInputRectangle() {
    let rectangleInput = document.getElementById('rectangleInput').value;
    let [width, height] = rectangleInput.split(',').map(Number);
    return { width, height };
}

function showArea() {
    let rectangle = getInputRectangle();
    let area = rectangle.width * rectangle.height;
    document.getElementById('objectOutput').textContent = `The area is: ${area}`;
}

// Show object keys
function showObjectKeys() {
    let person = getInputPerson();
    let keys = Object.keys(person);
    document.getElementById('objectOutput').textContent = `Object keys: ${keys}`;
}

// Merge two objects with user input
function mergeTwoObjects() {
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let mergedObject = Object.assign({}, obj1, obj2);
    document.getElementById('objectOutput').textContent = `Merged object: ${JSON.stringify(mergedObject)}`;
}

// Section 4: Sum Calculation
function getInputNumbersForSum() {
    let numbersInput = document.getElementById('numbersInputSum').value;
    return numbersInput.split(',').map(Number);
}

// Calculate the sum of all numbers using reduce()
function showSum() {
    let numbers = getInputNumbersForSum();
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('sumOutput').textContent = `The sum of the numbers is: ${sum}`;
}

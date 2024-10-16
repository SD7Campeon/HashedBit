function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Set the width and height with 'px' units
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content of the div
    newDiv.textContent = text;

    // Add a border, background color, and some margin for visibility
    newDiv.style.border = '2px solid black';
    newDiv.style.backgroundColor = '#d3d3d3';  // Light gray background
    newDiv.style.margin = '10px';  // Adds space between divs
    newDiv.style.display = 'flex';  // Aligns the content
    newDiv.style.justifyContent = 'center';  // Centers text horizontally
    newDiv.style.alignItems = 'center';  // Centers text vertically

    // Append the newly created div to the container
    const container = document.getElementById('container');
    container.appendChild(newDiv);

    // Log to the console to indicate the div is created
    console.log('New div created with text:', text);
}

// Do not change this code
Window.createDiv = createDiv;

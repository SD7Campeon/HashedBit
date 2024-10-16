// Change the text color based on the input
document.getElementById('colorchange').onclick = function() {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
};

// Change the text size based on the slider
document.getElementById('fontsize').oninput = function() {
    const size = this.value;
    document.getElementById('text-container').style.fontSize = size + 'px';
};

// Toggle italic style
document.getElementById('italic').onclick = function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = (textContainer.style.fontStyle === 'italic') ? 'normal' : 'italic';
};

// Toggle underline style
document.getElementById('underline').onclick = function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = (textContainer.style.textDecoration === 'underline') ? 'none' : 'underline';
};

// Toggle bold style
document.getElementById('bold').onclick = function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = (textContainer.style.fontWeight === 'bold') ? 'normal' : 'bold';
};

// Change font family based on dropdown selection
document.getElementById('list').onchange = function() {
    const fontFamily = this.value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
};

// Get CSS properties and display them
document.getElementById('getstyle').onclick = function() {
    const textContainer = document.getElementById('text-container');
    const color = textContainer.style.color;
    const fontSize = textContainer.style.fontSize;
    const fontFamily = textContainer.style.fontFamily;
    const textDecoration = textContainer.style.textDecoration;
    const fontStyle = textContainer.style.fontStyle;
    const fontWeight = textContainer.style.fontWeight;

    // Create a CSS property string
    const cssProps = `color: ${color}; font-size: ${fontSize}; font-family: ${fontFamily}; text-decoration: ${textDecoration}; font-style: ${fontStyle}; font-weight: ${fontWeight};`;

    // Display the CSS properties in the paragraph
    document.getElementById('css-props').textContent = cssProps;
};

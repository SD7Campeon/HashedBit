function swapTheme() {
    const appDiv = document.getElementById('app');
    const button = document.getElementById('swap');

    // Toggle between day and night classes for the div
    if (appDiv.classList.contains('day')) {
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        
        // Change the button class accordingly
        button.classList.remove('button_day');
        button.classList.add('button_night');
    } else {
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        
        // Change the button class accordingly
        button.classList.remove('button_night');
        button.classList.add('button_day');
    }
}

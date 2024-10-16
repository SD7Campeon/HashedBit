function toggleVisibility() {
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('useless-paragraph');
    
    // Check if the paragraph is currently visible
    if (paragraph.style.display === 'none') {
        // If it's hidden, show it
        paragraph.style.display = 'block';
    } else {
        // If it's visible, hide it
        paragraph.style.display = 'none';
    }
}

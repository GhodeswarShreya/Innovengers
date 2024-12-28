// Optional Interactivity
console.log("Welcome to Crew Connect!");
window.onload = function() {
    const heading = document.getElementById('heading');
    
    // Trigger the animation after the page has loaded
    setTimeout(function() {
        heading.style.opacity = 1;
        heading.style.transform = 'translateY(0)';
    }, 100); // Delay to ensure initial state is applied
};
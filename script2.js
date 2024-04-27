

let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.marginLeft = -value + 'px';
    treeRight.style.marginLeft = value + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});

const checkbox = document.getElementById('flexSwitchCheckDefault');
checkbox.addEventListener('click', function() {
    // Add fade-out animation class to the checkbox
    checkbox.classList.add('fade-out');
    
    // After a delay, switch location
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500); 
});


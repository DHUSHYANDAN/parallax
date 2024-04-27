

const title = document.querySelector('.title')
const leaf11 = document.querySelector('.leaf1')
const leaf22 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

   
    leaf11.style.marginLeft = -value + 'px'
    leaf22.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})


const checkbox = document.getElementById('flexSwitchCheckDefault');
checkbox.addEventListener('click', function() {
    // Add fade-out animation class to the checkbox
    checkbox.classList.add('fade-out');
    
    // After a delay, switch location
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 500); // 500ms delay matches the animation duration
});


var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

// When the window finishes loading, display the modal
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button, hide the modal and trigger fade-out animation
closeButton.onclick = function() {
    modal.classList.add('fade-out'); // Add 'fade-out' class to trigger animation
    setTimeout(function() {
        modal.style.display = "none"; // Hide the modal after the animation completes
    }, 5000); 
}




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
    
    /
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 500); 
});


var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];





closeButton.onclick = function() {
    modal.classList.add('fade-out'); 
    setTimeout(function() {
        modal.style.display = "none"; 
    }, 5000); 
}


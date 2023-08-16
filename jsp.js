let text = document.getElementById("text");
let imgleft = document.getElementById("imgleft");
let imgright = document.getElementById("imgright");

window.addEventListener('scroll', () => {
    let Value = window.scrollY;
   // text.style.margintop= value * 2.5 + 'px';
    imgleft.style.left = Value * -1.5 + 'px';
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out!');
  });
  





const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})
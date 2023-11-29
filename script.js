
document.getElementById('nav').addEventListener('click', ()=>{
    document.getElementById('nav').style.display="none"
   document.getElementById('sideNav').style.display="flex"
})


document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('sideNav').style.display="none";
    document.getElementById('nav').style.display="flex"
})

var typed=new Typed(".text", {
    strings:['<i>Web</i> Developer', 'Web Designer'],
    typeSpeed:30,
    backSpeed:30,
    loop:true
})


AOS.init({
    delay:1,
    offset:110
});
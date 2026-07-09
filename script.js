/* ===================================
   NOVAAI JAVASCRIPT
=================================== */


/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("active");
    });
}


/* NAVBAR EFFECT */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){
        header.style.background="rgba(5,8,22,0.9)";
    }
    else{
        header.style.background="rgba(10,15,40,0.55)";
    }

});


/* COUNTERS */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let target=Number(counter.dataset.target);
let count=0;


let timer=setInterval(()=>{

count++;

counter.innerText=count;


if(count>=target){

clearInterval(timer);
counter.innerText=target+"+";

}

},10);


});



/* BUTTONS */


/* Get Started */

const getStarted=document.querySelector(".nav-btn");

if(getStarted){

getStarted.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#contact")
.scrollIntoView({
behavior:"smooth"
});

});

}



/* Start Free */

const startFree=document.querySelector(".primary-btn");

if(startFree){

startFree.addEventListener("click",(e)=>{

e.preventDefault();

alert(
"🤖 NovaAI is starting...\n\nAI Assistant ready!"
);

});

}



/* Live Demo */

const demo=document.querySelector("#demoBtn");

if(demo){

demo.addEventListener("click",()=>{

alert(
"🚀 Live Demo\n\nNovaAI system is working!"
);

});

}



/* Pricing buttons */

const plans=document.querySelectorAll(".price-card button");


plans.forEach(btn=>{


btn.addEventListener("click",()=>{


alert(
"✅ Your NovaAI plan was selected!"
);


});


});



/* CONTACT FORM */


const form=document.querySelector(".contact form");


if(form){

form.addEventListener("submit",(e)=>{


e.preventDefault();


alert(
"📩 Message sent successfully!"
);


form.reset();


});


}
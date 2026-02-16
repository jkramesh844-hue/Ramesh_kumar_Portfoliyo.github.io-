document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
  this.reset();
});



function updateTime(){
  const now = new Date();

  document.getElementById("date").textContent =
    now.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

  document.getElementById("time").textContent =
    now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
}

setInterval(updateTime, 60000); // update every minute
updateTime();


const texts = ["Web Developer", "Frontend Developer", "Fullstack Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll",()=>{
  skillCards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      card.classList.add("show");
    }
  });
});


//light 
// document.getElementById("themeToggle").addEventListener("click",()=>{
//   document.body.classList.toggle("light");
// });


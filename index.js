var h1 = document.getElementById("h1");
var originalText = h1.innerText;
const projectsBtn = document.getElementById("myworks");
const projectsCon = document.getElementById("projects");
const closeBtn = document.getElementById("closeBtn");
const imgsample = document.querySelectorAll(".imgsample")



h1.addEventListener("mouseover", function(){
    this.textContent = "About Me";
    document.getElementById("myworks").style.display = "none";
});

h1.addEventListener("mouseout", function(){
    this.textContent = originalText;
    document.getElementById("myworks").style.display ="";
});  

h1.addEventListener("click", function(){
    openPopup();
});

document.addEventListener("click", function(event){
    var popup = document.getElementById("popup");
    if(!popup.contains(event.target) && event.target !== h1){
        closePopup();
    }
});

function openPopup(){
    document.getElementById("popup").style.display = "block";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

/////////////////Projects-Button/////////////////////////
projectsBtn.addEventListener("click", function() {
  projectsCon.style.display = "block"; // Show the projects section
  setTimeout(function() {
    projectsCon.classList.add("show"); // Add the show class after a short delay
  }, 50); // Adjust delay as needed for smoother transition
});

closeBtn.addEventListener("click", function() {
  projectsCon.classList.remove("show"); // Remove the show class to hide the projects section
  setTimeout(function() {
    projectsCon.style.display = "none"; // Hide the projects section after the transition completes
  }, 300); // Adjust delay to match the transition duration
});

imgsample.forEach(image => {
  image.addEventListener("click", () => {
      imgsample.forEach(otherImage => {
          if (otherImage !== image) {
              otherImage.classList.remove('enlarged');
          }
      });
      image.classList.toggle('enlarged');
  });
});
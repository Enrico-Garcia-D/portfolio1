var h1 = document.getElementById("h1")
var originalText = h1.innerText 

h1.addEventListener("mouseover", function(){
    this.textContent = "About Me"
    document.getElementById("myworks").style.display = "none"
})
h1.addEventListener("mouseout", function(){
    this.textContent = originalText
    document.getElementById("myworks").style.display =""
})  

h1.addEventListener("click", function(){
    openPopup()
})

document.addEventListener("click", function(event){
    var popup = document.getElementById("popup")
    if(!popup.contains(event.target) && event.target !== h1){
        closePopup()
    }
})

function openPopup(){
    document.getElementById("popup").style.display = "block"
}

function closePopup(){
    document.getElementById("popup").style.display = "none"
}
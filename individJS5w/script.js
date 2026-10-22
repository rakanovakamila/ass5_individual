let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increase").addEventListener("click", function(){
    count++;
    updateCounter();
});
document.getElementById("decrease").addEventListener("click", function(){
    if(count > 0){
        count--;
    }
    updateCounter();
});
document.getElementById("reset").addEventListener("click", function(){
    count = 0;
    updateCounter();
});
function updateCounter(){
    counter.textContent = count;
}


const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");
const clear = document.getElementById("clear");
textInput.addEventListener("input", function(){
    let text = textInput.value;
    if(text === ""){
        preview.textContent = "Your text will appear here";
    } else{
        preview.textContent = text;
    }
    charCount.textContent = text.length;
});
clear.addEventListener("click", function(){
    textInput.value = "";
    preview.textContent = "Your text will appear here";
    charCount.textContent = 0;
    textInput.focus();
});


const mac = document.getElementById("mac");
const macImage = document.getElementById("macImage");
const caption = document.getElementById("caption");
mac.addEventListener("change", function(){
    if(mac.value === "macbook"){
        macImage.src = "images/macbook.jpg";
        macImage.alt = "Apple MacBook laptop";
        caption.textContent = "You can afford a MacBook...";
    } else if(mac.value === "macpro"){
        macImage.src = "images/macpro.jpg";
        macImage.alt = "Apple Mac Pro computer";
        caption.textContent = "Wow, you are *ich!";
    } else{
        macImage.src = "images/bun.jpg";
        macImage.alt = "Poppy seed bun";
        caption.textContent = "At least you can afford a bun!";
    }
});

const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");
keyboardInput.addEventListener("keydown", function(event){
    keyStatus.textContent = "You pressed: " + event.key;
    if(event.key === "Enter"){
        keyResult.textContent = keyboardInput.value;
    } else if(event.key === "Escape"){
        keyboardInput.value = "";
        keyResult.textContent = "";
    }
});


const card = document.getElementById("card");
const instruction = document.getElementById("instruction");
card.addEventListener("mouseenter", function(){
    card.classList.add("highlight");
    instruction.textContent = "Mouse is over the card...";
});
card.addEventListener("mouseleave", function(){
    card.classList.remove("highlight");
    instruction.textContent = "Hover over the card or use Tab.";
});
card.addEventListener("focus", function(){
    card.classList.add("highlight");
    instruction.textContent = "Card is focused!";
});
card.addEventListener("blur", function(){
    card.classList.remove("highlight");
    instruction.textContent = "Hover over the card or use Tab.";
});
let button = document.querySelector("button");
let userInput = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

let addEvent = () => {
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        userInput.value = "";
}

button.addEventListener("click", function() {
    if(userInput.value.length > 0) {
        addEvent();
    }
})

userInput.addEventListener("keydown", function(event) {
    if(userInput.value.length > 0 && event.key === "Enter") {
       addEvent();
    }
})

li.forEach(item => {
    item.addEventListener("click", function() {
        item.classList.add("done");
    });
});
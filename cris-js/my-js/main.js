let newItemCounter = 1;
let ourButton = document.getElementById("our-button");
let headline = document.getElementById("our-headline")
let listItems = document.querySelectorAll("#our-list li");
let ourList = document.querySelector("#our-list");

function activateItem(e) {
    if (e.target.nodeName === "LI") {
        headline.innerHTML = e.target.innerHTML;

        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }

        e.target.classList.add("active");
    }
}

ourList.addEventListener("click", activateItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++;
}

ourButton.addEventListener("click", createNewItem);


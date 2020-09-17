let animalContainer = document.getElementById("animal-info");
let ourButton = document.getElementById("btn");
let pageCounter = 1;

ourButton.addEventListener("click", function () {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        ourButton.classList.add("hide-me");
    }
});

function renderHTML(data) {

    let htmlString = "";

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[0].species + " that likes to eat ";

        for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii === 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii === 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }
    }

    htmlString += ".</p>";


    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}


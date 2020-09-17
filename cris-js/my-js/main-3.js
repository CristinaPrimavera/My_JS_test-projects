const petsData = [
    {
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2020,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2016,
        photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2019,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];

function age(birthYear) {
    let age = new Date().getFullYear() - birthYear;

    switch (age) {
        case 0:
            age = "Baby";
            break;
        case 1:
            age += " year old";
            break;
        default:
            age += " years old";
    }

    return age;
}


function foods(favFoods) {
    return `
    <h4>Favorite Foods</h4>
    <ul class="foods-list">
        ${favFoods.map((food) => `<li>${food}</li>`).join('')}
    </ul>
    `
}


function petTemplate(pet) {
    return `
    <div class="animal">
        <img class="pet-photo" src="${pet.photo}" alt="">
        <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
        <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
        ${pet.favFoods ? foods(pet.favFoods) : ''}        

    </div>
    `
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    
    ${petsData.map(petTemplate).join("")}
    
    <footer>These ${petsData.length} were added recently. Check soon for updates</footer>
`;

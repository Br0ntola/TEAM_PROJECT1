const team = [
    {
        name: "Valentina",
        surname: "Li",
        age: 22,
        city: "Roma",
        hobby: "Gym",
        favoriteFood: "Sushi",
        favoriteVideoGame: "League of Legends",
        favoriteFilm: "",
        favoriteBook: "Prima di te nessuno mai",
        petName: "Yuki",
    },
    {
        name: "Azeez",
        surname: "Komolafe",
        age: 24,
        city: "Nigeria",
        hobby: "coding",
        favoriteFood: "indomin",
        favoriteVideoGame: "call of Duty",
        favoriteFilm: "Mr.Robot",
        favoriteBook: "marry the dragon",
        petName: "Boris",
    },
    {
        name: "Melissa",
        surname: "Mastrovincenzo",
        age: 30,
        city: "Castiglione Messer Marino",
        hobby: "Dormire",
        favoriteFood: "Pizza",
        favoriteVideoGame: "GTA",
        favoriteFilm: "Harry Potter",
        favoriteBook: "",
        petName: "",
    },
    {
        name: "Andrea",
        surname: "Sergi",
        age: 28,
        city: "Gioia Tauro",
        hobby: "Gym",
        favoriteFood: "Pizza",
        favoriteVideoGame: "LOL",
        favoriteFilm: "Chiedimi se sono felice",
        favoriteBook: "Intermittenze della morte",
        petName: "Nora",
    },
    {
        name: "Arianna",
        surname: "Giaccari",
        age: 22,
        city: "Galatina",
        hobby: "Singing",
        favoriteFood: "Sushi",
        favoriteVideoGame: "GTA",
        favoriteFilm: "Spider-man",
        favoriteBook: "L'amico ritrovato",
        petName: "Benny",
    },
    {
        name: "Arianna",
        surname: "Lupo",
        age: 27,
        city: "Palermo",
        hobby: "Taekwondo",
        favoriteFood: "Pasta-asciutta",
        favoriteVideoGame: "Cyberpunk2077",
        favoriteFilm: "Hana-bi",
        favoriteBook: "Demian",
        petName: "Yupi",
    }
];

//1- Print the team in alphabetical order (surname name)

function alphabeticalOrder(a, b) {
    if (a.surname < b.surname) {
        return -1;
    }
    if (a.surname > b.surname) {
        return 1;
    }
    return 0;
};

let arrayOrdered = team.sort(alphabeticalOrder);

console.log(arrayOrdered);

//2- Print the team in age order (name age)

function sortByAge(array) {
    const sortedArray = array.sort((a, b) => a.age - b.age);
    sortedArray.forEach(el => {
        console.log(`${el.name}-${el.age}`);
    });
};

sortByAge(team);

//3- Print the team middle age

function middleAge(array) {
    const ages = array.map(person => person.age);
    const avgAge = ages.reduce((acc, number) => acc + number) / ages.length;
    console.log(`The middle age is: ${avgAge}`);
};

middleAge(team);

//4- Print who has a pet (name petName)

for (let i = 0; i < team.length; i++) {
    team.lastIndexOf(team[i].name)
    if (team[i].petName) {
        console.log(team[i].name + " has a pet named " + team[i].petName);
    }
    else {
        console.log(team[i].name + " has no pet");
    }
};


//5- Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)

function videoGame(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].favoriteVideoGame === "LOL" || array[i].favoriteVideoGame === "League of Legends") {
            console.log(array[i].name + ": " + array[i].favoriteVideoGame);
        };
    };
};

videoGame(team);

//6- Print if there are some members with the same name (name).

function printSameName() {

    for (let i = 0; i < team.length; i++) {
        const currentPerson = team[i];
        const sameName = team.filter(teammate => teammate.name === currentPerson.name);

        if (sameName.length > 1) {
            console.log("Persone con lo stesso nome:");
            console.log(sameName);
            return;
        }
    }

    console.log("Nessuna persona con lo stesso nome trovata.");
}

printSameName();

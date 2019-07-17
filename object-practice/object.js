const nikkiTheCat = {
    name: "Nikki",
    species: "feline",
    nicknames: ["kitty", "kittykitty"],
    age: 9,
    meow: (someone) => {
        console.log(`Nikki meows at ${someone}`);
    },
    scratch: (something) => {
        console.log(`Nikki scratches at ${something}`);
    },
    eat: (food) => {
        console.log(`Nikki eats ${food} when she's hungry`);
    },
    play: function (toy) {
        if (toy.includes("bird") || toy.includes("mouse")) {
            this.favoriteToys.push(toy)
        }
    }
    }
    nikkiTheCat.favoriteToys = []

    nikkiTheCat.meow("Jason.")
    nikkiTheCat.scratch("me.")
    nikkiTheCat.eat("birds")
    nikkiTheCat.play("bird")
    nikkiTheCat.play("mouse")
    console.log(nikkiTheCat.favoriteToys)


    
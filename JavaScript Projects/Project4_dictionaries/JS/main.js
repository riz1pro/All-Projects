

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age:5,
        Sound: "Bark!"

    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function delete_Operator() {
    var Animal = {
        Species: "Dog",
        Color: "White",
        Breed: "Labrador",
        Age:5,
        Sound: "Bark!"

    };
    delete Animal.Sound;
    document.getElementById("Dictionary2").innerHTML = Animal.Sound;
}




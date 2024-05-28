var animals = ["Dog", "Cat", "Rabbit"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    var statement = "";
    switch (animal) {
        case "Dog":
            statement = "A dog would make a great pet.";
            break;
        case "Cat":
            statement = "A cat is an independent and low-maintenance pet.";
            break;
        case "Rabbit":
            statement = "A rabbit is a gentle and social animal.";
            break;
        default:
            statement = "This animal is unique!";
    }
    console.log(animal + ": " + statement);
}
console.log("Any of these animals would make a great pet!");

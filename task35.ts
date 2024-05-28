const animals: string[] = ["Dog", "Cat", "Rabbit"];
for (let animal of animals) {
  let statement = "";
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
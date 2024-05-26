let personName: string = "Usama";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

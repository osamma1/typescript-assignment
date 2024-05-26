var guests = ["Junaid", "Ali", "raza", "maaz", "laraib", "hassan"];
console.log("Sorry, we can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove and get the last guest
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", you are still invited to dinner!");
}
guests.pop();
guests.pop();
console.log("\nEmpty Invitation List:", guests);

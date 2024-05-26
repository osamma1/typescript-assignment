let guests: string[] = ["Junaid" , "Ali", "raza", "maaz", "laraib", "hassan"];
console.log("Sorry, we can only invite two people for dinner.");
while (guests.length > 2) {
  let removedGuest = guests.pop(); // Remove and get the last guest
  console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
for (let guest of guests) {
  console.log("Dear " + guest + ", you are still invited to dinner!");
}
guests.pop();
guests.pop();
console.log("\nEmpty Invitation List:", guests);
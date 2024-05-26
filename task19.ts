let guests: string[] = ["Junaid" , "Ali", "raza", "maaz", "laraib", "hassan"];
console.log("\nInvitation List:");
for (let guest of guests) {
  console.log("Dear " + guest + ", you are  invited to dinner!");
}
console.log("Number of people invited to dinner: " + guests.length);
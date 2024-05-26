var guests = ["Junaid", "Ali", "raza", "maaz", "laraib", "hassan"];
console.log("\nInvitation List:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", you are  invited to dinner!");
}
console.log("Number of people invited to dinner: " + guests.length);

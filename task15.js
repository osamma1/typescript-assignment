var guests = ["Ali", "maaz", "laraib"];
console.log("Unfortunately, " + guests[2] + " can't make it to the dinner.");
guests[2] = "taha";
console.log("\nUpdated Invitation List:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", you are invited to dinner!");
}

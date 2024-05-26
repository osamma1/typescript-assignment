var guests = ["Ali", "maaz", "laraib"];
console.log("Great news! We found a bigger dinner table!");
guests.unshift("junaid");
guests.splice(2, 0, "raza");
guests.push("hassan");
console.log("\nUpdated Invitation List:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ", you are invited to dinner!");
}

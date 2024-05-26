let guests: string[] = ["Ali", "maaz", "laraib"];
console.log("Unfortunately, " + guests[2] + " can't make it to the dinner.");
guests[2] = "taha";
console.log("\nUpdated Invitation List:");
for (let guest of guests) {
  console.log("Dear " + guest + ", you are invited to dinner!");
}
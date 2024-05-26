let guests: string[] = ["Ali", "maaz", "laraib"];
console.log("Great news! We found a bigger dinner table!");
guests.unshift("junaid");       
guests.splice(2, 0, "raza"); 
guests.push("hassan");         
console.log("\nUpdated Invitation List:");
for (const guest of guests) {
  console.log("Dear " + guest + ", you are invited to dinner!");
}
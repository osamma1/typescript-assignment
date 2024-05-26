let placesToVisit: string[] = [ "Dubai", "Paris", "Sydney", "New York", "london" ];
  
console.log("Original Order:");
  console.log(placesToVisit);  
  // Print the array in alphabetical order (without modifying the original list)
  console.log("\nAlphabetical Order (without modifying original list):");
  console.log([...placesToVisit].sort());
  // Confirm the original array is still in its original order
  console.log("\nOriginal Order (still unchanged):");
  console.log(placesToVisit);
  console.log("\nReverse Alphabetical Order (without modifying original list):");
  console.log([...placesToVisit].sort().reverse());
  console.log("\nOriginal Order (still unchanged):");
  console.log(placesToVisit);
  placesToVisit.reverse();
  console.log("\nReversed Order:");
  console.log(placesToVisit);
  placesToVisit.reverse();
  console.log("\nOriginal Order (restored after reversing):");
  console.log(placesToVisit);
  placesToVisit.sort();
  console.log("\nAlphabetical Order (sorted):");
  console.log(placesToVisit);
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("\nReverse Alphabetical Order (sorted in reverse):");
  console.log(placesToVisit);
  


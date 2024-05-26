var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Dubai", "Paris", "Sydney", "New York", "london"];
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order (without modifying the original list)
console.log("\nAlphabetical Order (without modifying original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
// Confirm the original array is still in its original order
console.log("\nOriginal Order (still unchanged):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order (without modifying original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nReverse Alphabetical Order (sorted in reverse):");
console.log(placesToVisit);

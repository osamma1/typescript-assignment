function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please add some items.");
    } else {
      console.log("You ordered a sandwich with the following items:");
      for (const item of items) {
        console.log(`- ${item}`);
      }
    }
  }
  orderSandwich("egg", "kabab", "Tomato");
  orderSandwich("chicken", "Cheese");
  orderSandwich(); 
  
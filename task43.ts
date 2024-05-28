function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      let greatMagician = "Great " + magician;
      greatMagicians.push(greatMagician);
    }
    return greatMagicians;
  }
  function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  let magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Derren Brown'];
  let greatMagicians: string[] = makeGreat([...magicians]); 
  console.log("Original Magicians:");
  showMagicians(magicians);
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
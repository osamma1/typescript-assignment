function make_great(magician_name:string[]): void {
    for(let magician of magician_name) {
     console.log(`great ${magician}`);
 }
 }
 let magician_names : string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Derren Brown'];
 make_great(magician_names);
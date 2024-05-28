function make_great(magician_name) {
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var magician = magician_name_1[_i];
        console.log("great ".concat(magician));
    }
}
var magician_names = ['David Copperfield', 'Penn Jillette', 'Teller', 'Derren Brown'];
make_great(magician_names);

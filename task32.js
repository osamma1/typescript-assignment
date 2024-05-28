var current_users = ['ali', 'babar', 'chaudhry', 'dawood', 'esa'];
var new_users = ['ALlia', 'Faraz', 'George', 'Basit', 'Hamid'];
var lower_current_users = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var lower_new_user = new_user.toLowerCase();
    if (lower_current_users.includes(lower_new_user)) {
        console.log("The username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}

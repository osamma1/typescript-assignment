var users = ["hammad", "haris", "usama"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users.length = 0;
    console.log("All usernames are removed.");
}
if (users.length === 0) {
    console.log("The list of users is empty.");
}
else {
    console.log("Remaining users:");
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}

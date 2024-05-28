let users: string[] = ["hammad","haris","usama"];
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  users.length = 0;
  console.log("All usernames are removed.");
}
if (users.length === 0) {
  console.log("The list of users is empty.");
} else {
  console.log("Remaining users:");
  for (const user of users) {
    console.log(user);
  }
}
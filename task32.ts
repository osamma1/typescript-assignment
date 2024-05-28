let current_users: string[] = ['ali', 'babar', 'chaudhry', 'dawood', 'esa'];
let new_users: string[] = ['ALlia', 'Faraz', 'George', 'Basit', 'Hamid'];
let lower_current_users: string[] = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    let lower_new_user: string = new_user.toLowerCase();
    if (lower_current_users.includes(lower_new_user)) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}

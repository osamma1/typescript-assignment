function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Code like a Pro');

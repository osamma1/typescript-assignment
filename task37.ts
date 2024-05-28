function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Code like a Pro');

process.stdout.write('hello from spinner1.js... \rheyyy\n');
spinazz = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\n']
let delay = 200;
let increment = 100;
for (let rotation = 0; rotation < spinazz.length; rotation++) {
    delay += increment;
    setTimeout(() => {
        process.stdout.write(spinazz[rotation]);
    }, delay);
}
const spinnerArray = [
  "\r|   ",
  "\r/   ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
];

let delay = 100;
for (let spin of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay)

  delay += 200;
};
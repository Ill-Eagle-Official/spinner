const spinnerCharacters = [
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
for (let spin of spinnerCharacters) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay)

  delay += 200;
};
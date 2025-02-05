let test = 'Joyful';
const regex = /^[^a|^A]{6,}/g;
const result = test.match(regex);
console.log(result);
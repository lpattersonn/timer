const arr = process.argv.slice(2);
for (let num of arr) {
  setTimeout(() => {
    process.stdout.write(`\x07 ${num} seconds`);
  }, num * 1000);
}
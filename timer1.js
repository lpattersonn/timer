const arr = process.argv.slice(2);
for (let num of arr) {
  if (num > 0 && !isNaN(num)) {
    setTimeout(() => {
      process.stdout.write(`\x07 ${num} seconds`);
    }, num * 1000);
  }
}
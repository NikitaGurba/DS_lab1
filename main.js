const func = (N) => {
  let newN = N % 10;
  if (newN % 2 !== 0 && newN % 5 !== 0) {
    for (let n = 0, r = 0; n < N; ++n) {
      r = (r * 10 + 1) % N;
      if (r === 0) {
        return "1".repeat(n);
      }
    }
  } else {
    return "NO";
  }
};
console.time("test");
let input = prompt("Введите число");
console.log("Введенное число: " + input)
console.log(func(input));
console.timeEnd("test");

console.log("Гурба Никита Валерьевич 090304-РПИб-о23");

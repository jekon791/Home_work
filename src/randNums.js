export function randNumbers() {
  let number = counter();
  let numbers = [...Array(101).keys()].map(() => number());
  let numbersArray = shuffleArray(numbers);
  let sliceArr = numbersArray.slice(0, 50);
  sliceArr.sort((a, b) => a - b);
  console.log("Массив из 50 чисел =" + " " + sliceArr);
  return oddAndEven(sliceArr);
}

// Проще было бы сделать через indexOf, но в случаи с рандомом захотелось исключить зацикливание.
// Хотя не факт, что такое награмождение функций работает быстрее...
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function counter() {
  let step = -1;
  return function() {
    return step == 100 ? (step = 0) : ++step;
  };
}

function oddAndEven(arr) {
  let oddNums = arr.filter(num => num % 2 == 0).reduce((add, a) => add + a, 0);
  let evenNums = arr.filter(num => num % 2 != 0).reduce((add, a) => add + a, 0);
  console.log("Сумма парных чисел =" + oddNums);
  console.log("Сумма не парных чисел =" + evenNums);
}

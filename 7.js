/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При
выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее. */

let arr = [0, null, undefined, 'какой-то текст', NaN, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrZeroNumbers = 0;
let arrEvenNumbers = 0;
let arrOddNumbers = 0;

arr.forEach(function(item) {
  if (typeof item != 'number' || isNaN(item)) {
    return;
  } else if (item == 0) {
    arrZeroNumbers++;
  } else if (item % 2) {
    arrOddNumbers++;
  } else {
    arrEvenNumbers++;
  }
});

console.log(`Нулей: ${arrZeroNumbers}, чётных: ${arrEvenNumbers}, нечётных: ${arrOddNumbers}`);
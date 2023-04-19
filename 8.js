/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения
в виде «Ключ — Х, значение — Y». Используйте шаблонные строки. */

let myMap = new Map([
  [1, 'number'],
  ['2', 'string'],
  [true, 'boolean'],
  [false, 'boolean too']
]);

for (let key of myMap.keys()) {
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}
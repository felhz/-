const array = [10, 2, 22, 9];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);

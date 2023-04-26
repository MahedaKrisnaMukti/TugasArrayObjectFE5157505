function addNewElementUpDown(array, element, position) {
  if (position == "up") {
    array.unshift(element);
  } else {
    array.push(element);
  }

  return array;
}

// # Test case
let array = [1, 2, 3, 4, 5];
let element = 6;
let position = "up";

let result = addNewElementUpDown(array, element, position);
console.log(result);

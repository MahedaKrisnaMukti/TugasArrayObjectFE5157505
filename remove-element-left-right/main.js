function removeLeftRight(arr, position) {
  if (position == "left") {
    arr.pop();
  } else {
    arr.shift();
  }

  return arr;
}

// # Test case
let arr = [1, 2, 3, 4, 5];
let position = "left";

let result = removeLeftRight(arr, position);
console.log(result);

function addMoreData(object, key, value) {
  Object.assign(object, { [key]: value });

  return object;
}

// # Test case
let object = { name: "Edo", age: 20 };
let key = "address";
let value = "Jakarta";

let result = addMoreData(object, key, value);
console.log(result);

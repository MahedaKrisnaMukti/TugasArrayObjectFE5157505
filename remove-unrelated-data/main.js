function removeUnrelated(object, key) {
  delete object[key];

  return object;
}

// # Test case
let object = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};

let key = "address";

let result = removeUnrelated(object, key);
console.log(result);

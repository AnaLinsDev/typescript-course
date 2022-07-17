
type Combinable = number | string

function combine(input1: Combinable, input2: Combinable) {
  let result: any;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(10, 5.5));

console.log(combine("abc", "dfg"));

console.log(combine("abc", 10));

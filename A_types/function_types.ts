function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, callback: (n: number) => void) {
  const result = n1 + n2;
  callback(result);
}

// Will never return a value
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

let copyAdd: (a: number, b: number) => number;
copyAdd = add;

printResult(copyAdd(3, 5));
printResult(add(3, 5));
addAndHandle(3, 5, printResult);

generateError("Some error here !", 500);

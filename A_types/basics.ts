function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

let value1: number
value1 = 10;

const value2 = 7.5;

const showResult = true;
const resultPhrase = "The result is: ";

add(value1, value2, showResult, resultPhrase);

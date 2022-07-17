function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var copyAdd;
copyAdd = add;
printResult(copyAdd(3, 5));
printResult(add(3, 5));
addAndHandle(3, 5, printResult);
generateError('Some error here !', 500);

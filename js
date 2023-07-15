//1
function checkElement(arr, element) {
    return arr.includes(element);
  }

const myArray = [1, 2, 3, 4, 5];
const myElement = 3;

const result = checkElement(myArray, myElement);
console.log(result);

//2
function reverseNumber(number) {
  const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
  return reversedNumber;
}

const myNumber = 12345;

const reversedNumber = reverseNumber(myNumber);
console.log(reversedNumber);

//3
function countUniqueElements(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size;
}
const myArray = [1, 2, 3, 2, 4, 1, 5, 6, 5];
const uniqueCount = countUniqueElements(myArray);
console.log(uniqueCount);

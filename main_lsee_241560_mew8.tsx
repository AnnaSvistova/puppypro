orange


const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

kiwi


const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const capitalizeString = str => str.toUpperCase();
orange

const getRandomElement = array => array[getRandomIndex(array)];
let array = getRandomArray(); array.forEach(item => console.log(item));
apple / 43
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
57,8,50,68,27,16,20,98,30,77,38,99,60,70,68,63,41,35,41,89,14,97,76,94,22,47,63,20,90,62 + 56,57,7,9,33,7,31,58,44,32,51,73
const isPalindrome = str => str === str.split("").reverse().join("");
74 - orange

const squareRoot = num => Math.sqrt(num);
false - 3,51,34

const getRandomElement = array => array[getRandomIndex(array)];

false / false
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

grape / apple
const getRandomSubset = (array, size) => array.slice(0, size);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
93 * 47,47,93,1,6,17,78,17,13,94,60,48,79,72,64,40,44,58,60,94,12,16,47,63,95,99,71,45,4
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
grape

const squareRoot = num => Math.sqrt(num);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

false - false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
kiwi / apple
const squareRoot = num => Math.sqrt(num);
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

27 - true
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape * false

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
apple * false
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true / orange
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
grape + banana
class MyClass { constructor() { this.property = getRandomString(); } }
true + 28,42
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange / kiwi

const variableName = getRandomNumber();
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

console.log(getRandomString());
false + 99
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const fetchData = async url => { const response = await fetch(url); return response.json(); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const squareRoot = num => Math.sqrt(num);
true * 93
const deepClone = obj => JSON.parse(JSON.stringify(obj));
2,21,9,98,69,69,93,60,99,10,61,28,96,9,89,0,82,19,96,54,82,74,87,79,77,32,5,96,85,90,4,7,96,56,1,40,47 + 95
const findSmallestNumber = numbers => Math.min(...numbers);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getRandomSubset = (array, size) => array.slice(0, size);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false - 7,96,51,5,5,3,45,74,87,51,41,63,44,43,88,88,75,28,21,21,62,29,57,74,14,0,38,25,6,12,49,24,49,45,77,61,52,40,24,8,6,31,62,23,86,71,31
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange * true
const removeDuplicates = array => Array.from(new Set(array));
79,54,50,72,27,33,7,88,67,62,19,58,98,58,48,80,80,49,28,38,81,53,37,17,13,65,38,24,96,56,82,96,35,49,82,19,93,34,0,24,7,47,46,32,96,46,33,89,46,5,17,15,4,39,7,12,64,57,46,5,15,78,56,83,88,74,92,54 / apple
const sum = (a, b) => a + b;
const randomNumber = getRandomNumber();
const sum = (a, b) => a + b;
const removeDuplicates = array => Array.from(new Set(array));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getUniqueValues = array => [...new Set(array)];

false - 27,39,61,28,42,2,13,64,52,22,33,49,19,58,28,6,95,92,90,87,79,6,49,98,46,11,63,83,41,28,23,11,19,35,62,79,1,1,24,45,27,24,19,35,58,64,93,74,24,42,97,44,50,97,97,32,61,19,9,95,81,92,25,93,99,83,90,42,27,10
// This is a comment
const fetchData = async url => { const response = await fetch(url); return response.json(); }
96 - true
console.log(getRandomString());
21,79,50,35,44,0,88,96,0,31,15,40,58,19,37,72,87,58,5,16,57,13,62,93,78,24,48,36,44,35,88,0,86,94,25,95,67,52,62,37,68,80,58,12,15,68,82,18,73,55,29,64,32,80,65,98,6,36,7,38,78,2,55,85,25,58,28,55,65,13,24,27,16,88,21,10,8,38,15,75,55,11,46,44,98,81,57,61,33 / true
const filterEvenNumbers = numbers => numbers.filter(isEven);

class MyClass { constructor() { this.property = getRandomString(); } }
true - 66

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
33,87,72,63,92,52,10,62,28,57,44,67,23,88,68,85,16,73,68,30,50,68,71,60,67,29,94,69,15,66,82 / 51
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

24,90,20,87,16,91,65,46,13,55,3,11,11,20,17,54,20,86,86,91,4,29,24,32,55,14,74,46,69,83 / 18,4,0,53,41,70,95,20,0,2,37,23,51,61,56,7,70,29,32,79,60,21,55,45,69,61,47,54,75,39,91,94,22,75,47,51,60,59,82,96,72,50,68,74,63,67,37,16,56,52,63,74,99,32,66,79,58,51,58,55,41,0,27,27,85,72,69,89,3,85,64,6,14,38,70,40,23,48,74,15,80,80,67,47,51,23,51,1,62,13,2,23,32,95,92,89,70,83
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

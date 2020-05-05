const x = 15;
if (x > 10 && x < 20) {
  console.log('1번 문제 ' + x);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log('2번 문제 ' + i);
  }
}
let str = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    str += i;
  }
}
console.log('3번 문제 ' + str);

for (let i = 10; i > 0; i--) {
  if (i % 2 === 1) {
    console.log('4번 문제 ' + i);
  }
}

let temp = 0;
let num = 10;
while (num > 0) {
  num--;
  if (num % 2 === 0) {
    console.log('5번 문제 ' + temp * 2);
    temp++;
  }
}
num = 10;
while (num > 0) {
  num--;
  if (num % 2 === 1) {
    console.log('6번 문제 ' + num);
  }
}

let result = 0;
for (let i = 0; i < 10; i++) {
  result += i;
  if (i === 9) {
    console.log('7번 문제 ' + result);
  }
}
result = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    result += i;
  }
}
console.log('8번 문제 ' + result);

result = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    result += i;
  }
}
console.log('9번 문제 ' + result);

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    result = i + j;
    if (result === 6) {
      console.log(`10번 문제 [${i}, ${j}]`);
    }
  }
}
let arr = '';
const max = 6;
function DiceRoll() {
  const dice1 = Math.floor(Math.random() * 6 + 1);
  const dice2 = Math.floor(Math.random() * 6 + 1);
  arr += `[${dice1}, ${dice2}]`;
  if (max === (dice1 + dice2)) console.log('번외 합이 6이 나올때까지 굴리기 ' + arr);
  else if (max !== dice1 + dice2) DiceRoll();
}
DiceRoll();

var txtresult = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('11번 문제\n' + txtresult);

txtresult = '';
for (let i = 4; i >= 0; i--) {
  for (let j = i; j <= 5; j++) {
    txtresult += ' ';
  }
  for (let j = 0; j <= i; j++) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('12번 문제\n' + txtresult);

txtresult = '';
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('13번 문제\n' + txtresult);

txtresult = '';
for (let i = 0; i <= 4; i++) {
  for (let j = i; j <= 5; j++) {
    txtresult += ' ';
  }
  for (let j = 0; j <= i; j++) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('14번 문제\n' + txtresult);


txtresult = '';
for (let i = 0; i < 5; i++) {
  for (let j = 4; j >= i; j--) {
    txtresult += ' ';
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('15번 문제\n' + txtresult);

txtresult = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    txtresult += ' ';
  }
  for (let j = 2 * 5 - 1; j > 2 * i; j--) {
    txtresult += '*';
  }
  txtresult += '\n';
}
console.log('16번 문제\n' + txtresult);

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++)
  {
    if(array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1

function binarySearch (array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) * 0.5);
    if (array[mid] === target) return mid;
    else if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

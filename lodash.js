// const _ = require('lodash');

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// const _todos = _.cloneDeep(todos);

// console.log(todos === _todos);
// console.log(todos[0] === _todos[0]);

// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
// const obj = { x: 1, y: 2 };
// const copy = { ...obj };
// console.log(copy); // { x: 1, y: 2 }
// console.log(obj === copy); // false

// // 객체 병합
// const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
// console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  // todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
}

toggleCompletedById(2);

console.log(todos);

todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos.map(todo => ({ ...todo, completed: true }));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

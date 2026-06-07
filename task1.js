// =========================
// Part A — Spot the bug
// =========================

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(`Tick ${i}`);
  }, i * 1000);
}

/*
Why does this happen?

Because var is function-scoped, all iterations share the same i variable.
The for loop finishes immediately and i becomes 6 before any setTimeout
callback executes.

When the callbacks finally run, they all read the same variable i,
whose value is already 6.

Output:
Tick 6
Tick 6
Tick 6
Tick 6
Tick 6
*/


// =========================
// Part B — Fix with let
// =========================

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(`Tick ${i}`);
  }, i * 1000);
}

/*
Why does let fix it?

let creates a new binding for i on every iteration.
Each callback remembers its own copy of i.

Output:
Tick 1
Tick 2
Tick 3
Tick 4
Tick 5
*/


// =========================
// Part C — Fix with Closure
// =========================

for (var i = 1; i <= 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(`Tick ${i}`);
    }, i * 1000);
  })(i);
}

/*
The immediately invoked arrow function receives the current value of i
and stores it in its own scope. Each callback uses that captured value.
*/


// =========================
// Bonus
// =========================

const tick = (label, delay) => {
  setTimeout(() => {
    console.log(label);
  }, delay);
};

for (let i = 1; i <= 5; i++) {
  tick(`Tick ${i}`, i * 1000);
}
// =========================
// Part A — buildRow
// =========================

const buildRow = (num, cols) => {
  let row = "";

  for (let i = 1; i <= cols; i++) {
    row += num;

    if (i < cols) {
      row += " ";
    }
  }

  return row;
};

console.log(buildRow(3, 4)); // "3 3 3 3"
console.log(buildRow(7, 2)); // "7 7"


// =========================
// Part B — Print staircase
// =========================

for (let i = 1; i <= 10; i++) {
  console.log(`Row ${i}: ${buildRow(i, i)}`);
}


// =========================
// Part C — Find heavy row
// =========================

function findHeavyRow(limit) {
  let result = "";

  outer:
  for (let row = 1; row <= 100; row++) {
    let sum = 0;

    for (let col = 1; col <= row; col++) {
      sum += row;

      if (sum >= limit) {
        result = `Row ${row} hit the limit: sum = ${sum}`;
        break outer;
      }
    }
  }

  return result;
}

console.log(findHeavyRow(50));


// =========================
// Bonus
// =========================

function findHeavyRowBonus(limit, maxRows) {
  let result = "";

  outer:
  for (let row = 1; row <= maxRows; row++) {
    let sum = 0;

    for (let col = 1; col <= row; col++) {
      sum += row;

      if (sum >= limit) {
        result = `Row ${row} hit the limit: sum = ${sum}`;
        break outer;
      }
    }
  }

  return result;
}

console.log(findHeavyRowBonus(200, 20));
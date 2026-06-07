// Secret PIN digits — do not change these
const s1 = 3;
const s2 = 1;
const s3 = 4;


// =========================
// Main Solution
// =========================

const crackPin = (s1, s2, s3) => {
  let attempts = 0;

  outer:
  for (let hundreds = 1; hundreds <= 5; hundreds++) {
    for (let tens = 1; tens <= 5; tens++) {
      for (let units = 1; units <= 5; units++) {

        attempts++;

        if (
          hundreds === s1 &&
          tens === s2 &&
          units === s3
        ) {
          break outer;
        }
      }
    }
  }

  return attempts;
};

const attempts = crackPin(s1, s2, s3);

console.log(`PIN found: ${s1}-${s2}-${s3}`);
console.log(`Cracked in ${attempts} attempt(s)`);


// =========================
// Bonus A
// =========================

const bonusAttempts = crackPin(5, 5, 5);

console.log("Bonus A");
console.log(`PIN found: 5-5-5`);
console.log(`Cracked in ${bonusAttempts} attempt(s)`);


// =========================
// Bonus B
// =========================

const crackPinWithDefaults = (
  s1 = 1,
  s2 = 1,
  s3 = 1
) => {
  let attempts = 0;

  outer:
  for (let hundreds = 1; hundreds <= 5; hundreds++) {
    for (let tens = 1; tens <= 5; tens++) {
      for (let units = 1; units <= 5; units++) {

        attempts++;

        if (
          hundreds === s1 &&
          tens === s2 &&
          units === s3
        ) {
          break outer;
        }
      }
    }
  }

  return attempts;
};

console.log(
  `Default PIN attempts: ${crackPinWithDefaults()}`
);

console.log(
  `PIN 3-1-4 attempts: ${crackPinWithDefaults(3, 1, 4)}`
);
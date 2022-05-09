'use strict';

/* const x = 23;

const calcAge = birthyear => 2022 - birthyear;

console.log(calcAge(1997));
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* what is temperature amplitude : difference between highest and lowest temp */
// How to compute max an min temp?
// whats a sensor error? and what to do?

// 1. how to ignore errors?
// 2. find max value in temp array
// 3. find min value in temp array
// 4. subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; //ignore errors in number array

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Function should now receive 2 arrays of temps
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays
// Merge 2 arrays --

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); // merge 2 arrays - concat
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; //ignore errors in number array

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

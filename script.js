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

/* const calcTempAmplitude = function (temps) {
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
console.log(amplitude); */

// Function should now receive 2 arrays of temps
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays
// Merge 2 arrays --

/* const calcTempAmplitudeNew = function (t1, t2) {
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
console.log(amplitudeNew); */

// Debugging
/* 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // c) FIX
    // value: Number(prompt('Degrees celsiurs:')),
    value: 10,
  };

  // B) Find
  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the BUG
console.log(measureKelvin());
 */

/* Coding Challenge N1 */

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17??C in 1 days ... 21??C in 2 days ... 23??C in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1
// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ??C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

/* const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  ` ... ${data1[0]}??C in 1 days ... ${data1[1]}??C in 2 days ... ${data1[2]}??C in 3 days }`
);

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}??C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);
 */

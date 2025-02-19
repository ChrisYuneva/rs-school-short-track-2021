/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = n.toString();
  let sum = 0;

  if (num.length === 1) {
    sum = parseInt(num, 10);
    return sum;
  }

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i], 10);
  }

  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;

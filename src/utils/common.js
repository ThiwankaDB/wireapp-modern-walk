/**
 * Splits an array into an array of sub-arrays (chunks) of a specified size.
 *
 * @param {Array} arr - The array to be chunked.
 * @param {number} chunkSize - The desired size of each chunk sub-array.
 * @returns {Array<Array>} A new array containing sub-arrays of the original array,
 *                         each with a maximum length of `chunkSize`.
 *
 * @throws {TypeError}  - If `arr` is not an array, `chunkSize` is not a number,
 *                        or `chunkSize` is less than or equal to zero.
 *
 * @example
 * ```
 * const numbers = [1, 2, 3, 4, 5, 6, 7];
 * const chunks = chunkArray(numbers, 2);
 * console.log(chunks); // Output: [[1, 2], [3, 4], [5, 6], [7]]
 * ```
 */
function chunkArray(arr, chunkSize) {
  // Error handling for invalid input
  if (!Array.isArray(arr) || chunkSize <= 0 || typeof chunkSize !== 'number') {
    return arr;
  }

  const chunkedArray = [];
  let i = 0;
  const n = arr.length;

  // Iterate through the original array
  while (i < n) {
    // Create a new chunk array
    const chunk = [];

    // Fill the chunk array with elements from the original array
    while (chunk.length < chunkSize && i < n) {
      chunk.push(arr[i]);
      i++;
    }

    // Add the filled chunk to the chunkedArray
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export { chunkArray, scrollToTop };

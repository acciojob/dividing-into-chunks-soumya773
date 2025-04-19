const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  n = parseInt(n); // Convert input to number
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      currentChunk = [num];
      currentSum = num;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)))

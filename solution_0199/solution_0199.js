// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

function averages(numbers) {
  if (!numbers || numbers.length < 2) {
    return []
  }
  const result = []
  for (let i = 0; i < numbers.length - 1; i++) {
    const average = (numbers[i] + numbers[i + 1]) / 2
    result.push(average)
  }
  return result
}

console.log(averages([2, 2, 2, 2]), [2, 2, 2, 2])
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0])
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5])

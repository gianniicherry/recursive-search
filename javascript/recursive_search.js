function recursiveSearch(arr, target) {
  // Base case: If the array is empty, return false (target not found).
  if (arr.length === 0) {
    return false;
  }
  
  // If the current element is equal to the target, return true.
  if (arr[0] === target) {
    return true;
  }
  
  // Recursive call with the rest of the array (excluding the first element) and the target.
  return recursiveSearch(arr.slice(1), target);
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

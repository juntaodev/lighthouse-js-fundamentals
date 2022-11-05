function sumLargestNumbers(arr) {
  let largest = 0
  let secondLargest = 0
  let sum = largest + secondLargest
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return sum
}
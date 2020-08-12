//start a loop to iterate through each item in the array starting at the end
//start a second loop to compare the index with the index + 1
//loop through this one less time than the previous iteration since we have already sorted the final element of the array
//if index > index + 1 SWAP them.
//if the outer loop completes one time with no swaps break out of the loop

function bubbleSort1(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
         console.log("comparing", arr[j], "&&", arr[j+1])
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
      }
      console.log('one loop completed')
		if (noSwaps) break;
   }
   console.log("Final Result", arr)
	return arr;
}

bubbleSort1([1, 5, 45, 3, 23, 78, 65, 18]);

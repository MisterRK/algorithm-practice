//start by picking the 2nd ele in arr
//compare the second el with the one beofer and swap if needed
//continue to next element and if it is in the incorrect order,
// iterate through the sorted portion to place the element in the correct place

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > currentVal) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = currentVal;
		console.log(arr, currentVal);
	}
	return arr;
}

insertionSort([2, 1, 9, 76, 4]);

//worst case you are sorting each of the numbers every time.
//[4,3,2,1]

//works well where live data is coming in and we are sorting it as it is presented to us.
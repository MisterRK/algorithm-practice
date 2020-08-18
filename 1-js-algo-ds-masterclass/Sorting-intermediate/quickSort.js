
//helper function for swapping two elements in an array in place.
function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

//helper function for defining the pivot or partition and putting it in the correct position in the array.
//takes three arguments, arr, start, and end
function pivot(arr, start = 0, end = arr.length + 1) {
	//pick a pivot ( we are using first index)
	let pivot = arr[start];
	let swapIdx = start;
	//look at each item and compare its value to our pivot.
	for (let i = start + 1; i < arr.length; i++) {
		//if less than our pivot increase swapIdx ( tracking how many items we have that is less than pivot )
		//then swap the index we are looking at with what ever is currently at our swap idx
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
			console.log(arr);
		}
	}
	swap(arr, start, swapIdx);
	console.log(arr);
	return swapIdx;
}

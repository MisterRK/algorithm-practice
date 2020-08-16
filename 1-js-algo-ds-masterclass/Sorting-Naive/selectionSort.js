//On2 time complexity
//Store the first element you see as the mmin until  you find a smaller number
//if smaller is found
   //reassign the min and continue to go through the array
//if the min is not the value(index) you started with
   //swap the two values
//repeat until the array is sorted.

function selectionSort(arr) {

	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			console.log("comparing", arr[i], arr[j], "lowest is", arr[min]);
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) {
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
			console.log("finished one loop", arr);
		}
	}
	return arr;
}

selectionSort([34, 22, 10, 19, 17]);


//Where is this the best? 
   //if we are worried about memory this is best because we are only making one swap through each iteration of the array. Bubble sort for example is making many swaps.
//Why are we learning this?
//It scales so much better.
//What's the catch?
//They will take longer to understand. They are more complicated.

//Pseudocode
//Decomposing an array into smaller arrays of 0 or 1 elements, the build them back together.

function merge(arr1, arr2) {
	//create a place for the answer to go
	let solution = [];
	//create two pointers so we can iterate through each array one time
	let i = 0;
	let j = 0;
	//while we have unchecked items in ONE of the arrays.
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			solution.push(arr1[i]);
			i++;
		} else {
			solution.push(arr2[j]);
			j++;
		}
	}
	//if we reach the end of one array. We add the non-iterated values to the solution
	while (i < arr1.length) {
		solution.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		solution.push(arr2[j]);
		j++;
	}

	return solution;
}

function mergeSort(arr) {
   //base case. if an array has a length of 0 or 1 we know that array is sorted.
   if (arr.length <= 1) return arr;
   //find middle of the array and split it into two arrays ( left and right )
   let mid = Math.floor(arr.length / 2);
   //recursively call mergeSort on the smaller arrays we just created
	let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));
   return merge(left,right)
}

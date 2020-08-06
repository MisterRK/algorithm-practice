//only works on sorted arrays

function binarySearch(arr, elm) {
   // find the left most value to consider
   let start = 0;
   //find the right most value to consider
   let end = arr.length - 1;
   //find a value close to the middle to consider and start checking against 
   let middle = Math.floor((start + end) / 2);
   
   //while our middle is not what we are looking for.
	while (arr[middle] !== elm && start <= end) {
      //if it is less than middle => we should check the left side of the array... larger values ( right ) are definitely not going to be right
		if (elm < arr[middle]) {
      //re-assign end value to look at left side of array
         end = middle - 1;
      //if it is more than middle => we should look at the ride side of the array... left values aren't going to be correct
		} else {
         //re-assign start value to right side of array
			start = middle + 1;
      }
      //re-calculate middle since we changed the sub set of sorted values we are looking at
		middle = Math.floor((start + end) / 2);
   }
   //if we found what we are looking for give me the index where it is ... else return -1
   return arr[middle] === elm ? middle : -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50);

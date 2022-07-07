// There are n different activities are given with their starting time and ending time.
// Select the maximum number of activities to be done by a single person if only one activity
// can be performed at a time.


// Test Case 1
// input:[[10,16],[2,8],[1,6],[7,12]]
// Ouput: [[1,6],[7,12]];

// Test Case 2
// Input:[[10,16],[2,8],[1,16],[7,12]]
// Output: [[2,8],[10,16]];
let arr = [[10,16],[2,8],[1,16],[7,12]];
arr.sort((a,b)=> a[1]-b[1]);
 let activity = [];
 let endtime = 0;
for (let index = 0; index < arr.length; index++) {
     let currentStartTime = arr[index][0];
     if(currentStartTime >= endtime){
         activity.push(arr[index]);
         endtime = arr[index][1];
     }
}  
console.log(activity);

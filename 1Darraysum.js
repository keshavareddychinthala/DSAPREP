`Problem Statement
Running Sum of 1d Array:Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
Test case1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
`;
//logic is simple,
//for loop starts with 1index and add previous value to current value
//example  1,1+3,1+3+6,1+3+6+10

function sumOfArray(arr){
    for(let i=1;i<arr.length;i++){
        arr[i]+=arr[i-1];
    }
    return arr;
}

console.log(sumOfArray([1,2,3,4]),"summmm")
console.log(sumOfArray([ 1, 3, 6, 10 ]),"summmm")


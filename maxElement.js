`
https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array
`

//first approach

function maxElementfirstApproach(arr){
    return Math.max(...arr);
}

//second approach
function maxElementsecondApproach(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        max=Math.max(arr[i],max);
    }
    return max;
}

//third approach
function maxElementthirdApproach(arr){
    arr= arr.sort((a,b)=>a-b);
    return arr[arr.length-1];
}


console.log(maxElementfirstApproach([1,4,35,1,3,1,]));
console.log(maxElementsecondApproach([1,4,35,1,3,1,]));
console.log(maxElementthirdApproach([1,4,35,1,3,1,]))





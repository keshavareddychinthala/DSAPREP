`
https://leetcode.com/problems/matrix-diagonal-sum/description/
`

var diagonalSum = function(mat) {
    let sum = 0;
       for(let i=0;i<mat.length;i++){
           if(i==mat.length-i-1){
               sum+=mat[i][i];
           }
           else{
               sum+=mat[i][i]+mat[i][mat.length-i-1];
           }
       }
      
      return sum;  
  };
  


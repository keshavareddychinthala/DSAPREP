// Maximum Number of Words Found in Sentences

`https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/`


var mostWordsFound = function(sentences) {
    let max=0;
      sentences.map(x=>{
       let length=x.split(" ").length;
        max=Math.max(max,length)
      });
      return max;
   
   };
   
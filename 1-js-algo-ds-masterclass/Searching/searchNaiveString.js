//searching for a substring or a pattern
//On2 => not a great solution
function stringSearch (string, substring){
   let count = 0;
   for(let i =0; i< string.length; i++){
      for(let j = 0; j < substring.length; j++){
         console.log(substring[j], string[i+j])

         if(substring[j] !== string[i+j]){
               console.log("BREAK")
               break;
         }

         if(j === substring.length - 1) {
               console.log("FOUND ONE");
               count++;
            }        
      }
   }
   console.log(count)
   return count;
}

//should return 2
stringSearch("wow omg zomg", "omg")
//should return 1
stringSearch("lorie loled", "lol")
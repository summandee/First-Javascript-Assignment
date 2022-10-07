// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  • If you want to try more comparisons, write more tests. 
//  • Have at least one True and one False result for each of the following:
        // 1• Tests using the lower case function
        // 2• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
        // 3• Tests using "and" and "or" operators
        // 4• Test whether an item is in a array
        // 5• Test whether an item is not in a array
        // 6• Tests for equality and inequality with strings


        // 1• Tests using the lower case function
                let text = "Hello World!";
                let result = text.toLowerCase();
                let  isLowerCase = result;

                            console.log(" isLowerCase ==result ?  ' Yes  Text is Lower Case' ");
                            console.log( isLowerCase == result );
                            console.log( isLowerCase !== result );
        
     // 2• Numerical tests involving equality and inequality, 
            //  greater than and less than, greater than or equal to, and less than or equal to


     //  greater than and less than  :
      let a = 33 ;
      let b = 20

             let   isNumGreater = (a > b);
                     console.log( isNumGreater );
                    //************ *//
             let isNumLessThan =(a < b)
             console.log( isNumLessThan );

         //   greater than or equal to  :
                let x = 5;
                    let  result_x = (x >= 8);
                        console.log(result_x)
    
        // less than or equal to  :
                    let  y = 10;
                    let  result_y = (y <= 8);
                            console.log(result_y)

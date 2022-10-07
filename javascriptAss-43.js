//  43.	Unchanged Magicians: 
//   Start with your work from Exercise 42. 
 //  Call the function make_great() with a copy of the array of magicians’ names.
   // Because the original array will be unchanged, return the new array and store it in a separate array. 
     //Call show_magicians() with each array to show
       // that you have one array of the original names and one array with the Great added to each magician’s name.



       
  //********Start work from  Exercise 42*******//

  magician = ["JAY MARSHALL", "MAX MAVEN", "CAMPBELL McRAE"];

          function show_magician(magician) {
              console.log(" *The Name_List of  magician*  \n")
              for (let i = 0; i < magician.length; i++) {
                  console.log(magician[i] + "\n")
              }
          }

    //******** function called make_great() that modifies the array of magicians*******//

          function make_great(magician) {
            console.log(" ** Great Magician List Name ** " );
            for (let i = 0; i < magician.length; i++) {
                console.log(magician[i] + " The Great" + "\n");
            }
        }

      show_magician(magician);
      make_great(magician.reverse());
       let new_array = [...magician].reverse();


    //******** Original array of magicians*******//

       function orignal(new_array ) {
        console.log(" *** Original array of magicians***   \n ");
          for (let i = 0; i < new_array.length; i++) {
            console.log(new_array[i] + "\n");
          }
        }
        orignal(new_array)



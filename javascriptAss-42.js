//  42.	Great Magicians: 
  //Start with a copy of your program from Exercise 41.
    // Write a function called make_great() that modifies the array of magicians
    // by adding the phrase the Great to each magician’s name. 
      // Call show_magicians() to see that the list has actually been modified.



      //********copy of  program from Exercise 41*******//

      magician = ["JAY MARSHALL", "MAX MAVEN", "CAMPBELL McRAE"];

            function show_magician(magician) {
                console.log(" The Name_List of  magician  \n")
                for (let i = 0; i < magician.length; i++) {
                    console.log(magician[i] + "\n")
                }
            }
            show_magician(magician);

     //******** function called make_great() that modifies the array of magicians*******//
            function make_great(magician) {
                console.log(" Great Magician List Name" );
                for (let i = 0; i < magician.length; i++) {
                    console.log(magician[i] + " The Great" + "\n");
                }
            }
            make_great(magician.reverse());


